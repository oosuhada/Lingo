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
        <Link href="/" className="flex items-center gap-2 pl-1">
          <Image
            src="/memoji/replacements/mascot.png"
            alt="Mascot"
            height={34}
            width={34}
          />

          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </Link>

        <div className="flex items-center gap-x-3">
          <ThemeToggle />

          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <Show when="signed-in">
              <UserButton />
            </Show>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button size="lg" variant="ghost">
                  {uiCopy[uiLocale].common.login}
                </Button>
              </SignInButton>
            </Show>

            <Link
              href={links.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-control flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="Source code"
              title="Source code"
            >
              <Image
                src="/memoji/replacements/github.svg"
                alt="Source Code"
                height={22}
                width={22}
                className="dark:invert"
              />
            </Link>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};
