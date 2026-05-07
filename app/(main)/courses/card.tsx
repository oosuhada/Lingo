import { Braces, Check, Languages, ScrollText } from "lucide-react";
import Image from "next/image";

import { getCourseMicrocopy, getCourseTheme } from "@/lib/course-style";
import { uiCopy, type UiLocale } from "@/lib/ui-copy";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  isActive?: boolean;
  uiLocale: UiLocale;
};

export const Card = ({
  title,
  id,
  imageSrc,
  onClick,
  disabled,
  isActive,
  uiLocale,
}: CardProps) => {
  const theme = getCourseTheme({ title });
  const normalizedTitle = title.toLowerCase();
  const displayImageSrc =
    normalizedTitle === "python"
      ? "/memoji/replacements/python-logo.png"
      : normalizedTitle === "java"
        ? "/memoji/replacements/java-svgrepo-com.svg"
        : imageSrc;
  const copy = getCourseMicrocopy({ title }, uiLocale);
  const courseCopy = uiCopy[uiLocale].courses;
  const kindLabel = uiCopy[uiLocale].courseKinds[theme.kind];
  const kindDescription = uiCopy[uiLocale].courseKindDescriptions[theme.kind];
  const KindIcon =
    theme.kind === "programming"
      ? Braces
      : theme.kind === "hanja"
        ? ScrollText
        : Languages;

  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "glass-card group flex h-full min-h-[252px] min-w-[200px] cursor-pointer flex-col justify-between rounded-2xl p-4 transition hover:-translate-y-0.5 hover:bg-white/70 active:translate-y-0 dark:hover:bg-white/10",
        theme.glowClass,
        isActive && "border-green-400 bg-green-500/10",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="flex min-h-[28px] w-full items-center justify-between">
        <div
          className={cn(
            "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-extrabold uppercase",
            theme.softClass,
            theme.textClass
          )}
        >
          <KindIcon className="h-3.5 w-3.5" />
          {kindLabel}
        </div>

        {isActive && (
          <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
            <Check className="h-4 w-4 stroke-[4] text-white" />
          </div>
        )}
      </div>

      <div
        className={cn(
          "mx-auto flex h-28 w-36 items-center justify-center overflow-hidden rounded-2xl transition group-hover:scale-[1.03]",
          theme.kind === "hanja" && "bg-neutral-950"
        )}
      >
        <Image
          src={displayImageSrc}
          alt={title}
          height={76}
          width={104}
          className={cn(
            "h-full w-full drop-shadow-md",
            theme.kind === "language" && "object-cover",
            theme.kind === "hanja" && "scale-110 border-0 drop-shadow-none",
            theme.kind === "programming" && "object-contain"
          )}
        />
      </div>

      <div className="space-y-2 text-center">
        <p className="text-xl font-extrabold text-foreground">{title}</p>
        <p className="mx-auto max-w-[15rem] text-xs font-semibold leading-5 text-muted-foreground">
          {kindDescription}
        </p>
      </div>

      <div
        className={cn(
          "glass-control rounded-xl px-3 py-2 text-center text-xs font-extrabold uppercase transition",
          theme.textClass
        )}
      >
        {isActive ? copy.action : courseCopy.startCourse}
      </div>
    </div>
  );
};
