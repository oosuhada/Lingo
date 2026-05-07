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
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>

      <SheetContent className="z-[100] p-0" side="left">
        <Sidebar uiLocale={uiLocale} />
      </SheetContent>
    </Sheet>
  );
};
