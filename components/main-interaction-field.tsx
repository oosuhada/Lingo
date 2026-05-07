"use client";

import type { CSSProperties, PropsWithChildren } from "react";
import { useEffect, useRef } from "react";

type MainFieldStyle = CSSProperties & {
  "--main-pointer-x": string;
  "--main-pointer-y": string;
  "--glass-x": string;
  "--glass-y": string;
};

export const MainInteractionField = ({ children }: PropsWithChildren) => {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  const updatePointer = (x: number, y: number, target: HTMLElement) => {
    if (frame.current) window.cancelAnimationFrame(frame.current);

    frame.current = window.requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const relativeX = x - rect.left;
      const relativeY = y - rect.top;

      target.style.setProperty("--main-pointer-x", `${relativeX}px`);
      target.style.setProperty("--main-pointer-y", `${relativeY}px`);
      target.style.setProperty("--glass-x", `${(relativeX / rect.width) * 100}%`);
      target.style.setProperty("--glass-y", `${(relativeY / rect.height) * 100}%`);
    });
  };

  return (
    <div
      className="main-interaction-field min-h-screen w-full px-3 pt-6 sm:px-6"
      style={
        {
          "--main-pointer-x": "50%",
          "--main-pointer-y": "30%",
          "--glass-x": "50%",
          "--glass-y": "0%",
        } as MainFieldStyle
      }
      onPointerMove={(event) => {
        updatePointer(event.clientX, event.clientY, event.currentTarget);
      }}
    >
      <div className="mx-auto min-h-screen w-full max-w-[1056px]">
        {children}
      </div>
    </div>
  );
};
