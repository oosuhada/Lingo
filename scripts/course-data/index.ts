import { englishCourse } from "./english";
import { hanjaCourse } from "./hanja";
import { italianCourse } from "./italian";
import { japaneseCourse } from "./japanese";
import { koreanCourse } from "./korean";
import { spanishCourse } from "./spanish";
import type { CourseSeed } from "./types";

export const naturalCourses: CourseSeed[] = [
  spanishCourse,
  englishCourse,
  koreanCourse,
  japaneseCourse,
  italianCourse,
  hanjaCourse,
];

export type { ChallengeSeed, CourseSeed, LessonSeed, UnitSeed } from "./types";
