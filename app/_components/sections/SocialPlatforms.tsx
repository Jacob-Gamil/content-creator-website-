import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const platforms = [
  { name: "YouTube", handle: "@kaistudio", followers: "92K" },
  { name: "Instagram", handle: "@kai.creates", followers: "48K" },
  { name: "TikTok", handle: "@kaistudio", followers: "120K" },
  { name: "X", handle: "@kaistudio", followers: "18K" },
  { name: "LinkedIn", handle: "in/kaistudio", followers: "6.4K" },
];

export default function SocialPlatforms() {
  return (
    <section className="relative bg-brand-void py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="05" label="Social Platforms" />
            <h2 className="mt-6 font-display text-[10vw] font-light uppercase leading-[0.85] tracking-mega text-white sm:text-[7vw] lg:text-[5vw]">
              Find Me
              <br />
              <span className="text-brand-orange">Everywhere.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border-t border-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {platforms.map((p, i) => (
            <div key={p.name}>
              <a
                href="#"
                className="group flex h-full flex-col justify-between border-b border-r border-white/10 p-6 transition-colors duration-500 hover:bg-brand-orange last:border-r-0 lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-[11px] font-medium uppercase tracking-[0.25em] text-white/50 transition-colors group-hover:text-white/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                  />
                </div>
                <div className="mt-12">
                  <h3 className="font-display text-2xl font-light uppercase tracking-tight text-white lg:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-white/60 transition-colors group-hover:text-white/90">
                    {p.handle}
                  </p>
                  <p className="mt-6 font-display text-[11px] uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-white/80">
                    {p.followers} Followers
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
