import { CheckCircle, XCircle } from "lucide-react";
import { useKey, useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import { uiCopy, type UiLocale } from "@/lib/ui-copy";
import { cn } from "@/lib/utils";

type FooterProps = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: number;
  uiLocale: UiLocale;
};

export const Footer = ({
  onCheck,
  status,
  disabled,
  lessonId,
  uiLocale,
}: FooterProps) => {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");
  const copy = uiCopy[uiLocale].lesson;

  return (
    <footer
      className={cn(
        "glass-nav h-[100px] border-t lg:h-[140px]",
        status === "correct" && "border-green-300/40 bg-green-500/10",
        status === "wrong" && "border-rose-300/40 bg-rose-500/10"
      )}
    >
      <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="flex items-center text-base font-bold text-green-500 lg:text-2xl">
            <CheckCircle className="mr-4 h-6 w-6 lg:h-10 lg:w-10" />
            {copy.nicelyDone}
          </div>
        )}

        {status === "wrong" && (
          <div className="flex items-center text-base font-bold text-rose-500 lg:text-2xl">
            <XCircle className="mr-4 h-6 w-6 lg:h-10 lg:w-10" />
            {copy.tryAgain}
          </div>
        )}

        {status === "completed" && (
          <Button
            variant="default"
            size={isMobile ? "sm" : "lg"}
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            {copy.practiceAgain}
          </Button>
        )}

        <Button
          disabled={disabled}
          aria-disabled={disabled}
          className="ml-auto"
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          variant={status === "wrong" ? "danger" : "secondary"}
        >
          {status === "none" && copy.check}
          {status === "correct" && copy.next}
          {status === "wrong" && copy.retry}
          {status === "completed" && copy.continue}
        </Button>
      </div>
    </footer>
  );
};
