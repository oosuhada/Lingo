"use client";

import {
  BookOpen,
  Braces,
  Check,
  Code2,
  Crown,
  Dumbbell,
  Lock,
  Star,
} from "lucide-react";
import Link from "next/link";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { Button } from "@/components/ui/button";
import {
  getCourseKind,
  getCourseMicrocopy,
  getCourseTheme,
} from "@/lib/course-style";
import type { UiLocale } from "@/lib/ui-copy";
import { cn } from "@/lib/utils";

import "react-circular-progressbar/dist/styles.css";

type LessonButtonProps = {
  id: number;
  index: number;
  totalCount: number;
  lessonTitle: string;
  courseTitle: string;
  uiLocale: UiLocale;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

type TileIconProps = {
  courseTitle: string;
  index: number;
  locked?: boolean;
  current?: boolean;
  completed: boolean;
  last: boolean;
  className?: string;
};

const TileIcon = ({
  courseTitle,
  index,
  locked,
  current,
  completed,
  last,
  className,
}: TileIconProps) => {
  if (locked) return <Lock className={className} />;
  if (completed) return <Check className={className} />;
  if (last) return <Crown className={className} />;

  const kind = getCourseKind({ title: courseTitle });

  if (kind === "programming") {
    if (index % 4 === 1) return <Braces className={className} />;
    if (index % 4 === 2) return <Dumbbell className={className} />;
    if (index % 4 === 3) return <BookOpen className={className} />;

    return <Code2 className={className} />;
  }

  if (kind === "hanja") {
    if (index % 3 === 1) return <Star className={className} />;
    if (index % 3 === 2) return <Dumbbell className={className} />;

    return <BookOpen className={className} />;
  }

  if (current || index % 3 === 0) return <Star className={className} />;
  if (index % 3 === 1) return <BookOpen className={className} />;

  return <Dumbbell className={className} />;
};

export const LessonButton = ({
  id,
  index,
  totalCount,
  lessonTitle,
  courseTitle,
  uiLocale,
  locked,
  current,
  percentage,
}: LessonButtonProps) => {
  const theme = getCourseTheme({ title: courseTitle });
  const copy = getCourseMicrocopy({ title: courseTitle }, uiLocale);
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  let indentationLevel;

  if (cycleIndex <= 2) indentationLevel = cycleIndex;
  else if (cycleIndex <= 4) indentationLevel = 4 - cycleIndex;
  else if (cycleIndex <= 6) indentationLevel = 4 - cycleIndex;
  else indentationLevel = cycleIndex - 8;

  const rightPosition = indentationLevel * 40;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const href = isCompleted ? `/lesson/${id}` : "/lesson";
  const label = locked
    ? copy.lockedLabel
    : isCompleted
      ? copy.completeLabel
      : current
        ? copy.currentLabel
        : lessonTitle;
  const buttonClassName = cn(
    "h-[72px] w-[72px] border-b-8 transition group-hover:-translate-y-0.5 group-active:translate-y-0 group-active:border-b-2",
    locked
      ? theme.lessonButtonLockedClass
      : isCompleted
        ? theme.lessonButtonCompleteClass
        : current
          ? theme.lessonButtonActiveClass
          : theme.lessonButtonClass
  );

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="group relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
        data-motion-item
        data-magnetic={locked ? undefined : "0.06"}
      >
        {!current && (
          <div
            className={cn(
              "glass-panel-strong pointer-events-none absolute left-1/2 top-[-22px] z-10 w-max -translate-x-1/2 scale-95 rounded-lg px-3 py-1.5 text-xs font-extrabold uppercase opacity-0 shadow-sm transition group-hover:scale-100 group-hover:opacity-100",
              locked ? "text-neutral-400" : theme.textClass
            )}
          >
            {label}
            <div className="glass-panel-strong absolute bottom-[-7px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l-0 border-t-0" />
          </div>
        )}

        {current ? (
          <div className="relative h-[102px] w-[102px]">
            <div
              className={cn(
                "glass-panel-strong absolute -top-7 left-1/2 z-10 w-max -translate-x-1/2 animate-bounce rounded-xl px-3 py-2.5 text-sm font-extrabold uppercase tracking-wide",
                theme.textClass
              )}
            >
              {label}
              <div
                className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent"
                aria-hidden
              />
            </div>
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: "#4ade80",
                },
                trail: {
                  stroke: "#e5e7eb",
                },
              }}
            >
              <Button
                size="rounded"
                variant={locked ? "locked" : "secondary"}
                className={buttonClassName}
              >
                <TileIcon
                  courseTitle={courseTitle}
                  index={index}
                  locked={locked}
                  current={current}
                  completed={isCompleted}
                  last={isLast}
                  className={cn(
                    "h-10 w-10",
                    locked
                      ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                      : "fill-primary-foreground text-primary-foreground",
                    isCompleted && "fill-none stroke-[4]"
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <Button
            size="rounded"
            variant={locked ? "locked" : "secondary"}
            className={buttonClassName}
          >
            <TileIcon
              courseTitle={courseTitle}
              index={index}
              locked={locked}
              current={current}
              completed={isCompleted}
              last={isLast}
              className={cn(
                "h-10 w-10",
                locked
                  ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                  : "fill-primary-foreground text-primary-foreground",
                isCompleted && "fill-none stroke-[4]"
              )}
            />
          </Button>
        )}
      </div>
    </Link>
  );
};
