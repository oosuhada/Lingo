import { Braces, Check, Languages, ScrollText } from "lucide-react";
import Image from "next/image";

import { getCourseMicrocopy, getCourseTheme } from "@/lib/course-style";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  isActive?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  onClick,
  disabled,
  isActive,
}: CardProps) => {
  const theme = getCourseTheme({ title });
  const copy = getCourseMicrocopy({ title });
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
        "group flex h-full min-h-[252px] min-w-[200px] cursor-pointer flex-col justify-between rounded-xl border-2 border-b-[5px] bg-white p-4 transition hover:-translate-y-0.5 hover:bg-black/[0.02] active:translate-y-0 active:border-b-2",
        theme.glowClass,
        isActive && "border-green-400 bg-green-50/60",
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
          {theme.label}
        </div>

        {isActive && (
          <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
            <Check className="h-4 w-4 stroke-[4] text-white" />
          </div>
        )}
      </div>

      <div
        className={cn(
          "mx-auto flex h-28 w-36 items-center justify-center rounded-2xl border-2 bg-white transition group-hover:scale-[1.03]",
          theme.kind === "programming" && "bg-slate-50",
          theme.kind === "hanja" && "bg-neutral-950"
        )}
      >
        <Image
          src={imageSrc}
          alt={title}
          height={76}
          width={104}
          className={cn(
            "h-20 w-28 object-contain drop-shadow-md",
            theme.kind === "language" && "rounded-xl",
            theme.kind === "hanja" && "scale-110 border-0 drop-shadow-none",
            theme.kind === "programming" && "h-20 w-28"
          )}
        />
      </div>

      <div className="space-y-2 text-center">
        <p className="text-xl font-extrabold text-neutral-700">{title}</p>
        <p className="mx-auto max-w-[15rem] text-xs font-semibold leading-5 text-neutral-500">
          {theme.description}
        </p>
      </div>

      <div
        className={cn(
          "rounded-xl border-2 border-b-4 bg-white px-3 py-2 text-center text-xs font-extrabold uppercase transition group-hover:bg-neutral-50",
          theme.textClass
        )}
      >
        {isActive ? copy.action : "Start course"}
      </div>
    </div>
  );
};
