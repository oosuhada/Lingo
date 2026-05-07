"use client";

import { useEffect, useRef } from "react";

type GsapAnimation = {
  kill: () => void;
  timeScale: (value: number) => void;
};

export const LandingBlobField = () => {
  const stageRef = useRef<SVGGElement | null>(null);
  const cyanRef = useRef<SVGGElement | null>(null);
  const pinkRef = useRef<SVGGElement | null>(null);
  const greenRef = useRef<SVGGElement | null>(null);
  const tweensRef = useRef<GsapAnimation[]>([]);
  const settleRef = useRef<{ kill: () => void } | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let cleanup = () => {};
    let isMounted = true;

    const setup = async () => {
      const { gsap } = await import("gsap");
      const stage = stageRef.current;
      const cyan = cyanRef.current;
      const pink = pinkRef.current;
      const green = greenRef.current;

      if (!isMounted || !stage || !cyan || !pink || !green) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set(stage, { transformOrigin: "500px 360px", x: 0, y: 0 });
      gsap.set([cyan, pink, green], {
        transformBox: "fill-box",
        transformOrigin: "50% 50%",
      });

      if (!prefersReducedMotion) {
        tweensRef.current = [
          gsap.to(stage, {
            rotation: 360,
            duration: 46,
            ease: "none",
            repeat: -1,
          }),
          gsap.to(cyan, {
            rotation: -360,
            duration: 34,
            ease: "none",
            repeat: -1,
          }),
          gsap.to(pink, {
            rotation: 360,
            duration: 39,
            ease: "none",
            repeat: -1,
          }),
          gsap.to(green, {
            rotation: -360,
            duration: 42,
            ease: "none",
            repeat: -1,
          }),
        ];
      }

      const applyInput = () => {
        frameRef.current = null;

        const { x, y } = pointerRef.current;
        const offsetX = (x / window.innerWidth - 0.5) * 96;
        const offsetY = (y / window.innerHeight - 0.5) * 72;

        gsap.to(stage, {
          x: offsetX,
          y: offsetY,
          duration: 1.25,
          ease: "power3.out",
        });

        tweensRef.current.forEach((tween) => tween.timeScale(2.8));
        settleRef.current?.kill();
        settleRef.current = gsap.delayedCall(0.34, () => {
          gsap.to(tweensRef.current, {
            timeScale: 1,
            duration: 1.9,
            ease: "power3.out",
          });
        });
      };

      const handlePointer = (x: number, y: number) => {
        pointerRef.current = { x, y };

        if (frameRef.current) return;
        frameRef.current = window.requestAnimationFrame(applyInput);
      };

      const handlePointerMove = (event: PointerEvent) => {
        handlePointer(event.clientX, event.clientY);
      };

      const handleTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0];
        if (!touch) return;

        handlePointer(touch.clientX, touch.clientY);
      };

      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });

      cleanup = () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("touchmove", handleTouchMove);
        if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
        settleRef.current?.kill();
        tweensRef.current.forEach((tween) => tween.kill());
        tweensRef.current = [];
      };
    };

    setup();

    return () => {
      isMounted = false;
      cleanup();
    };
  }, []);

  return (
    <div className="landing-blob-layer" aria-hidden="true">
      <svg
        className="landing-blob-svg"
        viewBox="0 0 1000 720"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter
            id="lingo-blob-blur"
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="48" />
          </filter>
        </defs>

        <g ref={stageRef} filter="url(#lingo-blob-blur)">
          <g ref={cyanRef}>
            <path
              d="M95 363C128 239 288 172 438 236C568 292 623 397 548 489C470 585 294 612 164 540C79 493 65 445 95 363Z"
              fill="#8DEBFF"
              opacity="0.72"
            />
          </g>

          <g ref={pinkRef}>
            <path
              d="M560 37C691 16 804 126 800 283C797 422 721 566 598 575C477 584 421 459 448 317C472 191 462 53 560 37Z"
              fill="#F06EF1"
              opacity="0.72"
            />
          </g>

          <g ref={greenRef}>
            <path
              d="M332 241C421 183 537 209 594 293C657 386 628 506 517 558C413 608 256 577 225 466C199 375 251 294 332 241Z"
              fill="#22C55E"
              opacity="0.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
