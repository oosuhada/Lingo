import { getCourses, getUserProgress } from "@/db/queries";
import { getCourseKind, type CourseKind } from "@/lib/course-style";

import { List } from "./list";

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  const groups: {
    kind: CourseKind;
    title: string;
    description: string;
  }[] = [
    {
      kind: "language",
      title: "Language Courses",
      description: "Everyday listening, translation, and vocabulary paths.",
    },
    {
      kind: "hanja",
      title: "Hanja Studio",
      description: "Character-first lessons for meaning and reading memory.",
    },
    {
      kind: "programming",
      title: "Code Labs",
      description: "Python and Java courses shaped for syntax drills.",
    },
  ];

  return (
    <div className="mx-auto h-full max-w-[980px] px-3 pb-10">
      <header className="mb-8 space-y-2">
        <p className="text-sm font-bold uppercase tracking-wide text-green-500">
          Choose your path
        </p>
        <h1 className="text-3xl font-extrabold text-neutral-800">
          Course Library
        </h1>
        <p className="max-w-2xl text-sm font-medium leading-6 text-neutral-500">
          Languages, Hanja, and programming now have separate course surfaces so
          each track can grow into its own learning experience.
        </p>
      </header>

      <div className="space-y-10">
        {groups.map((group) => {
          const groupCourses = courses.filter(
            (course) => getCourseKind(course) === group.kind
          );

          if (groupCourses.length === 0) return null;

          return (
            <List
              key={group.kind}
              title={group.title}
              description={group.description}
              courses={groupCourses}
              activeCourseId={userProgress?.activeCourseId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoursesPage;
