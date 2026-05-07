import Image from "next/image";

import { LandingGlassField } from "@/components/landing-glass-field";
import { MarketingLanguagePanel } from "@/components/marketing-language-panel";

export default function MarketingPage() {
  return (
    <LandingGlassField>
      <div className="relative mb-0 h-[240px] w-[240px] lg:h-[424px] lg:w-[424px]">
        <Image
          src="/memoji/replacements/hero.png"
          alt="Hero"
          fill
          priority
          sizes="(min-width: 1024px) 424px, 240px"
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <MarketingLanguagePanel />
    </LandingGlassField>
  );
}
