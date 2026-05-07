import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { UserProgress } from "@/components/user-progress";
import {
  getTopTenUsers,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import { uiCopy } from "@/lib/ui-copy";
import { getUiLocaleFromCookie } from "@/lib/ui-locale-server";

const LeaderboardPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const leaderboardData = getTopTenUsers();
  const uiLocaleData = getUiLocaleFromCookie();

  const [userProgress, userSubscription, leaderboard, uiLocale] =
    await Promise.all([
      userProgressData,
      userSubscriptionData,
      leaderboardData,
      uiLocaleData,
    ]);

  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

  const isPro = !!userSubscription?.isActive;
  const copy = uiCopy[uiLocale].leaderboard;

  return (
    <div className="main-content-grid flex flex-row-reverse gap-[48px]">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo uiLocale={uiLocale} />}
        <Quests points={userProgress.points} uiLocale={uiLocale} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="glass-panel-strong flex w-full flex-col items-center rounded-3xl p-6">
          <Image
            src="/memoji/replacements/leaderboard.png"
            alt="Leaderboard"
            height={90}
            width={90}
          />

          <h1 className="my-6 text-center text-2xl font-bold text-foreground">
            {copy.title}
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            {copy.description}
          </p>

          <Separator className="mb-4 h-0.5 rounded-full" />
          {leaderboard.map((userProgress, i) => (
            <div
              key={userProgress.userId}
              className="flex w-full items-center rounded-xl p-2 px-4 transition hover:bg-white/45 dark:hover:bg-white/10"
            >
              <p className="mr-4 font-bold text-lime-700">{i + 1}</p>

              <Avatar className="ml-3 mr-6 h-12 w-12 border bg-green-500">
                <AvatarImage
                  src={userProgress.userImageSrc}
                  className="object-cover"
                />
              </Avatar>

              <p className="flex-1 font-bold text-foreground">
                {userProgress.userName}
              </p>
              <p className="text-muted-foreground">{userProgress.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LeaderboardPage;
