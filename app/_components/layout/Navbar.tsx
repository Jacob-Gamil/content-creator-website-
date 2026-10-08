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

  // Keep the latest menu state available to event handlers.
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // Intro animation and mobile menu timeline.
  useGSAP(
    () => {
      const header = headerRef.current;
      const menu = menuRef.current;

      if (!header || !menu) return;

      const introItems = header.querySelectorAll("[data-nav='item']");
      const menuItems = menu.querySelectorAll("[data-menu='item']");

      gsap.set(menu, {
        autoAlpha: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        pointerEvents: "none",
      });

      // Header intro.
      const intro = gsap.matchMedia();

      intro.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(introItems, {
          y: -20,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.08,
          delay: 0.15,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        });
      });

      // Mobile menu animation.
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power4.out" },
        onStart: () => {
          gsap.set(menu, { pointerEvents: "auto" });
        },
        onReverseComplete: () => {
          gsap.set(menu, {
            autoAlpha: 0,
            pointerEvents: "none",
          });
        },
      });

      tl.set(menu, { autoAlpha: 1 }, 0)
        .to(
          menu,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.65,
            ease: "power4.inOut",
          },
          0,
        )
        .fromTo(
          menuItems,
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            stagger: 0.06,
            clearProps: "transform",
          },
          0.25,
        );

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        tl.timeScale(4);
      }

      menuTl.current = tl;

      return () => {
        intro.revert();
        menuTl.current = null;
      };
    },
    { scope: headerRef },
  );

  // Synchronize the menu animation with React state.
  useGSAP(
    () => {
      const tl = menuTl.current;

      if (!tl) return;

      if (open) {
        tl.play();
      } else {
        tl.reverse();
      }
    },
    { dependencies: [open] },
  );

  // Lock background scrolling while the menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Scroll background and hide/show the desktop/mobile header.
  useEffect(() => {
    let lastY = window.scrollY;
    let hidden = false;

    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 40);

      if (openRef.current) {
        lastY = y;
        return;
      }

      const goingDown = y > lastY;
      const shouldHide = goingDown && y > 120;

      if (shouldHide !== hidden && Math.abs(y - lastY) > 4) {
        hidden = shouldHide;

        gsap.to(headerRef.current, {
          yPercent: hidden ? -100 : 0,
          duration: 0.4,
          ease: "power3.out",
          overwrite: true,
        });
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      gsap.killTweensOf(headerRef.current);
    };
  }, []);

  // Always reveal the header before opening the mobile menu.
  const openMenu = () => {
    gsap.killTweensOf(headerRef.current);
    gsap.set(headerRef.current, { yPercent: 0 });
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-white/10 bg-brand-black/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
          <a
            data-nav="item"
            href="#top"
            onClick={closeMenu}
            className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white"
          >
            K<span className="text-brand-orange">.</span>Mashour
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <a
                data-nav="item"
                key={link.label}
                href={link.href}
                className="group relative text-[11px] font-display font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
              >
                {link.label}
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

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={openMenu}
            className="flex h-11 w-11 touch-manipulation items-center justify-center text-white md:hidden"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu — outside the animated header */}
      <div
        id="mobile-navigation"
        ref={menuRef}
        aria-hidden={!open}
        inert={!open}
        className="invisible fixed inset-0 z-[999] overflow-y-auto overscroll-contain bg-brand-black grain md:hidden"
      >
        <div className="flex items-center justify-between px-4 py-5 sm:px-6">
          <a
            href="#top"
            onClick={closeMenu}
            className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white"
          >
            K<span className="text-brand-orange">.</span>Mashour
          </a>

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="flex h-11 w-11 touch-manipulation items-center justify-center text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="mx-auto mt-8 flex max-w-2xl flex-col gap-1 px-4 pb-10 sm:mt-10 sm:px-6"
        >
          {links.map((link) => (
            <a
              data-menu="item"
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              className="border-b border-white/10 py-5 font-display text-2xl font-light uppercase tracking-tight text-white transition-colors hover:text-brand-orange sm:py-6 sm:text-3xl"
            >
              {link.label}
            </a>
          ))}

          <a
            data-menu="item"
            href="#services"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-orange px-6 py-4 text-center text-xs font-display font-semibold uppercase tracking-[0.2em] text-white"
          >
            Let's Work Together
          </a>
        </nav>
      </div>
    </>
  );
}
