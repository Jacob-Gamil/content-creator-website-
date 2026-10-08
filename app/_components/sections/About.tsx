"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "../ui/SectionLabel";

const stats = [
  { value: "754", label: "Videos", icon: "+" },
  { value: "27", label: "Views", icon: "M+" },
  { value: "175", label: "Followers", icon: "K+" },
  { value: "2", label: "Years Creating", icon: "+" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-brand-black py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        {/* Section Label */}
        <div>
          <SectionLabel index="02" label="About the Creator" />
        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-18">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div>
              <h2 className="font-display text-[10vw] font-light uppercase leading-[0.85] tracking-mega text-white sm:text-[7vw] lg:text-[5.5vw]">
                We Turn
                <br />
                Ideas Into
                <br />
                <span className="text-brand-orange">Content.</span>
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="mt-10 max-w-xl font-body text-base leading-relaxed text-white/60">
                I’m Khaled Mashhour, a content creator and director. I write,
                shoot, and edit creative content. We create content for artists,
                places and brands. We also manage social media and content
                strategies. We turn ideas into engaging visual stories.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border-y border-white/10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="border-r border-white/10 px-4 py-8 last:border-r-0 sm:px-6">
                    <span className="block font-display text-4xl font-light tracking-tight text-white text-glow-orange lg:text-5xl">
                      {s.value}

                      <span className="ml-0.5 text-accent text-4xl">
                        {s.icon}
                      </span>
                    </span>

                    <span className="mt-2 block text-[11px] font-display uppercase tracking-[0.25em] text-white/40">
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="lg:col-span-6">
            <div className="relative isolate aspect-video w-full">
              {/* Orange glow behind the video */}
              <div className="absolute -inset-1 -z-10 rounded-xl bg-accent/50 blur-3xl" />

              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover"
                  // muted
                  playsInline
                  loop
                  preload="auto"
                >
                  <source src="/about-1.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-black via-transparent to-transparent" />

                {/* Video label */}
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
      </div>
    </section>
  );
}
