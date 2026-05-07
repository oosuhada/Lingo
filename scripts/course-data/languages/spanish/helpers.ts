import type { LessonSeed, UnitSeed, VocabularyItem } from "../../types";

type SpanishLessonInput = {
  title: string;
  items: VocabularyItem[];
};

const buildLesson = ({ title, items }: SpanishLessonInput): LessonSeed => ({
  title,
  challenges: items.flatMap((item, index) => [
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
        ...items
          .filter((_, otherIndex) => otherIndex !== index)
          .slice(0, 2)
          .map((other) => ({ text: other.source, correct: false })),
      ],
    },
  ]),
});

export const buildSpanishUnit = ({
  title,
  description,
  lessons,
}: {
  title: string;
  description: string;
  lessons: SpanishLessonInput[];
}): UnitSeed => ({
  title,
  description,
  lessons: lessons.map(buildLesson),
});
