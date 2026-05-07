import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { QUESTS } from "@/constants";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { uiCopy } from "@/lib/ui-copy";
import { getUiLocaleFromCookie } from "@/lib/ui-locale-server";

const QuestsPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const uiLocaleData = getUiLocaleFromCookie();

  const [userProgress, userSubscription, uiLocale] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    uiLocaleData,
  ]);

  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

  const isPro = !!userSubscription?.isActive;
  const copy = uiCopy[uiLocale].questsPanel;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo uiLocale={uiLocale} />}
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image
            src="/memoji/replacements/quests.png"
            alt="Quests"
            height={90}
            width={90}
          />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            {copy.title}
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            {copy.description}
          </p>

          <ul className="w-full">
            {QUESTS.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;

              return (
                <div
                  className="flex w-full items-center gap-x-4 border-t-2 p-4"
                  key={quest.title}
                >
                  <Image
                    src="/memoji/replacements/points.png"
                    alt="Points"
                    width={60}
                    height={60}
                  />

                  <div className="flex w-full flex-col gap-y-2">
                    <p className="text-xl font-bold text-neutral-700">
                      {copy.earnXp(quest.value)}
                    </p>

                    <Progress value={progress} className="h-3" />
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default QuestsPage;
