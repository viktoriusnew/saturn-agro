"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { SiteContent } from "@/lib/site-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type InfrastructureProps = {
  ui: SiteContent["ui"];
  content: SiteContent["infrastructure"];
};

export default function Infrastructure({ ui, content }: InfrastructureProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll(".animate-item");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-card-section
      className="relative w-full overflow-hidden pt-24"
      style={{ zIndex: 40, paddingBottom: "100px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/infrastructure-bg.png')" }}
      />
      <div className="absolute inset-0 bg-white/85" />

      <div ref={contentRef} className="relative z-10 section-padding">
        <div className="w-full">
          <div className="animate-item text-center" style={{ marginTop: "100px" }}>
            <span className="inline-block rounded-sm border border-forest/30 px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-forest">
              {ui.sectionLabel} 5
            </span>
          </div>

          <h2
            className="animate-item text-center text-4xl font-light text-graphite md:text-5xl lg:text-6xl"
            style={{ marginTop: "18px" }}
          >
            {content.title}
          </h2>

          <p
            className="animate-item text-center text-xl font-semibold text-gray-600 md:text-2xl"
            style={{ marginTop: "24px", marginBottom: "15px" }}
          >
            {content.subtitle}
          </p>

          <div
            className="animate-item grid grid-cols-2 gap-3 md:grid-cols-4"
            style={{ marginBottom: "40px" }}
          >
            {content.items.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3">
                <div className="h-2 w-2 flex-shrink-0 rounded-full bg-forest" />
                <span className="text-[20px] font-semibold text-gray-700 md:text-[20px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div
            className="animate-item rounded-2xl bg-gradient-to-br from-forest to-forest-light p-8 text-center text-white shadow-2xl"
            style={{ maxWidth: "500px", margin: "0 auto 24px" }}
          >
            <p className="mb-2 text-lg text-white/80">{content.totalLabel}</p>
            <div className="mb-4 text-6xl font-bold md:text-7xl">{content.totalValue}</div>
            <div className="text-3xl font-light text-white">{content.totalUnit}</div>
          </div>

          <h3
            className="animate-item text-center text-xl font-medium text-graphite md:text-2xl"
            style={{ marginBottom: "20px" }}
          >
            {content.engineeringTitle}
          </h3>

          <div className="animate-item grid grid-cols-1 gap-4 md:grid-cols-3">
            {content.engineeringCards.map((card) => (
              <div
                key={card.name}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="h-32 overflow-hidden">
                  <img src={card.image} alt={card.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <span className="text-[15px] font-medium text-graphite md:text-[17px]">
                    {card.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
