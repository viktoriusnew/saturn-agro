"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { SiteContent } from "@/lib/site-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type GeoAdvantageProps = {
  ui: SiteContent["ui"];
  content: SiteContent["geoAdvantage"];
};

export default function GeoAdvantage({ ui, content }: GeoAdvantageProps) {
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
        stagger: 0.15,
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
      style={{ zIndex: 10, paddingBottom: "100px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/section1-map-bg.png')",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-white/75" />

      <div ref={contentRef} className="relative z-10 section-padding">
        <div className="w-full text-center">
          <div className="animate-item" style={{ marginTop: "100px" }}>
            <span className="inline-block rounded-sm border border-forest/30 px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-forest">
              {ui.sectionLabel} 2
            </span>
          </div>

          <h2 className="animate-item mt-8 text-4xl font-light leading-[1.1] tracking-tight text-graphite md:text-5xl lg:text-6xl">
            {content.title[0]}
            {content.title[1] ? (
              <>
                <br />
                <span className="font-medium">{content.title[1]}</span>
              </>
            ) : null}
            {content.title[2] ? (
              <>
                <br />
                <span className="font-medium">{content.title[2]}</span>
              </>
            ) : null}
          </h2>

          <div
            className="animate-item grid gap-8 md:grid-cols-2 lg:gap-12"
            style={{ marginTop: "50px" }}
          >
            {content.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg bg-white/30 backdrop-blur-sm"
                style={{ padding: "48px" }}
              >
                <h3
                  className="text-2xl font-medium text-graphite lg:text-3xl"
                  style={{ marginBottom: "20px" }}
                >
                  {card.title}
                </h3>

                <div
                  className="space-y-4 text-left text-lg font-semibold leading-relaxed text-gray-700 lg:text-xl"
                  style={{ marginTop: "20px" }}
                >
                  <p>{card.lead}</p>
                  {card.bullets.map((bullet) => (
                    <p key={bullet}>
                      <span className="font-medium text-forest">•</span> {bullet}
                    </p>
                  ))}
                  {card.conclusion ? <p>{card.conclusion}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
