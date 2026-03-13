"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import LocaleSwitcher from "@/components/ui/LocaleSwitcher";
import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "@/lib/site-content";

type HeroProps = {
  locale: Locale;
  ui: SiteContent["ui"];
  content: SiteContent["hero"];
};

export default function Hero({ locale, ui, content }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      containerRef.current.querySelector(".hero-label"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    )
      .fromTo(
        containerRef.current.querySelector(".hero-title"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        containerRef.current.querySelector(".hero-subtitle"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5",
      )
      .fromTo(
        containerRef.current.querySelector(".hero-stats"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      );
  }, []);

  return (
    <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden">
      <LocaleSwitcher locale={locale} ui={ui} />

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-r from-graphite/85 via-graphite/60 to-graphite/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-graphite/30" />

      <div ref={containerRef} className="relative z-10 w-full section-padding">
        <div className="max-w-6xl">
          <div className="hero-label">
            <span className="inline-block rounded-sm border border-gold/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gold md:text-sm">
              {content.label}
            </span>
          </div>

          <h1 className="hero-title mt-8 text-4xl font-light leading-[1.15] tracking-tight text-white md:mt-10 md:text-5xl lg:text-6xl xl:text-7xl">
            {content.title[0]}
            <br />
            <span className="font-medium">{content.title[1]}</span>
          </h1>

          <p className="hero-subtitle mt-6 max-w-4xl text-base leading-relaxed text-white/70 md:mt-8 md:text-lg lg:text-xl">
            {content.subtitle}
          </p>

          <div className="hero-stats mt-10 flex flex-wrap gap-x-12 gap-y-6 lg:gap-x-16">
            {content.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                  {stat.value}{" "}
                  <span className="text-sm font-normal text-gold md:text-base">{stat.unit}</span>
                </span>
                <span className="mt-1.5 text-xs tracking-wide text-white/50 md:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
          <div className="h-2.5 w-1 animate-bounce rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
