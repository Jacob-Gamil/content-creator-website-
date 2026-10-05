import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

const items = [
  {
    num: "01",
    platform: "YouTube",
    title: "How I Built My Creative Workflow",
    desc: "A behind-the-scenes look at the systems, tools, and rituals that power a sustainable creative practice.",
    date: "Mar 2026",
    views: "482K",
    img: "/image-3.jpg",
  },
  {
    num: "02",
    platform: "Instagram",
    title: "The Art of Short-Form Storytelling",
    desc: "Breaking down the structure of a 15-second story that earns attention and leaves a mark.",
    date: "Feb 2026",
    views: "1.2M",
    img: "/image-4.jpg",
  },
  {
    num: "03",
    platform: "TikTok",
    title: "30 Days of Creating",
    desc: "A daily experiment in momentum — what happens when you commit to making something every single day.",
    date: "Jan 2026",
    views: "3.4M",
    img: "/image-5.jpg",
  },
];

export default function FeaturedContent() {
  return (
    <section id="work" className="relative bg-brand-void py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="03" label="Selected Work" />
            <h2 className="mt-6 font-display text-[12vw] font-light uppercase leading-[0.85] tracking-mega text-white sm:text-[8vw] lg:text-[6vw]">
              Featured
              <br />
              <span className="text-brand-orange">Content.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-xs font-body text-sm leading-relaxed text-white/50">
              A curated selection of projects across platforms — each one a
              study in attention, craft, and momentum.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {items.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div key={item.num}>
                <article className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  <div
                    className={`relative overflow-hidden lg:col-span-8 ${reversed ? "lg:order-2" : ""}`}
                  >
                    <div className="relative aspect-16/10 w-full overflow-hidden">
                      <div className="h-full w-full">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          loading="eager"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-linear-to-t from-brand-black/60 via-transparent to-transparent" />
                      <span className="absolute left-5 top-5 font-display text-6xl font-light text-white/30">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-4 ${reversed ? "lg:order-1 lg:pr-8" : "lg:pl-4"}`}
                  >
                    <span className="text-[11px] font-display font-medium uppercase tracking-[0.3em] text-brand-orange">
                      {item.platform}
                    </span>
                    <h3 className="mt-5 font-display text-3xl font-light uppercase leading-[0.95] tracking-tight text-white lg:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 font-body text-sm leading-relaxed text-white/55">
                      {item.desc}
                    </p>

                    <div className="mt-8 flex items-center gap-6 border-t border-white/10 pt-5">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                          Date
                        </span>
                        <span className="text-xs font-display uppercase tracking-widest text-white">
                          {item.date}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                          Views
                        </span>
                        <span className="text-xs font-display uppercase tracking-widest text-white">
                          {item.views}
                        </span>
                      </div>
                      <a
                        href="#"
                        className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
