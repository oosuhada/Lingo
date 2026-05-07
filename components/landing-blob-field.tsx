"use client";

import { useEffect, useRef } from "react";

type GsapAnimation = {
  kill: () => void;
  timeScale: (value: number) => void;
};

type QuickTo = {
  (value: number): void;
  tween?: { kill: () => void };
};

export const LandingBlobField = () => {
  const stageRef = useRef<SVGGElement | null>(null);
  const cyanRef = useRef<SVGGElement | null>(null);
  const pinkRef = useRef<SVGGElement | null>(null);
  const greenRef = useRef<SVGGElement | null>(null);
  const cyanShapeRef = useRef<SVGGElement | null>(null);
  const pinkShapeRef = useRef<SVGGElement | null>(null);
  const greenShapeRef = useRef<SVGGElement | null>(null);
  const tweensRef = useRef<GsapAnimation[]>([]);
  const quickSettersRef = useRef<QuickTo[]>([]);
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
      const cyanShape = cyanShapeRef.current;
      const pinkShape = pinkShapeRef.current;
      const greenShape = greenShapeRef.current;

      if (
        !isMounted ||
        !stage ||
        !cyan ||
        !pink ||
        !green ||
        !cyanShape ||
        !pinkShape ||
        !greenShape
      ) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set(stage, {
        transformOrigin: "500px 360px",
        x: 0,
        y: 0,
        force3D: true,
      });
      gsap.set([cyan, pink, green], {
        x: 0,
        y: 0,
        force3D: true,
      });
      gsap.set([cyanShape, pinkShape, greenShape], {
        transformBox: "fill-box",
        transformOrigin: "50% 50%",
        force3D: true,
      });

      if (!prefersReducedMotion) {
        tweensRef.current = [
          gsap.to(stage, {
            rotation: 360,
            duration: 132,
            ease: "none",
            repeat: -1,
          }),
          gsap.to(cyanShape, {
            rotation: -360,
            duration: 118,
            ease: "none",
            repeat: -1,
          }),
          gsap.to(cyanShape, {
            x: 42,
            y: -18,
            scaleX: 1.12,
            scaleY: 0.92,
            duration: 15,
            yoyo: true,
            ease: "sine.inOut",
            repeat: -1,
          }),
          gsap.to(pinkShape, {
            rotation: 360,
            duration: 142,
            ease: "none",
            repeat: -1,
          }),
          gsap.to(pinkShape, {
            x: -28,
            y: 34,
            scaleX: 0.94,
            scaleY: 1.1,
            duration: 18,
            yoyo: true,
            ease: "sine.inOut",
            repeat: -1,
          }),
          gsap.to(greenShape, {
            rotation: -360,
            duration: 126,
            ease: "none",
            repeat: -1,
          }),
          gsap.to(greenShape, {
            x: 34,
            y: 26,
            scaleX: 1.08,
            scaleY: 0.96,
            duration: 13,
            yoyo: true,
            ease: "sine.inOut",
            repeat: -1,
          }),
        ];
        tweensRef.current.forEach((tween) => tween.timeScale(0.78));
      }

      const stageX = gsap.quickTo(stage, "x", {
        duration: 1.15,
        ease: "power3.out",
      }) as QuickTo;
      const stageY = gsap.quickTo(stage, "y", {
        duration: 1.15,
        ease: "power3.out",
      }) as QuickTo;
      const cyanX = gsap.quickTo(cyan, "x", {
        duration: 1.2,
        ease: "power3.out",
      }) as QuickTo;
      const cyanY = gsap.quickTo(cyan, "y", {
        duration: 1.2,
        ease: "power3.out",
      }) as QuickTo;
      const pinkX = gsap.quickTo(pink, "x", {
        duration: 1.35,
        ease: "power3.out",
      }) as QuickTo;
      const pinkY = gsap.quickTo(pink, "y", {
        duration: 1.35,
        ease: "power3.out",
      }) as QuickTo;
      const greenX = gsap.quickTo(green, "x", {
        duration: 1.05,
        ease: "power3.out",
      }) as QuickTo;
      const greenY = gsap.quickTo(green, "y", {
        duration: 1.05,
        ease: "power3.out",
      }) as QuickTo;

      quickSettersRef.current = [
        stageX,
        stageY,
        cyanX,
        cyanY,
        pinkX,
        pinkY,
        greenX,
        greenY,
      ];

      const applyInput = () => {
        frameRef.current = null;

        const { x, y } = pointerRef.current;
        const normalizedX = x / window.innerWidth - 0.5;
        const normalizedY = y / window.innerHeight - 0.5;
        const offsetX = normalizedX * 176;
        const offsetY = normalizedY * 122;

        stageX(offsetX * 0.42);
        stageY(offsetY * 0.34);
        cyanX(offsetX * 0.62);
        cyanY(offsetY * 0.42);
        pinkX(offsetX * -0.58);
        pinkY(offsetY * -0.7);
        greenX(offsetX * 0.78);
        greenY(offsetY * -0.52);

        tweensRef.current.forEach((tween) => tween.timeScale(1.45));
        settleRef.current?.kill();
        settleRef.current = gsap.delayedCall(0.28, () => {
          gsap.to(tweensRef.current, {
            timeScale: 0.78,
            duration: 1.8,
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
        quickSettersRef.current.forEach((quickSetter) =>
          quickSetter.tween?.kill()
        );
        tweensRef.current = [];
        quickSettersRef.current = [];
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
            x="-35%"
            y="-35%"
            width="170%"
            height="170%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="38" />
          </filter>
        </defs>

        <g ref={stageRef} filter="url(#lingo-blob-blur)">
          <g ref={cyanRef}>
            <g ref={cyanShapeRef}>
              <path
                d="M-45 363C22 248 183 214 361 241C549 269 690 341 694 417C699 503 524 542 312 530C105 519 -116 487 -45 363Z"
                fill="#8DEBFF"
                opacity="0.72"
              />
            </g>
          </g>

          <g ref={pinkRef}>
            <g ref={pinkShapeRef}>
              <path
                d="M593 -80C724 -65 795 62 803 242C813 463 734 625 611 628C474 632 424 456 452 260C478 83 473 -94 593 -80Z"
                fill="#F06EF1"
                opacity="0.72"
              />
            </g>
          </g>

          <g ref={greenRef}>
            <g ref={greenShapeRef}>
              <path
                d="M268 315C377 244 580 251 644 348C714 455 566 561 396 567C246 572 111 498 151 408C171 363 213 351 268 315Z"
                fill="#22C55E"
                opacity="0.5"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
