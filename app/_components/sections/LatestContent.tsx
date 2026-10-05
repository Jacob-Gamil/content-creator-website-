import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import Image from "next/image";

const posts = [
  {
    platform: "YouTube",
    title: "Designing a Cinematic Color Grade",
    date: "Mar 2026",
    views: "182K",
    img: "/image-6.jpg",
  },
  {
    platform: "Instagram",
    title: "The Quiet Power of Negative Space",
    date: "Mar 2026",
    views: "94K",
    img: "/image-7.jpg",
  },
  {
    platform: "TikTok",
    title: "Why I Stopped Chasing Virality",
    date: "Feb 2026",
    views: "560K",
    img: "/image-8.jpg",
  },
];

export default function LatestContent() {
  return (
    <section className="relative bg-brand-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="06" label="Latest Content" />
            <h2 className="mt-6 font-display text-[10vw] font-light uppercase leading-[0.85] tracking-mega text-white sm:text-[7vw] lg:text-[5vw]">
              Fresh
              <br />
              <span className="text-brand-orange">Releases.</span>
            </h2>
          </div>
          <div>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-[11px] font-display font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-brand-orange"
            >
              View All
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {posts.map((p, i) => (
            <div key={p.title}>
              <a href="#" className="group block">
                <div className="relative aspect-3/2 w-full overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-black/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-brand-black/40 px-3 py-1 text-[10px] font-display uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {p.platform}
                  </span>
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/0 text-white opacity-0 transition-all duration-500 group-hover:bg-brand-orange group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-light uppercase leading-tight tracking-tight text-white transition-colors group-hover:text-brand-orange">
                  {p.title}
                </h3>
                <div className="mt-4 flex items-center gap-5 border-t border-white/10 pt-4">
                  <span className="text-[11px] font-display uppercase tracking-[0.15em] text-white/50">
                    {p.date}
                  </span>
                  <span className="text-[11px] font-display uppercase tracking-[0.15em] text-white/50">
                    {p.views} views
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
