import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";

type HeaderProps = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) => {
  const { open } = useExitModal();

  return (
    <header className="glass-nav mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-[1140px] items-center justify-between gap-x-7 rounded-2xl px-6 py-4 lg:mt-8 lg:px-10">
      <X
        onClick={open}
        className="cursor-pointer text-slate-500 transition hover:opacity-75"
      />

      <Progress value={percentage} />

      <div className="flex items-center font-bold text-rose-500">
        <Image
          src="/memoji/replacements/heart.png"
          height={28}
          width={28}
          alt="Heart"
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 shrink-0 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};
