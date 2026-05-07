import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="glass-nav sticky top-[58px] z-40 mb-5 flex items-center justify-between rounded-b-2xl border-b px-2 py-3 text-muted-foreground lg:top-0 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
      <Link href="/courses">
        <Button size="sm" variant="ghost">
          <ArrowLeft className="h-5 w-5 stroke-2" />
        </Button>
      </Link>

      <h1 className="text-lg font-bold text-foreground">{title}</h1>
      <div aria-hidden />
    </div>
  );
};
