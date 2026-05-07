import { redirect } from "next/navigation";

import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { getUiLocaleFromCookie } from "@/lib/ui-locale-server";

import { Quiz } from "../quiz";

type LessonIdPageProps = {
  params: Promise<{
    lessonId: string;
  }>;
};

const LessonIdPage = async ({ params }: LessonIdPageProps) => {
  const { lessonId } = await params;

  const lessonData = getLesson(Number(lessonId));
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const uiLocaleData = getUiLocaleFromCookie();

  const [lesson, userProgress, userSubscription, uiLocale] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
    uiLocaleData,
  ]);

  if (!lesson || !userProgress) return redirect("/learn");

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      courseTitle={lesson.unit.course.title}
      uiLocale={uiLocale}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  );
};

export default LessonIdPage;
