"use client";

import { useEffect, useSyncExternalStore } from "react";

import { Monitor, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

const THEME_KEY = "lingo-theme";
const THEME_CHANGE_EVENT = "lingo-theme-change";
const modes = [
  { value: "light", label: "Light theme", icon: Sun },
  { value: "dark", label: "Dark theme", icon: Moon },
  { value: "system", label: "System theme", icon: Monitor },
] as const;

type ThemeMode = (typeof modes)[number]["value"];

const getStoredTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "system";

  const stored = window.localStorage.getItem(THEME_KEY);

  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "system";
};

const applyTheme = (mode: ThemeMode) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = mode === "dark" || (mode === "system" && prefersDark);
  const root = document.documentElement;

  root.classList.toggle("dark", shouldUseDark);
  root.classList.toggle("light", mode === "light");
  root.dataset.theme = mode;
};

const subscribe = (onStoreChange: () => void) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = () => onStoreChange();

  window.addEventListener(THEME_CHANGE_EVENT, handleChange);
  mediaQuery.addEventListener("change", handleChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleChange);
    mediaQuery.removeEventListener("change", handleChange);
  };
};

export const ThemeToggle = ({ className }: { className?: string }) => {
  const mode = useSyncExternalStore<ThemeMode>(
    subscribe,
    getStoredTheme,
    () => "system"
  );
  const activeIndex = modes.findIndex((themeMode) => themeMode.value === mode);
  const activeMode = modes[activeIndex] ?? modes[2];
  const nextMode = modes[(activeIndex + 1) % modes.length] ?? modes[0];
  const ActiveIcon = activeMode.icon;

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  return (
    <button
      type="button"
      aria-label={`Theme: ${activeMode.label}. Switch to ${nextMode.label}.`}
      title={`Theme: ${activeMode.label}. Click for ${nextMode.label}.`}
      onClick={() => {
        window.localStorage.setItem(THEME_KEY, nextMode.value);
        window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
      }}
      data-magnetic="0.14"
      className={cn(
        "glass-control flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:scale-105 active:scale-95",
        className
      )}
    >
      <ActiveIcon className="h-4 w-4" />
    </button>
  );
};
