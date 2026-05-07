import Image from "next/image";

import { MarketingLanguagePanel } from "@/components/marketing-language-panel";

export default function MarketingPage() {
  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image src="/memoji/replacements/hero.png" alt="Hero" fill />
      </div>

      <MarketingLanguagePanel />
    </div>
  );
}
