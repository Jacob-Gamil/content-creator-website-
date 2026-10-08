import { ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "facebook",
    href: "https://www.facebook.com/share/1FQNkTsXJ3/?mibextid=wwXIfr",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mashhour._?rpxt=dGpqYWxuYXNqbm1m&utm_source=qr",
  },
  { name: "TikTok", href: "https://www.tiktok.com/@khaledramadan13" },
];

const nav = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CONTENT", href: "#content" },
  { label: "CONTACT", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-black border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#top"
              className="font-display text-2xl font-semibold uppercase tracking-[0.2em] text-white"
            >
              K<span className="text-brand-orange">.</span>Mashour
            </a>
            <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-white/50">
              A digital auteur crafting visual stories, content, and experiences
              that turn ideas into attention.
            </p>
            <div className=" flex flex-col">
              <a
                href="mailto:hello@kaistudio.com"
                className="mt-6 inline-block font-display text-lg text-white underline decoration-brand-orange/60 underline-offset-4 transition-colors hover:text-brand-orange"
              >
                khaledmashhor136@gamil.com
              </a>
              <h1 className="mt-2 inline-block font-display text-lg text-white underline decoration-brand-orange/60 underline-offset-4 transition-colors hover:text-brand-orange">
                + (20) 1026700467
              </h1>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <span className="text-[11px] font-display font-medium uppercase tracking-[0.3em] text-white/40">
              Navigation
            </span>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="font-display text-sm uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-brand-orange"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="text-[11px] font-display font-medium uppercase tracking-[0.3em] text-white/40">
              Social
            </span>
            <ul className="mt-6 space-y-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    className="group inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-brand-orange"
                  >
                    {s.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="font-display text-[11px] uppercase tracking-[0.25em] text-white/40">
            © 2026 K.Mashour — All Rights Reserved
          </p>
          <p className="font-display text-[11px] uppercase tracking-[0.25em] text-white/40">
            Built with <span className="text-brand-orange">creativity</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
