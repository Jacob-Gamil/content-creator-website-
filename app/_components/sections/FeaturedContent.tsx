import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";

const items = [
  {
    num: "01",
    platform: "Instagram",
    title: "How I Built My Creative Workflow",
    desc: "A behind-the-scenes look at the systems, tools, and rituals that power a sustainable creative practice.",
    date: "Sep 2026",
    views: "330K",
    href: "https://www.instagram.com/reel/DdJwtCvoXzC/?stkn=ZHViN3ZvYzJubGls",
    img: "/image-3.jpg",
  },
  {
    num: "02",
    platform: "Facebook",
    title: "The Art of Short-Form Storytelling",
    desc: "Breaking down the structure of a 15-second story that earns attention and leaves a mark.",
    date: "Feb 2026",
    views: "1.2M",
    href: "#",
    img: "/img-4.jpg",
  },
  {
    num: "03",
    platform: "TikTok",
    title: "30 Days of Creating",
    desc: "A daily experiment in momentum — what happens when you commit to making something every single day.",
    date: "Jan 2026",
    views: "3.4M",
    href: "#",
    img: "/image-5.jpeg",
  },
];

export default function FeaturedContent() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-brand-void py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="min-w-0">
            <SectionLabel index="03" label="Selected Work" />

            <h2 className="mt-6 font-display text-[12vw] font-light uppercase leading-[0.9] tracking-mega text-white sm:text-[8vw] lg:text-[6vw]">
              Featured
              <br />
              <span className="text-brand-orange">Content.</span>
            </h2>
          </div>
        </div>

        {/* Featured Items */}
        <div className="mt-12 flex flex-col gap-16 sm:mt-16 sm:gap-20 lg:mt-20 lg:gap-32">
          {items.map((item, i) => {
            const reversed = i % 2 === 1;

            return (
              <article
                key={item.num}
                className="group grid min-w-0 grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12"
              >
                {/* Image */}
                <div
                  className={`min-w-0 lg:col-span-8 ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 sm:rounded-3xl lg:aspect-[5/4]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      loading={i === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), 66vw"
                      className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-brand-black/60 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 font-display text-4xl font-light text-white/50 sm:left-5 sm:top-5 sm:text-6xl">
                      {item.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`min-w-0 lg:col-span-4 ${
                    reversed ? "lg:order-1 lg:pr-8" : "lg:pl-4"
                  }`}
                >
                  <span className="text-[10px] font-display font-medium uppercase tracking-[0.25em] text-brand-orange sm:text-[11px] sm:tracking-[0.3em]">
                    {item.platform}
                  </span>

                  <h3 className="mt-4 font-display text-2xl font-light uppercase leading-[1.05] tracking-tight text-white sm:mt-5 sm:text-3xl lg:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/55 sm:mt-5">
                    {item.desc}
                  </p>

                  {/* Metadata and Link */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-5 sm:mt-8">
                    <div className="flex min-w-0 flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        Date
                      </span>
                      <span className="text-xs font-display uppercase tracking-wider text-white sm:tracking-widest">
                        {item.date}
                      </span>
                    </div>

                    <div className="flex min-w-0 flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        Views
                      </span>
                      <span className="text-xs font-display uppercase tracking-wider text-white sm:tracking-widest">
                        {item.views}
                      </span>
                    </div>

                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.title} on ${item.platform}`}
                      className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-brand-orange hover:bg-brand-orange"
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
