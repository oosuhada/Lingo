import type { UiLocale } from "@/lib/ui-copy";

import { MobileSidebar } from "./mobile-sidebar";

type MobileHeaderProps = {
  uiLocale?: UiLocale;
};

export const MobileHeader = ({ uiLocale = "en" }: MobileHeaderProps) => {
  return (
    <nav className="fixed top-0 z-50 flex h-[50px] w-full items-center border-b bg-green-500 px-4 lg:hidden">
      <MobileSidebar uiLocale={uiLocale} />
    </nav>
  );
};
