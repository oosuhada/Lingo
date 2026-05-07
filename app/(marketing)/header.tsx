"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  Show,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { links } from "@/config";
import { useUiLocale } from "@/hooks/use-ui-locale";
import { uiCopy } from "@/lib/ui-copy";

export const Header = () => {
  const [uiLocale] = useUiLocale("en");

  return (
    <header className="glass-nav relative z-[100] h-20 w-full border-b px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1 pl-0 sm:gap-1.5 sm:pl-1"
          data-magnetic="0.05"
        >
          <Image
            src="/memoji/replacements/mascot.png"
            alt="Mascot"
            height={54}
            width={54}
            className="h-12 w-12 sm:h-[54px] sm:w-[54px]"
          />

          <h1 className="text-xl font-extrabold tracking-wide text-green-600 sm:text-2xl">
            Lingo
          </h1>
        </Link>

        <div className="flex shrink-0 items-center gap-x-1.5 sm:gap-x-2.5">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <Show when="signed-in">
              <UserButton />
            </Show>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-9 px-2 text-xs sm:h-10 sm:px-4 sm:text-sm"
                >
                  {uiCopy[uiLocale].common.login}
                </Button>
              </SignInButton>
            </Show>

            <Link
              href={links.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-control flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12"
              aria-label="Source code"
              title="Source code"
              data-magnetic="0.14"
            >
              <Image
                src="/memoji/replacements/github.svg"
                alt="Source Code"
                height={22}
                width={22}
                className="h-5 w-5 dark:invert sm:h-6 sm:w-6"
              />
            </Link>
          </ClerkLoaded>

          <ThemeToggle className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>
      </div>
    </header>
  );
};
