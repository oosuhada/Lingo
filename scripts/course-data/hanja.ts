import { languageLesson } from "./helpers";
import type { CourseSeed } from "./types";

export const hanjaCourse: CourseSeed = {
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
};
