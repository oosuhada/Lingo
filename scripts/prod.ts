import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";

import { courseSeeds, type CourseSeed } from "./course-data";
import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

const coursesData: CourseSeed[] = courseSeeds;

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
