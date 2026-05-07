import { languageLesson } from "./helpers";
import type { CourseSeed } from "./types";

export const englishCourse: CourseSeed = {
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
};
