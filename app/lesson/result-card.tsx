import { InfinityIcon } from "lucide-react";
import Image from "next/image";

import { uiCopy, type UiLocale } from "@/lib/ui-copy";
import { cn } from "@/lib/utils";

type ResultCardProps = {
  value: number;
  variant: "points" | "hearts";
  uiLocale: UiLocale;
};

export const ResultCard = ({ value, variant, uiLocale }: ResultCardProps) => {
  const imageSrc =
    variant === "points"
      ? "/memoji/replacements/points.png"
      : "/memoji/replacements/heart.png";
  const copy = uiCopy[uiLocale].lesson;

  return (
    <div
      className={cn(
        "glass-card w-full rounded-2xl",
        variant === "points" && "border-orange-400/70",
        variant === "hearts" && "border-rose-500/70"
      )}
    >
      <div
        className={cn(
          "rounded-t-xl p-1.5 text-center text-xs font-bold uppercase text-white",
          variant === "points" && "bg-orange-400/90",
          variant === "hearts" && "bg-rose-500/90"
        )}
      >
        {variant === "hearts" ? copy.heartsLeft : copy.totalXp}
      </div>

      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-white/65 p-6 text-lg font-bold dark:bg-white/10",
          variant === "points" && "text-orange-400",
          variant === "hearts" && "text-rose-500"
        )}
      >
        <Image
          src={imageSrc}
          alt={variant}
          height={30}
          width={30}
          className="mr-1.5"
        />
        {value === Infinity ? (
          <InfinityIcon className="h-6 w-6 stroke-[3]" />
        ) : (
          value
        )}
      </div>
    </div>
  );
};
