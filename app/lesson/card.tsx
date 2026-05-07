import { useCallback } from "react";

import Image from "next/image";
import { useAudio, useKey } from "react-use";

import { challenges } from "@/db/schema";
import { getCourseKind, getCourseTheme } from "@/lib/course-style";
import { cn } from "@/lib/utils";

type CardProps = {
  id: number;
  text: string;
  imageSrc: string | null;
  audioSrc: string | null;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  status?: "correct" | "wrong" | "none";
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
  courseTitle: string;
};

export const Card = ({
  text,
  imageSrc,
  audioSrc,
  shortcut,
  selected,
  onClick,
  status,
  disabled,
  type,
  courseTitle,
}: CardProps) => {
  const courseKind = getCourseKind({ title: courseTitle });
  const theme = getCourseTheme({ title: courseTitle });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [audio, _, controls] = useAudio({ src: audioSrc || "" });

  const handleClick = useCallback(() => {
    if (disabled) return;

    void controls.play();
    onClick();
  }, [disabled, onClick, controls]);

  useKey(shortcut, handleClick, {}, [handleClick]);

  return (
    <div
      onClick={handleClick}
      className={cn(
        "glass-card h-full cursor-pointer rounded-2xl p-4 transition hover:-translate-y-0.5 hover:bg-white/70 active:translate-y-0 lg:p-6 dark:hover:bg-white/10",
        courseKind === "programming" &&
          "border-slate-300/60 bg-slate-50/40 font-mono shadow-sm dark:border-slate-600/40 dark:bg-slate-950/30",
        selected && "border-sky-300 bg-sky-100/60 hover:bg-sky-100/70",
        selected &&
          courseKind === "programming" &&
          "border-emerald-400 bg-emerald-50/60 hover:bg-emerald-50/70 dark:bg-emerald-500/10",
        selected &&
          status === "correct" &&
          "border-green-300 bg-green-100/70 hover:bg-green-100/80 dark:bg-green-500/10",
        selected &&
          status === "wrong" &&
          "border-rose-300 bg-rose-100/70 hover:bg-rose-100/80 dark:bg-rose-500/10",
        disabled && "pointer-events-none hover:bg-transparent",
        type === "ASSIST" && "w-full lg:p-3"
      )}
    >
      {audio}
      {imageSrc && (
        <div className="relative mb-4 aspect-square max-h-[80px] w-full lg:max-h-[150px]">
          <Image src={imageSrc} fill alt={text} />
        </div>
      )}

      <div
        className={cn(
          "flex items-center justify-between",
          type === "ASSIST" && "flex-row-reverse"
        )}
      >
        {type === "ASSIST" && <div aria-hidden />}
        <p
          className={cn(
            "break-words text-left text-sm text-foreground lg:text-base",
            !imageSrc && "whitespace-pre-wrap font-mono",
            selected && "text-sky-500",
            selected && courseKind === "programming" && theme.textClass,
            selected && status === "correct" && "text-green-500",
            selected && status === "wrong" && "text-rose-500"
          )}
        >
          {text}
        </p>

        <div
          className={cn(
            "flex h-[20px] w-[20px] items-center justify-center rounded-lg border-2 text-xs font-semibold text-neutral-400 lg:h-[30px] lg:w-[30px] lg:text-[15px]",
            selected && "border-sky-300 text-sky-500",
            selected &&
              courseKind === "programming" &&
              "border-emerald-400 text-emerald-600",
            selected &&
              status === "correct" &&
              "border-green-500 text-green-500",
            selected && status === "wrong" && "border-rose-500 text-rose-500"
          )}
        >
          {shortcut}
        </div>
      </div>
    </div>
  );
};
