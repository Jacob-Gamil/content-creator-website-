import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const categories = [
  {
    num: "01",
    label: "Video",
    href: "https://www.instagram.com/reel/DbGRWt5oiRa/?exln=dTJhN3J4NGd0a2Fs",
  },
  {
    num: "02",
    label: "Education",
    href: "https://www.instagram.com/reel/DcGo-LvIPjT/?exln=NHpnMThpcXJramw5",
  },
  {
    num: "03",
    label: "Behind the views",
    href: "https://www.instagram.com/reel/DZ-LwIRISXx/?cplk=MW40eDg1azQ4OGQxYQ==",
  },
  {
    num: "04",
    label: "Lifestyle",
    href: "https://www.instagram.com/reel/DbnuNcGockQ/?xtok=ZGIzdzlocjJoZTI5",
  },
  {
    num: "05",
    label: "Storytelling",
    href: "https://www.instagram.com/reel/DdJwtCvoXzC/?exln=ZHViN3ZvYzJubGls",
  },
];

export default function Categories() {
  return (
    <section id="content" className="relative bg-brand-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div>
          <SectionLabel index="04" label="Content Categories" />
          <h2 className="mt-6 max-w-3xl font-display text-[10vw] font-light uppercase leading-[0.85] tracking-mega text-white sm:text-[7vw] lg:text-[5vw]">
            What I
            <br />
            <span className="text-brand-orange">Create.</span>
          </h2>
        </div>

        <div className="mt-16 border-t border-white/10">
          {categories.map((c, i) => (
            <div key={i}>
              <a
                href={c.href}
                target="_blank"
                className="group relative flex items-center justify-between border-b border-white/10 py-8 transition-colors duration-500 hover:bg-brand-orange lg:py-12"
              >
                <div className="flex items-baseline gap-6 lg:gap-12">
                  <span className="font-display text-sm font-medium text-brand-orange transition-colors duration-500 group-hover:text-white">
                    {c.num}
                  </span>
                  <h3 className="font-display text-[12vw] font-light uppercase leading-none tracking-tight text-white transition-transform duration-500 group-hover:translate-x-4 sm:text-[8vw] lg:text-[6vw]">
                    {c.label}
                  </h3>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:border-white lg:h-16 lg:w-16">
                  <ArrowUpRight size={22} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
