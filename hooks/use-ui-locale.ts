"use client";

import { useSyncExternalStore } from "react";

import {
  normalizeUiLocale,
  UI_LOCALE_COOKIE,
  type UiLocale,
} from "@/lib/ui-copy";

const uiLocaleChangeEvent = "lingo-ui-locale-change";

const readUiLocaleCookie = () => {
  if (typeof document === "undefined") return "en";

  const cookieLocale = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${UI_LOCALE_COOKIE}=`))
    ?.split("=")[1];

  return normalizeUiLocale(cookieLocale);
};

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener(uiLocaleChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener(uiLocaleChangeEvent, onStoreChange);
  };
};

export const setUiLocaleCookie = (locale: UiLocale) => {
  document.cookie = `${UI_LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  window.dispatchEvent(new Event(uiLocaleChangeEvent));
};

export const useUiLocale = (initialLocale: UiLocale = "en") => {
  const uiLocale = useSyncExternalStore(
    subscribe,
    readUiLocaleCookie,
    () => initialLocale
  );

  const updateUiLocale = (nextLocale: UiLocale) => {
    setUiLocaleCookie(nextLocale);
  };

  return [uiLocale, updateUiLocale] as const;
};
