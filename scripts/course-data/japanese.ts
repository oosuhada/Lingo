import { languageLesson } from "./helpers";
import type { CourseSeed } from "./types";

export const japaneseCourse: CourseSeed = {
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
};
