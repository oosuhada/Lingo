import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { uiCopy } from "@/lib/ui-copy";
import { getUiLocaleFromCookie } from "@/lib/ui-locale-server";

import { Items } from "./items";

const ShopPage = async () => {
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
  const copy = uiCopy[uiLocale].shop;

  return (
    <div className="main-content-grid flex flex-row-reverse gap-8 pt-6 xl:gap-10">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />

        <Quests points={userProgress.points} uiLocale={uiLocale} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="glass-panel-strong flex w-full flex-col items-center rounded-3xl p-6">
          <Image
            src="/memoji/replacements/shop.png"
            alt="Shop"
            height={90}
            width={90}
          />

          <h1 className="my-6 text-center text-2xl font-bold text-foreground">
            {copy.title}
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            {copy.description}
          </p>

          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
            uiLocale={uiLocale}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;
