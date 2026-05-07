import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import { getUiLocaleFromCookie } from "@/lib/ui-locale-server";

import { Header } from "./header";
import { Unit } from "./unit";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();
  const userSubscriptionData = getUserSubscription();
  const uiLocaleData = getUiLocaleFromCookie();

  const [
    userProgress,
    units,
    courseProgress,
    lessonPercentage,
    userSubscription,
    uiLocale,
  ] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData,
    userSubscriptionData,
    uiLocaleData,
  ]);

  if (!courseProgress || !userProgress) redirect("/courses");

  const activeCourse = userProgress.activeCourse;

  if (!activeCourse) redirect("/courses");

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="main-content-grid flex flex-row-reverse gap-8 xl:gap-10">
      <StickyWrapper>
        <UserProgress
          activeCourse={activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />

        {!isPro && <Promo uiLocale={uiLocale} />}
        <Quests points={userProgress.points} uiLocale={uiLocale} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              courseTitle={activeCourse.title}
              uiLocale={uiLocale}
              lessons={unit.lessons}
              activeLesson={courseProgress.activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
