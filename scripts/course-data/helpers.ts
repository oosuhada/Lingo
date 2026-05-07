import type { LessonSeed, VocabularyItem } from "./types";

export const languageLesson = (
  title: string,
  vocabulary: VocabularyItem[]
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
