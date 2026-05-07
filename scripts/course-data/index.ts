import { englishCourse } from "./languages/english";
import { italianCourse } from "./languages/italian";
import { japaneseCourse } from "./languages/japanese";
import { koreanCourse } from "./languages/korean";
import { spanishCourse } from "./languages/spanish";
import { hanjaCourse } from "./hanja";
import { programmingCourses } from "./programming";
import type { CourseSeed } from "./types";

export const languageCourses: CourseSeed[] = [
  spanishCourse,
  englishCourse,
  koreanCourse,
  japaneseCourse,
  italianCourse,
];

export const hanjaCourses: CourseSeed[] = [hanjaCourse];

export const naturalCourses: CourseSeed[] = [
  ...languageCourses,
  ...hanjaCourses,
];

export const courseSeeds: CourseSeed[] = [
  ...naturalCourses,
  ...programmingCourses,
];

export { programmingCourses };

export type {
  ChallengeSeed,
  CourseKind,
  CourseSeed,
  LessonSeed,
  UnitSeed,
} from "./types";
