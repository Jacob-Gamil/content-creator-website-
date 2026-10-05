import { ArrowUpRight } from "lucide-react";

const services = [
  "Content Creation",
  "Video Production",
  "Brand Collaborations",
  "Creative Direction",
  "Social Strategy",
];

export default function Collaboration() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-cinematic-gradient grain py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute left-[50%] h-full w-px bg-white" />
        <div className="absolute top-[30%] w-full h-px bg-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-display font-medium text-white/80">
              07
            </span>
            <span className="h-px w-10 bg-white/50" />
            <span className="text-[11px] font-display font-medium uppercase tracking-[0.4em] text-white/80">
              Collaboration
            </span>
          </div>
        </div>

        <div>
          <h2 className="mt-10 max-w-5xl font-display text-[14vw] font-light uppercase leading-[0.82] tracking-mega text-white sm:text-[10vw] lg:text-[7.5vw]">
            Let's Create
            <br />
            Something
            <br />
            <span className="font-medium">Worth Watching.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div>
              <p className="max-w-md font-body text-base leading-relaxed text-white/85">
                I partner with brands and creators who care about craft. From
                concept to final cut, I help turn ideas into content people
                actually want to watch.
              </p>
              <a
                href="mailto:hello@kaistudio.com"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-brand-black transition-all duration-500 hover:bg-brand-black hover:text-white"
              >
                Start a Project
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border-t border-white/20">
              {services.map((s, i) => (
                <div key={s}>
                  <div className="group flex items-center justify-between border-b border-white/20 py-5 transition-colors duration-300 hover:bg-white/10">
                    <div className="flex items-center gap-5">
                      <span className="font-display text-[11px] font-medium text-white/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl font-light uppercase tracking-tight text-white lg:text-2xl">
                        {s}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
