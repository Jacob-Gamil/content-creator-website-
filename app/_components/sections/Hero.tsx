"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set("[data-hero-root]", { autoAlpha: 1 });

      const mm = gsap.matchMedia();

      // Reduced motion: just show everything, no animation
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero='portrait'], [data-hero='orb']", { opacity: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Background orb + portrait
        tl.fromTo(
          "[data-hero='orb']",
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" },
          0,
        )
          .fromTo(
            "[data-hero='portrait']",
            { opacity: 0, filter: "blur(20px)", y: 40, scale: 1.1 },
            {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              scale: 1,
              duration: 2,
              ease: "power3.out",
              clearProps: "filter,transform",
            },
            0.1,
          )

          // Eyebrow: 01 — line — Creative Direction
          .from(
            "[data-hero='eyebrow-num']",
            { opacity: 0, y: 10, duration: 0.8 },
            0.2,
          )
          .from(
            "[data-hero='rule']",
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 1,
              ease: "power3.inOut",
            },
            0.3,
          )
          .from(
            "[data-hero='eyebrow-label']",
            { opacity: 0, x: -16, duration: 0.8 },
            0.4,
          )

          // Headline lines slide up out of their masks
          .from(
            "[data-hero='line']",
            {
              yPercent: 110,
              rotate: 3,
              transformOrigin: "left bottom",
              duration: 1.4,
              stagger: 0.12,
            },
            0.35,
          )

          // CTA + paragraph
          .from(
            "[data-hero='cta']",
            { opacity: 0, y: 24, duration: 1, stagger: 0.12 },
            1.0,
          )

          // Bottom metadata
          .from(
            "[data-hero='meta']",
            { opacity: 0, y: 16, duration: 0.9, stagger: 0.1 },
            1.3,
          );

        // Subtle mouse parallax on the orb (desktop only)
        const el = root.current;
        const orb = el?.querySelector("[data-hero='orb']");
        if (el && orb && window.matchMedia("(min-width: 1024px)").matches) {
          const onMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 60;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            gsap.to(orb, {
              x,
              y,
              duration: 1.2,
              ease: "power3.out",
              overwrite: "auto",
            });
          };
          el.addEventListener("mousemove", onMove);
          return () => el.removeEventListener("mousemove", onMove);
        }
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-cinematic-gradient grain"
    >
      <div
        data-hero-root
        className="invisible relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center px-6 lg:px-10"
      >
        <div className="grid grid-cols-1 items-center lg:grid-cols-12">
          {/* Left: Typography */}
          <div className="lg:col-span-7 pt-28 lg:pt-0">
            <div className="flex items-center gap-3">
              <span
                data-hero="eyebrow-num"
                className="text-[11px] font-display font-medium text-white/80"
              >
                01
              </span>
              <span data-hero="rule" className="h-px w-10 bg-white/50" />
              <span
                data-hero="eyebrow-label"
                className="text-[11px] font-display font-medium uppercase tracking-[0.4em] text-white/80"
              >
                Creative Direction
              </span>
            </div>

            <h1 className="mt-8 font-display text-[18vw] font-light uppercase leading-[0.90] tracking-mega text-white sm:text-[15vw] lg:text-[10vw]">
              <span className="block overflow-hidden">
                <span data-hero="line" className="block">
                  Create
                </span>
              </span>
              <span className="block overflow-hidden">
                <span data-hero="line" className="block">
                  With
                </span>
              </span>
              <span className="block overflow-hidden">
                <span data-hero="line" className="block font-medium">
                  Purpose.
                </span>
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
              <a
                data-hero="cta"
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-brand-black transition-colors duration-500 hover:bg-brand-black hover:text-white"
              >
                View My Work
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <p
                data-hero="cta"
                className="max-w-xs font-body text-sm leading-relaxed text-white/85"
              >
                I create visual stories, digital experiences, and content that
                turn ideas into attention.
              </p>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative mt-12 h-[60vh] lg:col-span-5 lg:mt-0 lg:h-[85vh]">
            <div className="relative h-full w-full">
              <div
                data-hero="orb"
                className="absolute left-0 h-130 w-130 rounded-full bg-accent/20 opacity-0"
              />
              {/* Wrapper gets animated so the image's own rotate-y-180 flip isn't overwritten by GSAP's transform */}
              <div data-hero="portrait" className="absolute inset-0 opacity-0">
                <Image
                  src="/heroI.png"
                  alt="Creator portrait"
                  fill
                  loading="eager"
                  className="h-full w-full object-contain object-center mix-blend-luminosity rounded-2xl rotate-y-180"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <div
        data-hero-root
        className="invisible absolute bottom-8 left-6 right-6 z-10 flex items-end justify-between lg:px-10"
      >
        <div data-hero="meta" className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            Location
          </span>
          <span className="text-[11px] font-display uppercase tracking-[0.15em] text-white">
            Egypt, Cairo
          </span>
        </div>
        <div
          data-hero="meta"
          className="hidden flex-col items-end gap-1 sm:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            Current Status
          </span>
          <span className="flex items-center gap-2 text-[11px] font-display uppercase tracking-[0.15em] text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Available for Collab
          </span>
        </div>
        <a
          data-hero="meta"
          href="#about"
          className="flex items-center gap-2 text-[11px] font-display uppercase tracking-[0.2em] text-white/80"
        >
          Scroll <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
