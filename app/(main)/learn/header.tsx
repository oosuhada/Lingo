"use client";

import { useEffect, useRef, useState } from "react";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const idleTimer = useRef<number | null>(null);

  useEffect(() => {
    const hideAfterIdle = () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current);

      idleTimer.current = window.setTimeout(() => {
        if (window.scrollY > 24) setIsVisible(false);
      }, 2600);
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 24 || delta < -6) {
        setIsVisible(true);
        hideAfterIdle();
      } else if (delta > 6) {
        setIsVisible(false);
      }

      lastScrollY.current = currentY;
    };

    hideAfterIdle();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <div
      className={[
        "glass-nav sticky top-[58px] z-40 mb-5 flex items-center justify-between rounded-b-2xl border-b px-2 py-3 text-muted-foreground transition-all duration-500 ease-out lg:top-0 lg:z-50 lg:mt-[-28px] lg:pt-[28px]",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-[calc(100%+16px)] opacity-0",
      ].join(" ")}
    >
      <Link href="/courses">
        <Button size="sm" variant="ghost">
          <ArrowLeft className="h-5 w-5 stroke-2" />
        </Button>
      </Link>

      <h1 className="text-lg font-bold text-foreground">{title}</h1>
      <div aria-hidden />
    </div>
  );
};
