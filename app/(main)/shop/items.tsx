"use client";

import { useTransition } from "react";

import Image from "next/image";
import { toast } from "sonner";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { MAX_HEARTS, POINTS_TO_REFILL } from "@/constants";
import { uiCopy, type UiLocale } from "@/lib/ui-copy";

type ItemsProps = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
  uiLocale: UiLocale;
};

export const Items = ({
  hearts,
  points,
  hasActiveSubscription,
  uiLocale,
}: ItemsProps) => {
  const [pending, startTransition] = useTransition();
  const copy = uiCopy[uiLocale].shop;

  const onRefillHearts = () => {
    if (pending || hearts === MAX_HEARTS || points < POINTS_TO_REFILL) return;

    startTransition(() => {
      refillHearts().catch(() => toast.error(uiCopy[uiLocale].courses.error));
    });
  };

  const onUpgrade = () => {
    toast.loading(copy.redirecting);
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) window.location.href = response.data;
        })
        .catch(() => toast.error(uiCopy[uiLocale].courses.error));
    });
  };

  return (
    <ul className="w-full">
      <div className="flex w-full items-center gap-x-4 border-t p-4">
        <Image
          src="/memoji/replacements/heart.png"
          alt="Heart"
          height={60}
          width={60}
        />

        <div className="flex-1">
          <p className="text-base font-bold text-foreground lg:text-xl">
            {copy.refillHearts}
          </p>
        </div>

        <Button
          onClick={onRefillHearts}
          disabled={
            pending || hearts === MAX_HEARTS || points < POINTS_TO_REFILL
          }
          aria-disabled={
            pending || hearts === MAX_HEARTS || points < POINTS_TO_REFILL
          }
        >
          {hearts === MAX_HEARTS ? (
            copy.full
          ) : (
            <div className="flex items-center">
              <Image
                src="/memoji/replacements/points.png"
                alt="Points"
                height={20}
                width={20}
              />

              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>

      <div className="flex w-full items-center gap-x-4 border-t p-4 pt-8">
        <Image
          src="/memoji/replacements/unlimited.png"
          alt="Unlimited"
          height={60}
          width={60}
        />

        <div className="flex-1">
          <p className="text-base font-bold text-foreground lg:text-xl">
            {copy.unlimitedHearts}
          </p>
        </div>

        <Button onClick={onUpgrade} disabled={pending} aria-disabled={pending}>
          {hasActiveSubscription ? copy.settings : copy.upgrade}
        </Button>
      </div>
    </ul>
  );
};
