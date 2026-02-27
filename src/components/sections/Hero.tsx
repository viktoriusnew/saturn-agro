"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      containerRef.current.querySelector(".hero-label"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        containerRef.current.querySelector(".hero-title"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        containerRef.current.querySelector(".hero-subtitle"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        containerRef.current.querySelector(".hero-label"),
        { y: 20 },
        { y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(
        containerRef.current.querySelector(".hero-title"),
        { y: 30 },
        { y: 0, duration: 1, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        containerRef.current.querySelector(".hero-subtitle"),
        { y: 20 },
        { y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        containerRef.current.querySelector(".hero-stats"),
        { y: 20 },
        { y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-r from-graphite/85 via-graphite/60 to-graphite/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-graphite/30" />

      <div ref={containerRef} className="relative z-10 section-padding w-full">
        <div className="max-w-6xl">
          <div className="hero-label">
            <span className="inline-block text-gold text-xs md:text-sm font-medium tracking-[0.25em] uppercase border border-gold/30 px-4 py-2 rounded-sm">
              Стратегическое инвестиционное предложение
            </span>
          </div>

          <h1 className="hero-title mt-8 md:mt-10 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.15] tracking-tight">
            Агропромышленный актив
            <br />
            <span className="font-medium">Сатурн-Агро</span>
          </h1>

          <p className="hero-subtitle mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-white/70 max-w-4xl leading-relaxed">
            Россия, Волгоградская область — действующее предприятие
            с&nbsp;потенциалом трансформации в&nbsp;агрокластер полного цикла
          </p>

          <div className="hero-stats mt-10 flex flex-wrap gap-x-12 lg:gap-x-16 gap-y-6">
            {[
              { value: "22 002,96", unit: "га", label: "земельный банк" },
              { value: "1,25–1,45", unit: "млрд ₽", label: "выручка" },
              { value: "420–600", unit: "млн ₽", label: "EBITDA" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                  {stat.value}{" "}
                  <span className="text-sm md:text-base font-normal text-gold">{stat.unit}</span>
                </span>
                <span className="text-xs md:text-sm text-white/50 mt-1.5 tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
