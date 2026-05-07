"use client";

import { useEffect, useRef } from "react";

import { usePathname } from "next/navigation";

type GsapTween = {
  kill: () => void;
  timeScale?: (value: number) => void;
};

type QuickTo = {
  (value: number): void;
  tween?: { kill: () => void };
};

export const GsapSiteEffects = () => {
  const haloRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;
    let cleanup = () => {};

    const setup = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!isMounted) return;

      gsap.registerPlugin(ScrollTrigger);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const halo = haloRef.current;
      const cleanups: (() => void)[] = [];
      const tweens: GsapTween[] = [];

      if (prefersReducedMotion) {
        document.documentElement.classList.add("reduce-site-motion");
        cleanup = () => {
          document.documentElement.classList.remove("reduce-site-motion");
        };
        return;
      }

      document.documentElement.classList.remove("reduce-site-motion");

      const context = gsap.context(() => {
        gsap.set(".site-orbit", {
          transformOrigin: "50% 50%",
          force3D: true,
        });

        tweens.push(
          gsap.to(".site-orbit-a", {
            xPercent: 18,
            yPercent: -12,
            rotation: 360,
            duration: 42,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
          gsap.to(".site-orbit-b", {
            xPercent: -14,
            yPercent: 16,
            rotation: -360,
            duration: 48,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
          gsap.to(".site-orbit-c", {
            xPercent: 10,
            yPercent: 12,
            rotation: 180,
            duration: 36,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
          gsap.to(".site-motion-path", {
            strokeDashoffset: 0,
            duration: 5.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.35,
          })
        );

        gsap.utils
          .toArray<HTMLElement>("[data-motion='reveal']")
          .forEach((element, index) => {
            gsap.fromTo(
              element,
              {
                autoAlpha: 0,
                y: coarsePointer ? 24 : 42,
                scale: coarsePointer ? 0.98 : 0.96,
                filter: "blur(14px)",
              },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: 1,
                delay: Math.min(index * 0.045, 0.22),
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                  once: true,
                },
              }
            );
          });

        gsap.utils
          .toArray<HTMLElement>("[data-motion='stagger']")
          .forEach((group) => {
            const items = group.querySelectorAll<HTMLElement>(
              "[data-motion-item]"
            );

            if (!items.length) return;

            gsap.fromTo(
              items,
              {
                autoAlpha: 0,
                y: coarsePointer ? 18 : 36,
                rotateX: coarsePointer ? 0 : -10,
                filter: "blur(10px)",
              },
              {
                autoAlpha: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: group,
                  start: "top 86%",
                  once: true,
                },
              }
            );
          });

        gsap.utils
          .toArray<HTMLElement>("[data-float]")
          .forEach((element, index) => {
            const amount = Number(element.dataset.float || 12);
            const direction = index % 2 === 0 ? 1 : -1;

            tweens.push(
              gsap.to(element, {
                y: amount * direction,
                rotate: direction * 1.8,
                duration: 4.8 + (index % 4) * 0.7,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              })
            );
          });

        gsap.utils
          .toArray<HTMLElement>("[data-parallax]")
          .forEach((element) => {
            const distance = Number(element.dataset.parallax || 18);

            gsap.to(element, {
              yPercent: distance,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          });
      });

      if (halo && !coarsePointer) {
        gsap.set(halo, { xPercent: -50, yPercent: -50, scale: 0.82 });

        const haloX = gsap.quickTo(halo, "x", {
          duration: 0.45,
          ease: "power3.out",
        }) as QuickTo;
        const haloY = gsap.quickTo(halo, "y", {
          duration: 0.45,
          ease: "power3.out",
        }) as QuickTo;
        const haloScale = gsap.quickTo(halo, "scale", {
          duration: 0.35,
          ease: "power3.out",
        }) as QuickTo;

        const handlePointerMove = (event: PointerEvent) => {
          haloX(event.clientX);
          haloY(event.clientY);
          document.documentElement.style.setProperty(
            "--site-pointer-x",
            `${event.clientX}px`
          );
          document.documentElement.style.setProperty(
            "--site-pointer-y",
            `${event.clientY}px`
          );
        };

        const handlePointerDown = () => haloScale(1.12);
        const handlePointerUp = () => haloScale(0.82);

        window.addEventListener("pointermove", handlePointerMove, {
          passive: true,
        });
        window.addEventListener("pointerdown", handlePointerDown, {
          passive: true,
        });
        window.addEventListener("pointerup", handlePointerUp, {
          passive: true,
        });

        cleanups.push(() => {
          window.removeEventListener("pointermove", handlePointerMove);
          window.removeEventListener("pointerdown", handlePointerDown);
          window.removeEventListener("pointerup", handlePointerUp);
          haloX.tween?.kill();
          haloY.tween?.kill();
          haloScale.tween?.kill();
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((element) => {
        if (coarsePointer) return;

        const xTo = gsap.quickTo(element, "x", {
          duration: 0.42,
          ease: "elastic.out(1, 0.55)",
        }) as QuickTo;
        const yTo = gsap.quickTo(element, "y", {
          duration: 0.42,
          ease: "elastic.out(1, 0.55)",
        }) as QuickTo;
        const rotateTo = gsap.quickTo(element, "rotation", {
          duration: 0.42,
          ease: "power3.out",
        }) as QuickTo;

        const handleMove = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const relX = event.clientX - rect.left - rect.width / 2;
          const relY = event.clientY - rect.top - rect.height / 2;
          const strength = Number(element.dataset.magnetic || 0.16);

          xTo(relX * strength);
          yTo(relY * strength);
          rotateTo(relX * 0.018);
        };

        const reset = () => {
          xTo(0);
          yTo(0);
          rotateTo(0);
        };

        element.addEventListener("pointermove", handleMove, { passive: true });
        element.addEventListener("pointerleave", reset, { passive: true });
        element.addEventListener("pointercancel", reset, { passive: true });

        cleanups.push(() => {
          element.removeEventListener("pointermove", handleMove);
          element.removeEventListener("pointerleave", reset);
          element.removeEventListener("pointercancel", reset);
          xTo.tween?.kill();
          yTo.tween?.kill();
          rotateTo.tween?.kill();
        });
      });

      cleanup = () => {
        cleanups.forEach((runCleanup) => runCleanup());
        tweens.forEach((tween) => tween.kill());
        context.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    setup();

    return () => {
      isMounted = false;
      cleanup();
    };
  }, [pathname]);

  return (
    <div className="site-motion-layer" aria-hidden="true">
      <div ref={haloRef} className="site-cursor-halo" />
      <div className="site-orbit site-orbit-a" />
      <div className="site-orbit site-orbit-b" />
      <div className="site-orbit site-orbit-c" />
      <svg
        className="site-motion-svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <path
          className="site-motion-path"
          d="M-40 430C180 230 344 610 548 356C750 104 906 442 1240 174"
        />
        <path
          className="site-motion-path site-motion-path-green"
          d="M-80 210C150 85 310 280 500 188C790 48 900 300 1280 72"
        />
      </svg>
    </div>
  );
};
