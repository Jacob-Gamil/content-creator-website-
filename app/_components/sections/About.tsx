import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

const stats = [
  { value: "100+", label: "Videos" },
  { value: "2.5M+", label: "Views" },
  { value: "150K+", label: "Followers" },
  { value: "5+", label: "Years Creating" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-brand-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div>
          <SectionLabel index="02" label="About the Creator" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div>
              <h2 className="font-display text-[10vw] font-light uppercase leading-[0.85] tracking-mega text-white sm:text-[7vw] lg:text-[5.5vw]">
                I Turn
                <br />
                Ideas Into
                <br />
                <span className="text-brand-orange">Content.</span>
              </h2>
            </div>

            <div>
              <p className="mt-10 max-w-xl font-body text-base leading-relaxed text-white/60">
                I'm Kai — a content creator, filmmaker, and digital storyteller.
                For the past five years I've built a body of work spanning
                video, education, and culture. My approach blends cinematic
                visuals with sharp strategy, crafting content that doesn't just
                fill a feed — it holds attention.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border-y border-white/10 sm:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <div className="border-r border-white/10 px-4 py-8 last:border-r-0 sm:px-6">
                    <span className="block font-display text-4xl font-light tracking-tight text-white text-glow-orange lg:text-5xl">
                      {s.value}
                    </span>
                    <span className="mt-2 block text-[11px] font-display uppercase tracking-[0.25em] text-white/40">
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[60vh] w-full overflow-hidden lg:h-[80vh]">
              <Image
                src="/image-2.jpg"
                alt="Creator in studio"
                fill
                loading="eager"
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-orange" />
                <span className="text-[11px] font-display uppercase tracking-[0.3em] text-white/80">
                  In the Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
