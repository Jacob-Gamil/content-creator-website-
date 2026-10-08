"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CONTENT", href: "#content" },
  { label: "SERVICES", href: "#services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#top"
            className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white"
          >
            K<span className="text-brand-orange">.</span>Mashour
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative text-[11px] font-display font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#services"
              className="rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-[11px] font-display font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-black"
            >
              Let's Work Together
            </a>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="text-white md:hidden"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <div>
        {open && (
          <div className="fixed inset-0 z-60 bg-brand-black grain md:hidden">
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
              {links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-5 font-display text-3xl font-light uppercase tracking-tight text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="mt-8 inline-block rounded-full bg-brand-orange px-6 py-4 text-center text-xs font-display font-semibold uppercase tracking-[0.2em] text-white"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
