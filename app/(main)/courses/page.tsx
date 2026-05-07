import { getCourses, getUserProgress } from "@/db/queries";
import { getCourseKind, type CourseKind } from "@/lib/course-style";
import { uiCopy } from "@/lib/ui-copy";
import { getUiLocaleFromCookie } from "@/lib/ui-locale-server";

import { List } from "./list";

const courseOrder = [
  "korean",
  "japanese",
  "spanish",
  "italian",
  "english",
  "hanja",
  "python",
  "java",
];

const getCourseOrder = (title: string) => {
  const index = courseOrder.indexOf(title.toLowerCase());

  return index === -1 ? courseOrder.length : index;
};

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();
  const uiLocaleData = getUiLocaleFromCookie();

  const [courses, userProgress, uiLocale] = await Promise.all([
    coursesData,
    userProgressData,
    uiLocaleData,
  ]);
  const copy = uiCopy[uiLocale].courses;

  const groups: {
    kind: CourseKind;
    title: string;
    description: string;
  }[] = [
    {
      kind: "language",
      title: copy.languageTitle,
      description: copy.languageDescription,
    },
    {
      kind: "hanja",
      title: copy.hanjaTitle,
      description: copy.hanjaDescription,
    },
    {
      kind: "programming",
      title: copy.programmingTitle,
      description: copy.programmingDescription,
    },
  ];

  return (
    <div className="mx-auto min-h-full max-w-[980px] px-3 pb-10 pt-6">
      <header
        className="glass-panel-strong motion-tilt-card mb-8 space-y-2 rounded-3xl p-6"
        data-motion="reveal"
        data-magnetic="0.025"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-green-500">
          {copy.eyebrow}
        </p>
        <h1 className="text-3xl font-extrabold text-foreground">
          {copy.title}
        </h1>
        <p className="max-w-2xl text-sm font-medium leading-6 text-muted-foreground">
          {copy.description}
        </p>
      </header>

      <div className="space-y-10">
        {groups.map((group) => {
          const groupCourses = courses
            .filter((course) => getCourseKind(course) === group.kind)
            .sort(
              (firstCourse, secondCourse) =>
                getCourseOrder(firstCourse.title) -
                getCourseOrder(secondCourse.title)
            );

          if (groupCourses.length === 0) return null;

          return (
            <List
              key={group.kind}
              title={group.title}
              description={group.description}
              courses={groupCourses}
              activeCourseId={userProgress?.activeCourseId}
              uiLocale={uiLocale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoursesPage;
