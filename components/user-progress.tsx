import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { courses } from "@/db/schema";

type UserProgressProps = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: UserProgressProps) => {
  return (
    <div
      className="flex w-full items-center justify-between gap-x-2"
      data-motion="stagger"
    >
      <Link href="/courses">
        <Button variant="ghost" data-motion-item data-magnetic="0.08">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>

      <Link href="/shop">
        <Button
          variant="ghost"
          className="text-orange-500"
          data-motion-item
          data-magnetic="0.08"
        >
          <Image
            src="/memoji/replacements/points.png"
            height={28}
            width={28}
            alt="Points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>

      <Link href="/shop">
        <Button
          variant="ghost"
          className="text-rose-500"
          data-motion-item
          data-magnetic="0.08"
        >
          <Image
            src="/memoji/replacements/heart.png"
            height={22}
            width={22}
            alt="Hearts"
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="stroke-3 h-4 w-4" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
