"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  Show,
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
    <header className="glass-nav h-20 w-full border-b px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <Link href="/" className="flex shrink-0 items-center gap-1.5 pl-0 sm:gap-2 sm:pl-1">
          <Image
            src="/memoji/replacements/mascot.png"
            alt="Mascot"
            height={44}
            width={44}
            className="h-10 w-10 sm:h-11 sm:w-11"
          />

          <h1 className="text-xl font-extrabold tracking-wide text-green-600 sm:text-2xl">
            Lingo
          </h1>
        </Link>

        <div className="flex shrink-0 items-center gap-x-1.5 sm:gap-x-3">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>

          <ClerkLoaded>
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
              className="glass-control flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10"
              aria-label="Source code"
              title="Source code"
            >
              <Image
                src="/memoji/replacements/github.svg"
                alt="Source Code"
                height={22}
                width={22}
                className="h-5 w-5 dark:invert sm:h-[22px] sm:w-[22px]"
              />
            </Link>
          </ClerkLoaded>

          <ThemeToggle className="h-9 w-9 sm:h-10 sm:w-10" />
        </div>
      </div>
    </header>
  );
};
