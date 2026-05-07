import { cookies } from "next/headers";

import {
  normalizeUiLocale,
  UI_LOCALE_COOKIE,
  type UiLocale,
} from "@/lib/ui-copy";

export const getUiLocaleFromCookie = async (
  fallback: UiLocale = "en"
): Promise<UiLocale> => {
  const cookieStore = await cookies();

  return normalizeUiLocale(cookieStore.get(UI_LOCALE_COOKIE)?.value ?? fallback);
};
