import type { UiLocale } from "@/lib/ui-copy";

import { MobileSidebar } from "./mobile-sidebar";

type MobileHeaderProps = {
  uiLocale?: UiLocale;
};

export const MobileHeader = ({ uiLocale = "en" }: MobileHeaderProps) => {
  return (
    <nav className="glass-nav fixed top-0 z-50 flex h-[58px] w-full items-center border-b px-4 lg:hidden">
      <MobileSidebar uiLocale={uiLocale} />
    </nav>
  );
};
