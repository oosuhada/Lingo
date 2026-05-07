import type { PropsWithChildren } from "react";

import { MainInteractionField } from "@/components/main-interaction-field";
import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import { getUiLocaleFromCookie } from "@/lib/ui-locale-server";

const MainLayout = async ({ children }: PropsWithChildren) => {
  const uiLocale = await getUiLocaleFromCookie();

  return (
    <>
      <MobileHeader uiLocale={uiLocale} />
      <Sidebar className="hidden lg:flex" uiLocale={uiLocale} />
      <main className="min-h-screen pt-[58px] lg:pl-[256px] lg:pt-0">
        <MainInteractionField>
          {children}
        </MainInteractionField>
      </main>
    </>
  );
};

export default MainLayout;
