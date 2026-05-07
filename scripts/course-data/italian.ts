import { languageLesson } from "./helpers";
import type { CourseSeed } from "./types";

export const italianCourse: CourseSeed = {
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
};
