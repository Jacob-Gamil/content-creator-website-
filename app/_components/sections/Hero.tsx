import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-cinematic-gradient grain"
    >
      {/* Hairline grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute left-[10%] h-full w-px bg-white" />
        <div className="absolute left-[50%] h-full w-px bg-white" />
        <div className="absolute top-[22%] w-full h-px bg-white" />
        <div className="absolute bottom-[18%] w-full h-px bg-white" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center lg:grid-cols-12">
          {/* Left: Typography */}
          <div className="lg:col-span-7 pt-28 lg:pt-0">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-display font-medium text-white/80">
                01
              </span>
              <span className="h-px w-10 bg-white/50" />
              <span className="text-[11px] font-display font-medium uppercase tracking-[0.4em] text-white/80">
                Creative Direction
              </span>
            </div>

            <h1 className="mt-8 font-display text-[18vw] font-light uppercase leading-[0.82] tracking-mega text-white sm:text-[15vw] lg:text-[10vw]">
              <span className="block overflow-hidden">
                <span className="block">Create</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block">With</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block font-medium">Purpose.</span>
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-brand-black transition-all duration-500 hover:bg-brand-black hover:text-white"
              >
                View My Work
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <p className="max-w-xs font-body text-sm leading-relaxed text-white/85">
                I create visual stories, digital experiences, and content that
                turn ideas into attention.
              </p>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative mt-12 h-[60vh] lg:col-span-5 lg:mt-0 lg:h-[85vh]">
            <div className="relative h-full w-full">
              <Image
                src="/hero-image.jpg"
                alt="Creator portrait"
                fill
                className="h-full w-full object-cover object-center grayscale-20 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-l from-transparent via-brand-orange/10 to-brand-orange/30" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-deep-red/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="absolute bottom-8 left-6 right-6 z-10 flex items-end justify-between lg:px-10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            Location
          </span>
          <span className="text-[11px] font-display uppercase tracking-[0.15em] text-white">
            40.7128° N, 74.0060° W
          </span>
        </div>
        <div className="hidden flex-col items-end gap-1 sm:flex">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            Current Status
          </span>
          <span className="flex items-center gap-2 text-[11px] font-display uppercase tracking-[0.15em] text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Available for Collab
          </span>
        </div>
        <a
          href="#about"
          className="flex items-center gap-2 text-[11px] font-display uppercase tracking-[0.2em] text-white/80"
        >
          Scroll <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
