"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  Show,
} from "@clerk/nextjs";
import { Check, Loader } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useUiLocale } from "@/hooks/use-ui-locale";
import { uiCopy, type UiLocale } from "@/lib/ui-copy";
import { cn } from "@/lib/utils";

const languageOptions: {
  locale: UiLocale;
  label: string;
  sublabel: string;
}[] = [
  { locale: "en", label: "English", sublabel: "Study with English UI" },
  { locale: "ko", label: "한국어", sublabel: "한글 안내로 학습" },
];

export const MarketingLanguagePanel = () => {
  const [locale, setLocale] = useUiLocale("en");
  const copy = uiCopy[locale];

  return (
    <div
      className="landing-panel motion-tilt-card flex w-full max-w-[500px] flex-col items-center gap-y-6 rounded-3xl p-0 sm:gap-y-8 sm:p-8"
      data-motion-item
      data-magnetic="0.035"
    >
      <div className="space-y-3 text-center">
        <h1 className="max-w-[480px] text-xl font-extrabold text-foreground lg:text-3xl">
          {copy.marketing.headline}
        </h1>
        <p className="mx-auto max-w-[420px] text-sm font-semibold leading-6 text-muted-foreground">
          {copy.marketing.subhead}
        </p>
      </div>

      <div className="grid w-full max-w-[420px] grid-cols-2 gap-3">
        {languageOptions.map((option) => {
          const active = option.locale === locale;

          return (
            <button
              key={option.locale}
              className={cn(
                "glass-card flex min-h-[88px] flex-col justify-between rounded-xl p-3 text-left transition hover:-translate-y-0.5 active:translate-y-0",
                active && "border-green-400 bg-green-500/10"
              )}
              onClick={() => setLocale(option.locale)}
              data-magnetic="0.08"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-base font-extrabold text-foreground">
                  {option.label}
                </span>
                {active && (
                  <span className="rounded-md bg-green-500 p-1 text-white">
                    <Check className="h-4 w-4 stroke-[4]" />
                  </span>
                )}
              </div>
              <span className="text-xs font-bold leading-5 text-muted-foreground">
                {option.sublabel}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>

        <ClerkLoaded>
          <Show when="signed-in">
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn" data-magnetic="0.08">
                {copy.marketing.continueLearning}
              </Link>
            </Button>
          </Show>

          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button
                size="lg"
                variant="secondary"
                className="w-full"
                data-magnetic="0.08"
              >
                {copy.marketing.getStarted}
              </Button>
            </SignUpButton>

            <SignInButton mode="modal">
              <Button
                size="lg"
                variant="primaryOutline"
                className="w-full"
                data-magnetic="0.08"
              >
                {copy.marketing.signIn}
              </Button>
            </SignInButton>
          </Show>
        </ClerkLoaded>
      </div>
    </div>
  );
};
