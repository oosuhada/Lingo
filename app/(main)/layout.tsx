import type { PropsWithChildren } from "react";

import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import { getUiLocaleFromCookie } from "@/lib/ui-locale-server";

const MainLayout = async ({ children }: PropsWithChildren) => {
  const uiLocale = await getUiLocaleFromCookie();

  return (
    <>
      <MobileHeader uiLocale={uiLocale} />
      <Sidebar className="hidden lg:flex" uiLocale={uiLocale} />
      <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
        <div className="mx-auto h-full max-w-[1056px] pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
