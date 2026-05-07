import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { uiCopy, type UiLocale } from "@/lib/ui-copy";

type PromoProps = {
  uiLocale: UiLocale;
};

export const Promo = ({ uiLocale }: PromoProps) => {
  const copy = uiCopy[uiLocale].promo;

  return (
    <div
      className="glass-card motion-tilt-card space-y-4 rounded-2xl p-4"
      data-motion="reveal"
      data-magnetic="0.035"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image
            src="/memoji/replacements/unlimited.png"
            alt="Pro"
            height={26}
            width={26}
          />

          <h3 className="text-lg font-bold">{copy.title}</h3>
        </div>

        <p className="text-muted-foreground">{copy.description}</p>
      </div>

      <Button variant="super" className="w-full" size="lg" asChild>
        <Link href="/shop" data-magnetic="0.08">
          {copy.action}
        </Link>
      </Button>
    </div>
  );
};
