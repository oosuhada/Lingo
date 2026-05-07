"use client";

import type { CSSProperties, PropsWithChildren } from "react";
import { useCallback, useEffect, useRef } from "react";

type MainFieldStyle = CSSProperties & {
  "--main-pointer-x": string;
  "--main-pointer-y": string;
  "--glass-x": string;
  "--glass-y": string;
};

export const MainInteractionField = ({ children }: PropsWithChildren) => {
  const frame = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement | null>(null);

  const updatePointer = useCallback((x: number, y: number) => {
    const target = elementRef.current;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    targetRef.current = {
      x: x - rect.left,
      y: y - rect.top,
    };
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const initialPointer = {
        x: element.clientWidth * 0.72,
        y: element.clientHeight * 0.26,
      };

      currentRef.current = initialPointer;
      targetRef.current = initialPointer;
    }

    const animate = () => {
      const animatedElement = elementRef.current;
      if (!animatedElement) return;

      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      animatedElement.style.setProperty("--main-pointer-x", `${current.x}px`);
      animatedElement.style.setProperty("--main-pointer-y", `${current.y}px`);
      animatedElement.style.setProperty(
        "--glass-x",
        `${(current.x / animatedElement.clientWidth) * 100}%`
      );
      animatedElement.style.setProperty(
        "--glass-y",
        `${(current.y / animatedElement.clientHeight) * 100}%`
      );

      frame.current = window.requestAnimationFrame(animate);
    };

    frame.current = window.requestAnimationFrame(animate);

    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updatePointer(touch.clientX, touch.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [updatePointer]);

  return (
    <div
      ref={elementRef}
      className="main-interaction-field min-h-screen w-full px-3 sm:px-6"
      style={
        {
          "--main-pointer-x": "50%",
          "--main-pointer-y": "30%",
          "--glass-x": "50%",
          "--glass-y": "0%",
        } as MainFieldStyle
      }
      onPointerMove={(event) => {
        updatePointer(event.clientX, event.clientY);
      }}
      onTouchMove={(event) => {
        const touch = event.touches[0];
        if (touch) updatePointer(touch.clientX, touch.clientY);
      }}
    >
      <div className="mx-auto min-h-screen w-full max-w-[1480px]">
        {children}
      </div>
    </div>
  );
};
