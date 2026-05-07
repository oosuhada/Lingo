"use client";

import type { CSSProperties, PropsWithChildren } from "react";
import { useEffect, useRef } from "react";

import { LandingBlobField } from "@/components/landing-blob-field";

type LandingStyle = CSSProperties & {
  "--pointer-x": string;
  "--pointer-y": string;
  "--glass-x": string;
  "--glass-y": string;
};

export const LandingGlassField = ({ children }: PropsWithChildren) => {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  const updatePointer = (x: number, y: number, currentTarget: HTMLElement) => {
    if (frame.current) window.cancelAnimationFrame(frame.current);

    frame.current = window.requestAnimationFrame(() => {
      currentTarget.style.setProperty("--pointer-x", `${x}px`);
      currentTarget.style.setProperty("--pointer-y", `${y}px`);
      currentTarget.style.setProperty(
        "--glass-x",
        `${(x / currentTarget.clientWidth) * 100}%`
      );
      currentTarget.style.setProperty(
        "--glass-y",
        `${(y / currentTarget.clientHeight) * 100}%`
      );
    });
  };

  return (
    <div
      className="landing-light-field flex w-full flex-1 px-4 pb-6 pt-16 sm:py-8 lg:py-4"
      style={
        {
          "--pointer-x": "50%",
          "--pointer-y": "42%",
          "--glass-x": "50%",
          "--glass-y": "0%",
        } as LandingStyle
      }
      onPointerMove={(event) => {
        updatePointer(event.clientX, event.clientY, event.currentTarget);
      }}
    >
      <LandingBlobField />

      <div className="mx-auto flex w-full max-w-[988px] flex-col items-center justify-center gap-4 sm:gap-8 lg:flex-row">
        {children}
      </div>
    </div>
  );
};
