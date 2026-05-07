import { uiCopy, type UiLocale } from "@/lib/ui-copy";

export type CourseKind = "language" | "hanja" | "programming";

type CourseLike = {
  title: string;
};

export type CourseTheme = {
  kind: CourseKind;
  label: string;
  description: string;
  accentClass: string;
  borderClass: string;
  softClass: string;
  textClass: string;
  bannerClass: string;
  bannerBorderClass: string;
  lessonButtonClass: string;
  lessonButtonActiveClass: string;
  lessonButtonCompleteClass: string;
  lessonButtonLockedClass: string;
  glowClass: string;
};

const programmingTitles = new Set(["python", "java"]);

export const getCourseKind = (course: CourseLike): CourseKind => {
  const title = course.title.toLowerCase();

  if (title === "hanja") return "hanja";
  if (programmingTitles.has(title)) return "programming";

  return "language";
};

export const getCourseTheme = (course: CourseLike): CourseTheme => {
  const kind = getCourseKind(course);

  if (kind === "programming") {
    return {
      kind,
      label: "Programming",
      description: "Code drills, syntax memory, and problem-solving flow.",
      accentClass: "bg-slate-950",
      borderClass: "border-slate-800",
      softClass: "bg-slate-100 dark:bg-slate-800/70",
      textClass: "text-slate-800 dark:text-slate-100",
      bannerClass: "bg-slate-950",
      bannerBorderClass: "border-slate-800",
      lessonButtonClass: "border-slate-800 bg-slate-950",
      lessonButtonActiveClass: "border-emerald-600 bg-emerald-500",
      lessonButtonCompleteClass: "border-cyan-600 bg-cyan-500",
      lessonButtonLockedClass:
        "border-slate-300 bg-slate-200 dark:border-slate-600 dark:bg-slate-700",
      glowClass: "shadow-[0_18px_45px_rgba(15,23,42,0.18)]",
    };
  }

  if (kind === "hanja") {
    return {
      kind,
      label: "Hanja",
      description: "Characters, meanings, and Korean reading patterns.",
      accentClass: "bg-neutral-950",
      borderClass: "border-neutral-800",
      softClass: "bg-neutral-100 dark:bg-neutral-800/70",
      textClass: "text-neutral-800 dark:text-neutral-100",
      bannerClass: "bg-neutral-950",
      bannerBorderClass: "border-neutral-800",
      lessonButtonClass: "border-neutral-800 bg-neutral-950",
      lessonButtonActiveClass: "border-amber-600 bg-amber-500",
      lessonButtonCompleteClass: "border-yellow-600 bg-yellow-400",
      lessonButtonLockedClass:
        "border-neutral-300 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-700",
      glowClass: "shadow-[0_18px_45px_rgba(23,23,23,0.16)]",
    };
  }

  return {
    kind,
    label: "Language",
    description: "Vocabulary, listening cues, and translation practice.",
    accentClass: "bg-green-500",
    borderClass: "border-green-600",
    softClass: "bg-green-50 dark:bg-green-500/15",
    textClass: "text-green-600 dark:text-green-300",
    bannerClass: "bg-green-500",
    bannerBorderClass: "border-green-600",
    lessonButtonClass: "border-green-600 bg-green-500",
    lessonButtonActiveClass: "border-green-600 bg-green-500",
    lessonButtonCompleteClass: "border-yellow-500 bg-yellow-400",
    lessonButtonLockedClass:
      "border-neutral-300 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-700",
    glowClass: "shadow-[0_18px_45px_rgba(34,197,94,0.16)]",
  };
};

export const getCourseMicrocopy = (
  course: CourseLike,
  locale: UiLocale = "en"
) => {
  const theme = getCourseTheme(course);

  return uiCopy[locale].microcopy[theme.kind];
};
