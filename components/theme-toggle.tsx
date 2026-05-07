"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";

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

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  const controls = useMemo(
    () =>
      modes.map((themeMode) => {
        const Icon = themeMode.icon;
        const isActive = mode === themeMode.value;

        return (
          <button
            key={themeMode.value}
            type="button"
            aria-label={themeMode.label}
            title={themeMode.label}
            onClick={() => {
              window.localStorage.setItem(THEME_KEY, themeMode.value);
              window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
            }}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-white/55 hover:text-foreground dark:hover:bg-white/10",
              isActive &&
                "bg-green-500 text-white shadow-sm hover:bg-green-500 hover:text-white"
            )}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      }),
    [mode]
  );

  return (
    <div
      className={cn(
        "glass-control flex items-center gap-1 rounded-xl p-1",
        className
      )}
      aria-label="Theme"
    >
      {controls}
    </div>
  );
};
