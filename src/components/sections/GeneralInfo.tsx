"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { SiteContent } from "@/lib/site-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type GeneralInfoProps = {
  ui: SiteContent["ui"];
  content: SiteContent["generalInfo"];
};

export default function GeneralInfo({ ui, content }: GeneralInfoProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll(".animate-item");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
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
      className="relative overflow-hidden pt-32"
      style={{ paddingBottom: "100px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/section1-map-bg.png')" }}
      />
      <div className="absolute inset-0 bg-white/40" />

      <div ref={contentRef} className="relative z-10 section-padding">
        <div className="max-w-6xl">
          <div className="animate-item" style={{ marginTop: "100px" }}>
            <span className="inline-block rounded-sm border border-forest/30 px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-forest">
              {ui.sectionLabel} 1
            </span>
          </div>

          <h2
            className="animate-item mt-8 text-4xl font-light leading-[1.1] tracking-tight text-graphite md:text-5xl lg:text-6xl"
            style={{ marginBottom: "60px" }}
          >
            {content.title}
          </h2>

          <div
            className="animate-item max-w-4xl"
            style={{ display: "flex", flexDirection: "column", gap: "40px", paddingBottom: "60px" }}
          >
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg font-bold leading-relaxed text-black md:text-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
