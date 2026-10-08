"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CONTENT", href: "#content" },
  { label: "SERVICES", href: "#services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTl = useRef<gsap.core.Timeline | null>(null);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // Intro + mobile menu timeline
  useGSAP(
    () => {
      // Header is `invisible` in the markup to avoid a flash before GSAP runs
      gsap.set("[data-nav-root]", { autoAlpha: 1 });

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-nav='item']", {
          y: -24,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          delay: 0.2,
          ease: "power3.out",
        });
      });

      // Mobile menu: clip-path wipe, then links rise in
      const menu = menuRef.current;
      if (menu) {
        gsap.set(menu, { clipPath: "inset(0% 0% 100% 0%)" });

        const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "power4.out" },
          onReverseComplete: () => {
            gsap.set(menu, { autoAlpha: 0 });
          },
        });

        tl.set(menu, { autoAlpha: 1 }, 0)
          .to(
            menu,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.8,
              ease: "power4.inOut",
            },
            0,
          )
          .from(
            "[data-menu='item']",
            { y: 48, opacity: 0, duration: 0.8, stagger: 0.07 },
            0.35,
          );

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          tl.timeScale(6);
        }

        menuTl.current = tl;
      }
    },
    { scope: headerRef },
  );

  // Open / close the mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) menuTl.current?.play();
    else menuTl.current?.reverse();
  }, [open]);

  // Background on scroll + hide on scroll down / show on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    let hidden = false;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      if (openRef.current) return;

      const goingDown = y > lastY;
      const shouldHide = goingDown && y > 120;

      if (shouldHide !== hidden && Math.abs(y - lastY) > 4) {
        hidden = shouldHide;
        gsap.to(headerRef.current, {
          yPercent: hidden ? -100 : 0,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "bg-brand-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        data-nav-root
        className="invisible mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-10"
      >
        <a
          data-nav="item"
          href="#top"
          className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white"
        >
          K<span className="text-brand-orange">.</span>Mashour
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              data-nav="item"
              key={l.label}
              href={l.href}
              className="group relative text-[11px] font-display font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div data-nav="item" className="hidden md:block">
          <a
            href="#services"
            className="rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-[11px] font-display font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-black"
          >
            Let's Work Together
          </a>
        </div>

        <button
          data-nav="item"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="text-white md:hidden"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile menu (always mounted so GSAP can animate in and out) */}
      <div
        ref={menuRef}
        aria-hidden={!open}
        className="invisible fixed inset-0 z-9999 bg-brand-black grain md:hidden"
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white">
            K<span className="text-brand-orange">.</span>Mashour
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-white"
          >
            <X size={24} />
          </button>
        </div>
        <div className="mt-10 flex flex-col gap-2 px-6">
          {links.map((l) => (
            <a
              data-menu="item"
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-5 font-display text-3xl font-light uppercase tracking-tight text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            data-menu="item"
            href="#services"
            onClick={() => setOpen(false)}
            className="mt-8 inline-block rounded-full bg-brand-orange px-6 py-4 text-center text-xs font-display font-semibold uppercase tracking-[0.2em] text-white"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </header>
  );
}
