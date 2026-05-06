import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

type ChallengeSeed = {
  type?: "SELECT" | "ASSIST";
  question: string;
  prompt?: string;
  code?: string;
  hint?: string;
  options: {
    text: string;
    correct: boolean;
    imageSrc?: string;
    audioSrc?: string;
  }[];
};

type LessonSeed = {
  title: string;
  challenges: ChallengeSeed[];
};

type UnitSeed = {
  title: string;
  description: string;
  lessons: LessonSeed[];
};

type CourseSeed = {
  title: string;
  imageSrc: string;
  units: UnitSeed[];
};

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

const languageLesson = (
  title: string,
  vocabulary: { source: string; target: string; alt: string[] }[]
): LessonSeed => ({
  title,
  challenges: vocabulary.flatMap((item, index) => [
    {
      type: "SELECT",
      question: `Which one means "${item.source}"?`,
      options: [
        { text: item.target, correct: true },
        ...item.alt.map((text) => ({ text, correct: false })),
      ],
    },
    {
      type: "ASSIST",
      question: item.target,
      options: [
        { text: item.source, correct: true },
        ...vocabulary
          .filter((_, otherIndex) => otherIndex !== index)
          .slice(0, 2)
          .map((other) => ({ text: other.source, correct: false })),
      ],
    },
  ]),
});

const spanishChallengeTemplates: ChallengeSeed[] = [
  {
    type: "SELECT",
    question: 'Which one of these is "the man"?',
    options: [
      {
        text: "el hombre",
        correct: true,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.mp3",
      },
      {
        text: "la mujer",
        correct: false,
        imageSrc: "/woman.svg",
        audioSrc: "/es_woman.mp3",
      },
      {
        text: "el chico",
        correct: false,
        imageSrc: "/boy.svg",
        audioSrc: "/es_boy.mp3",
      },
    ],
  },
  {
    type: "SELECT",
    question: 'Which one of these is "the woman"?',
    options: [
      {
        text: "la mujer",
        correct: true,
        imageSrc: "/woman.svg",
        audioSrc: "/es_woman.mp3",
      },
      {
        text: "el chico",
        correct: false,
        imageSrc: "/boy.svg",
        audioSrc: "/es_boy.mp3",
      },
      {
        text: "el hombre",
        correct: false,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.mp3",
      },
    ],
  },
  {
    type: "SELECT",
    question: 'Which one of these is "the boy"?',
    options: [
      {
        text: "la mujer",
        correct: false,
        imageSrc: "/woman.svg",
        audioSrc: "/es_woman.mp3",
      },
      {
        text: "el hombre",
        correct: false,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.mp3",
      },
      {
        text: "el chico",
        correct: true,
        imageSrc: "/boy.svg",
        audioSrc: "/es_boy.mp3",
      },
    ],
  },
  {
    type: "ASSIST",
    question: '"the man"',
    options: [
      {
        text: "la mujer",
        correct: false,
        audioSrc: "/es_woman.mp3",
      },
      {
        text: "el hombre",
        correct: true,
        audioSrc: "/es_man.mp3",
      },
      {
        text: "el chico",
        correct: false,
        audioSrc: "/es_boy.mp3",
      },
    ],
  },
  {
    type: "SELECT",
    question: 'Which one of these is "the zombie"?',
    options: [
      {
        text: "el hombre",
        correct: false,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.mp3",
      },
      {
        text: "la mujer",
        correct: false,
        imageSrc: "/woman.svg",
        audioSrc: "/es_woman.mp3",
      },
      {
        text: "el zombie",
        correct: true,
        imageSrc: "/zombie.svg",
        audioSrc: "/es_zombie.mp3",
      },
    ],
  },
  {
    type: "SELECT",
    question: 'Which one of these is "the robot"?',
    options: [
      {
        text: "el robot",
        correct: true,
        imageSrc: "/robot.svg",
        audioSrc: "/es_robot.mp3",
      },
      {
        text: "el zombie",
        correct: false,
        imageSrc: "/zombie.svg",
        audioSrc: "/es_zombie.mp3",
      },
      {
        text: "el chico",
        correct: false,
        imageSrc: "/boy.svg",
        audioSrc: "/es_boy.mp3",
      },
    ],
  },
  {
    type: "SELECT",
    question: 'Which one of these is "the girl"?',
    options: [
      {
        text: "la nina",
        correct: true,
        imageSrc: "/girl.svg",
        audioSrc: "/es_girl.mp3",
      },
      {
        text: "el zombie",
        correct: false,
        imageSrc: "/zombie.svg",
        audioSrc: "/es_zombie.mp3",
      },
      {
        text: "el hombre",
        correct: false,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.mp3",
      },
    ],
  },
  {
    type: "ASSIST",
    question: '"the zombie"',
    options: [
      {
        text: "la mujer",
        correct: false,
        audioSrc: "/es_woman.mp3",
      },
      {
        text: "el zombie",
        correct: true,
        audioSrc: "/es_zombie.mp3",
      },
      {
        text: "el chico",
        correct: false,
        audioSrc: "/es_boy.mp3",
      },
    ],
  },
];

const spanishLesson = (title: string): LessonSeed => ({
  title,
  challenges: spanishChallengeTemplates,
});

const spanishCourse: CourseSeed = {
  title: "Spanish",
  imageSrc: "/es.svg",
  units: [
    {
      title: "Unit 1",
      description: "Learn the basics of Spanish",
      lessons: ["Nouns", "Verbs", "Adjectives", "Phrases", "Sentences"].map(
        spanishLesson
      ),
    },
    {
      title: "Unit 2",
      description: "Learn intermediate Spanish",
      lessons: ["Nouns", "Verbs", "Adjectives", "Phrases", "Sentences"].map(
        spanishLesson
      ),
    },
  ],
};

const naturalCourses: CourseSeed[] = [
  spanishCourse,
  {
    title: "English",
    imageSrc: "/en.svg",
    units: [
      {
        title: "Unit 1",
        description: "Learn everyday English words and phrases",
        lessons: [
          languageLesson("Greetings", [
            { source: "안녕하세요", target: "hello", alt: ["goodbye", "apple"] },
            {
              source: "고마워요",
              target: "thank you",
              alt: ["please", "water"],
            },
            {
              source: "미안해요",
              target: "sorry",
              alt: ["yes", "no"],
            },
          ]),
          languageLesson("Basics", [
            { source: "물", target: "water", alt: ["bread", "book"] },
            { source: "책", target: "book", alt: ["school", "coffee"] },
            { source: "학교", target: "school", alt: ["house", "water"] },
          ]),
        ],
      },
    ],
  },
  {
    title: "Korean",
    imageSrc: "/ko.svg",
    units: [
      {
        title: "Unit 1",
        description: "Practice Korean greetings, nouns, and particles",
        lessons: [
          languageLesson("Greetings", [
            {
              source: "hello",
              target: "안녕하세요",
              alt: ["감사합니다", "미안합니다"],
            },
            {
              source: "thank you",
              target: "감사합니다",
              alt: ["안녕하세요", "괜찮아요"],
            },
            {
              source: "it's okay",
              target: "괜찮아요",
              alt: ["미안합니다", "책"],
            },
          ]),
          languageLesson("Particles", [
            { source: "topic marker", target: "은/는", alt: ["이/가", "을/를"] },
            { source: "subject marker", target: "이/가", alt: ["에", "에서"] },
            { source: "object marker", target: "을/를", alt: ["은/는", "와/과"] },
          ]),
        ],
      },
    ],
  },
  {
    title: "Japanese",
    imageSrc: "/jp.svg",
    units: [
      {
        title: "Unit 1",
        description: "Learn hiragana greetings and starter vocabulary",
        lessons: [
          languageLesson("Greetings", [
            {
              source: "hello",
              target: "こんにちは",
              alt: ["さようなら", "ありがとう"],
            },
            {
              source: "thank you",
              target: "ありがとう",
              alt: ["すみません", "はい"],
            },
            { source: "yes", target: "はい", alt: ["いいえ", "水"] },
          ]),
          languageLesson("Basics", [
            { source: "water", target: "水", alt: ["本", "学校"] },
            { source: "book", target: "本", alt: ["人", "水"] },
            { source: "school", target: "学校", alt: ["家", "本"] },
          ]),
        ],
      },
    ],
  },
  {
    title: "Italian",
    imageSrc: "/it.svg",
    units: [
      {
        title: "Unit 1",
        description: "Learn common Italian words and phrases",
        lessons: [
          languageLesson("Greetings", [
            { source: "hello", target: "ciao", alt: ["grazie", "prego"] },
            {
              source: "thank you",
              target: "grazie",
              alt: ["scusa", "ciao"],
            },
            { source: "please", target: "per favore", alt: ["libro", "acqua"] },
          ]),
          languageLesson("Basics", [
            { source: "water", target: "acqua", alt: ["pane", "libro"] },
            { source: "book", target: "libro", alt: ["scuola", "casa"] },
            { source: "school", target: "scuola", alt: ["acqua", "pane"] },
          ]),
        ],
      },
    ],
  },
  {
    title: "Hanja",
    imageSrc: "/hanja.svg",
    units: [
      {
        title: "Unit 1",
        description: "Connect common Hanja characters with Korean meanings",
        lessons: [
          languageLesson("Core characters", [
            { source: "person", target: "人", alt: ["山", "水"] },
            { source: "mountain", target: "山", alt: ["木", "日"] },
            { source: "water", target: "水", alt: ["火", "人"] },
          ]),
          languageLesson("Nature", [
            { source: "tree", target: "木", alt: ["金", "土"] },
            { source: "fire", target: "火", alt: ["水", "月"] },
            { source: "sun/day", target: "日", alt: ["月", "山"] },
          ]),
        ],
      },
    ],
  },
];

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

  await db
    .delete(schema.units)
    .where(eq(schema.units.courseId, insertedCourse.id));

  for (const [unitIndex, unit] of course.units.entries()) {
    const [insertedUnit] = await db
      .insert(schema.units)
      .values({
        courseId: insertedCourse.id,
        title: unit.title,
        description: unit.description,
        order: unitIndex + 1,
      })
      .returning();

    for (const [lessonIndex, lesson] of unit.lessons.entries()) {
      const [insertedLesson] = await db
        .insert(schema.lessons)
        .values({
          unitId: insertedUnit.id,
          title: lesson.title,
          order: lessonIndex + 1,
        })
        .returning();

      for (const [challengeIndex, challenge] of lesson.challenges.entries()) {
        const [insertedChallenge] = await db
          .insert(schema.challenges)
          .values({
            lessonId: insertedLesson.id,
            type: challenge.type ?? "SELECT",
            question: challenge.question,
            prompt: challenge.prompt,
            code: challenge.code,
            hint: challenge.hint,
            order: challengeIndex + 1,
          })
          .returning();

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
