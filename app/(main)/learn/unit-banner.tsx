import { BookOpen, Braces, NotebookText, ScrollText } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getCourseMicrocopy, getCourseTheme } from "@/lib/course-style";
import { uiCopy, type UiLocale } from "@/lib/ui-copy";
import { cn } from "@/lib/utils";

type UnitBannerProps = {
  title: string;
  order: number;
  description: string;
  courseTitle: string;
  uiLocale: UiLocale;
};

export const UnitBanner = ({
  title,
  order,
  description,
  courseTitle,
  uiLocale,
}: UnitBannerProps) => {
  const theme = getCourseTheme({ title: courseTitle });
  const copy = getCourseMicrocopy({ title: courseTitle }, uiLocale);
  const kindLabel = uiCopy[uiLocale].courseKinds[theme.kind];
  const Icon =
    theme.kind === "programming"
      ? Braces
      : theme.kind === "hanja"
        ? ScrollText
        : BookOpen;

  return (
    <div
      className={cn(
        "glass-panel-strong motion-tilt-card relative overflow-hidden rounded-3xl border-b-[6px] p-5 text-white",
        theme.bannerClass,
        theme.bannerBorderClass,
        theme.glowClass
      )}
      data-motion="reveal"
      data-magnetic="0.025"
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold uppercase">
              {kindLabel}
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold uppercase">
              {uiCopy[uiLocale].common.unit} {order}
            </span>
          </div>
          <h3 className="text-2xl font-extrabold tracking-normal">{title}</h3>
          <p className="max-w-[36rem] text-base font-semibold leading-6 text-white/90 lg:text-lg">
            {description}
          </p>
        </div>

        <div
          className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 xl:flex"
          data-float="8"
        >
          <Icon className="h-10 w-10" />
        </div>
      </div>

      <Link href="/lesson">
        <Button
          size="lg"
          variant="secondary"
          className="mt-5 hidden border-2 border-b-4 border-white/30 bg-white/20 text-white hover:bg-white/25 active:border-b-2 xl:flex"
          data-magnetic="0.08"
        >
          <NotebookText className="mr-2" />
          {copy.unitCta}
        </Button>
      </Link>
    </div>
  );
};
