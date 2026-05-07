import { languageLesson } from "./helpers";
import type { CourseSeed } from "./types";

export const koreanCourse: CourseSeed = {
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
};
