import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { UiLocale } from "@/lib/ui-copy";

import { Sidebar } from "./sidebar";

type MobileSidebarProps = {
  uiLocale?: UiLocale;
};

export const MobileSidebar = ({ uiLocale = "en" }: MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="glass-control rounded-xl p-2 text-foreground">
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent className="z-[100] p-0" side="left">
        <Sidebar uiLocale={uiLocale} />
      </SheetContent>
    </Sheet>
  );
};
