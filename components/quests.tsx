import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QUESTS } from "@/constants";
import { uiCopy, type UiLocale } from "@/lib/ui-copy";

type QuestsProps = {
  points: number;
  uiLocale: UiLocale;
};

export const Quests = ({ points, uiLocale }: QuestsProps) => {
  const copy = uiCopy[uiLocale].questsPanel;

  return (
    <div className="glass-card space-y-4 rounded-2xl p-4">
      <div className="flex w-full items-center justify-between space-y-2">
        <h3 className="text-lg font-bold">{copy.title}</h3>

        <Link href="/quests">
          <Button size="sm" variant="primaryOutline">
            {copy.viewAll}
          </Button>
        </Link>
      </div>

      <ul className="w-full space-y-4">
        {QUESTS.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div
              className="flex w-full items-center gap-x-3 pb-4"
              key={quest.title}
            >
              <Image
                src="/memoji/replacements/points.png"
                alt="Points"
                width={40}
                height={40}
              />

              <div className="flex w-full flex-col gap-y-2">
                <p className="text-sm font-bold text-foreground">
                  {copy.earnXp(quest.value)}
                </p>

                <Progress value={progress} className="h-2" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
