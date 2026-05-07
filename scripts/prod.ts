import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";

import { naturalCourses, type CourseSeed } from "./course-data";
import * as schema from "@/db/schema";

type SourceCategory = {
  id: number;
  title: string;
  desc: string;
};

type SourceDrill = {
  title?: string;
  prompt?: string;
  answer?: string;
  options?: string[];
  blank?: string;
  blocks?: string[];
  full?: string;
  hint?: string;
};

type SourceQuestion = {
  id: number;
  cat: number;
  title: string;
  drills?: SourceDrill[];
};

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decodeHtml = (value: string) => {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
};

const stripHtml = (value = "") => {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|li|h\d)>/gi, "\n")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/\n{3,}/g, "\n\n")
    .trim();
};

const normalize = (value = "") => value.replace(/\s+/g, "").toLowerCase();

const unique = (values: string[]) => {
  const seen = new Set<string>();

  return values.filter((value) => {
    const key = normalize(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const loadSourceData = (fileName: string) => {
  const filePath = path.join(__dirname, "source-data", fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const context = { console };

  vm.createContext(context);
  vm.runInContext(
    `${source}\n;globalThis.__LINGO_SOURCE__ = { CATEGORIES, QUESTIONS };`,
    context
  );

  return (context as typeof context & {
    __LINGO_SOURCE__: {
      CATEGORIES: SourceCategory[];
      QUESTIONS: SourceQuestion[];
    };
  }).__LINGO_SOURCE__;
};

const buildProgrammingOptions = (drill: SourceDrill) => {
  const answer = stripHtml(drill.answer ?? "");
  const rawOptions = drill.options?.length
    ? drill.options.map(stripHtml)
    : [answer, ...(drill.blocks ?? []).slice(0, 3).map(stripHtml)];
  const values = unique(rawOptions);

  if (answer && !values.some((value) => normalize(value) === normalize(answer)))
    values.unshift(answer);

  if (values.length === 0) values.push("I understand");
  if (values.length === 1) values.push("Try another idea", "Not this one");

  const correctIndex = Math.max(
    values.findIndex((value, index) => {
      if (normalize(value) === normalize(answer)) return true;
      return index === 0 && !answer;
    }),
    0
  );

  return values.slice(0, 4).map((text, index) => ({
    text,
    correct: index === correctIndex,
  }));
};

const buildProgrammingCourse = ({
  title,
  imageSrc,
  sourceFile,
}: {
  title: string;
  imageSrc: string;
  sourceFile: string;
}): CourseSeed => {
  const { CATEGORIES, QUESTIONS } = loadSourceData(sourceFile);

  return {
    title,
    imageSrc,
    units: CATEGORIES.map((category) => {
      const categoryQuestions = QUESTIONS.filter(
        (question) => question.cat === category.id && question.drills?.length
      );

      return {
        title: `Unit ${category.id + 1}. ${category.title}`,
        description: category.desc,
        lessons: categoryQuestions.map((question) => ({
          title: stripHtml(question.title),
          challenges: (question.drills ?? []).map((drill, index) => ({
            type: "SELECT",
            question: stripHtml(drill.title || `Drill ${index + 1}`),
            prompt: stripHtml(drill.prompt),
            code: stripHtml(drill.blank || drill.full || ""),
            hint: stripHtml(drill.hint),
            options: buildProgrammingOptions(drill),
          })),
        })),
      };
    }),
  };
};

const coursesData: CourseSeed[] = [
  ...naturalCourses,
  buildProgrammingCourse({
    title: "Python",
    imageSrc: "/python.svg",
    sourceFile: "python-data2.js",
  }),
  buildProgrammingCourse({
    title: "Java",
    imageSrc: "/java.svg",
    sourceFile: "java-data.js",
  }),
];

const insertCourse = async (course: CourseSeed) => {
  const existingCourse = await db.query.courses.findFirst({
    where: eq(schema.courses.title, course.title),
  });

  const [insertedCourse] = existingCourse
    ? await db
        .update(schema.courses)
        .set({ imageSrc: course.imageSrc })
        .where(eq(schema.courses.id, existingCourse.id))
        .returning()
    : await db
        .insert(schema.courses)
        .values({ title: course.title, imageSrc: course.imageSrc })
        .returning();

  for (const [unitIndex, unit] of course.units.entries()) {
    const unitOrder = unitIndex + 1;
    const existingUnit = await db.query.units.findFirst({
      where: and(
        eq(schema.units.courseId, insertedCourse.id),
        eq(schema.units.order, unitOrder)
      ),
    });

    const [insertedUnit] = existingUnit
      ? await db
          .update(schema.units)
          .set({
            title: unit.title,
            description: unit.description,
          })
          .where(eq(schema.units.id, existingUnit.id))
          .returning()
      : await db
          .insert(schema.units)
          .values({
            courseId: insertedCourse.id,
            title: unit.title,
            description: unit.description,
            order: unitOrder,
          })
          .returning();

    for (const [lessonIndex, lesson] of unit.lessons.entries()) {
      const lessonOrder = lessonIndex + 1;
      const existingLesson = await db.query.lessons.findFirst({
        where: and(
          eq(schema.lessons.unitId, insertedUnit.id),
          eq(schema.lessons.order, lessonOrder)
        ),
      });

      const [insertedLesson] = existingLesson
        ? await db
            .update(schema.lessons)
            .set({ title: lesson.title })
            .where(eq(schema.lessons.id, existingLesson.id))
            .returning()
        : await db
            .insert(schema.lessons)
            .values({
              unitId: insertedUnit.id,
              title: lesson.title,
              order: lessonOrder,
            })
            .returning();

      for (const [challengeIndex, challenge] of lesson.challenges.entries()) {
        const challengeOrder = challengeIndex + 1;
        const challengeValues = {
          lessonId: insertedLesson.id,
          type: challenge.type ?? "SELECT",
          question: challenge.question,
          prompt: challenge.prompt ?? null,
          code: challenge.code ?? null,
          hint: challenge.hint ?? null,
          order: challengeOrder,
        };

        const existingChallenge = await db.query.challenges.findFirst({
          where: and(
            eq(schema.challenges.lessonId, insertedLesson.id),
            eq(schema.challenges.order, challengeOrder)
          ),
        });

        const [insertedChallenge] = existingChallenge
          ? await db
              .update(schema.challenges)
              .set(challengeValues)
              .where(eq(schema.challenges.id, existingChallenge.id))
              .returning()
          : await db
              .insert(schema.challenges)
              .values(challengeValues)
              .returning();

        await db
          .delete(schema.challengeOptions)
          .where(eq(schema.challengeOptions.challengeId, insertedChallenge.id));

        await db.insert(schema.challengeOptions).values(
          challenge.options.map((option) => ({
            challengeId: insertedChallenge.id,
            text: option.text,
            correct: option.correct,
            imageSrc: option.imageSrc,
            audioSrc: option.audioSrc,
          }))
        );
      }
    }
  }
};

const main = async () => {
  try {
    console.log("Seeding course catalog without deleting user progress");

    for (const course of coursesData) {
      console.log(`Seeding ${course.title}`);
      await insertCourse(course);
    }

    console.log("Database seeded successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

void main();
