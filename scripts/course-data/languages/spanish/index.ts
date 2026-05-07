import type { CourseSeed } from "../../types";
import { unit1 } from "./units/unit-1";
import { unit2 } from "./units/unit-2";
import { unit3 } from "./units/unit-3";
import { unit4 } from "./units/unit-4";
import { unit5 } from "./units/unit-5";
import { unit6 } from "./units/unit-6";
import { buildLanguageSupplementUnits } from "../supplement";

export const spanishCourse: CourseSeed = {
  kind: "language",
  title: "Spanish",
  imageSrc: "/es.svg",
  units: [
    unit1,
    unit2,
    unit3,
    unit4,
    unit5,
    unit6,
    ...buildLanguageSupplementUnits("Spanish"),
  ],
};
