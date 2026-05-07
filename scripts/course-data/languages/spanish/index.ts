import type { CourseSeed } from "../../types";
import { unit1 } from "./units/unit-1";
import { unit2 } from "./units/unit-2";

export const spanishCourse: CourseSeed = {
  kind: "language",
  title: "Spanish",
  imageSrc: "/es.svg",
  units: [unit1, unit2],
};
