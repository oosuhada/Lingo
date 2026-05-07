import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { uiCopy, type UiLocale } from "@/lib/ui-copy";

import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
  uiLocale?: UiLocale;
};

export const Sidebar = ({ className, uiLocale = "en" }: SidebarProps) => {
  const copy = uiCopy[uiLocale].nav;

  return (
    <div
      className={cn(
        "glass-nav left-0 top-0 flex h-full flex-col border-r px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image
            src="/memoji/replacements/mascot.png"
            alt="Mascot"
            height={40}
            width={40}
          />

          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem
          label={copy.learn}
          href="/learn"
          iconSrc="/memoji/replacements/learn.png"
        />
        <SidebarItem
          label={copy.leaderboard}
          href="/leaderboard"
          iconSrc="/memoji/replacements/leaderboard.png"
        />
        <SidebarItem
          label={copy.quests}
          href="/quests"
          iconSrc="/memoji/replacements/quests.png"
        />
        <SidebarItem
          label={copy.shop}
          href="/shop"
          iconSrc="/memoji/replacements/shop.png"
        />
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <ThemeToggle />
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton
            appearance={{
              elements: { userButtonPopoverCard: { pointerEvents: "initial" } },
            }}
          />
        </ClerkLoaded>
      </div>
    </div>
  );
};
