"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { SiteContent } from "@/lib/site-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type UniquenessProps = {
  ui: SiteContent["ui"];
  content: SiteContent["uniqueness"];
};

export default function Uniqueness({ ui: _ui, content }: UniquenessProps) {
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
      style={{ zIndex: 70, paddingBottom: "100px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/section8-bg.png')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-white/68" />

      <div ref={contentRef} className="relative z-10 section-padding">
        <div className="w-full">
          <h2
            className="animate-item text-center text-4xl font-light text-graphite md:text-5xl lg:text-6xl"
            style={{ marginTop: "100px", marginBottom: "40px" }}
          >
            {content.title[0]}
            {content.title[1] ? (
              <>
                <br />
                <span className="font-medium">{content.title[1]}</span>
              </>
            ) : null}
          </h2>

          <div className="animate-item rounded-2xl bg-white shadow-xl" style={{ padding: "20px" }}>
            <p
              className="text-[20px] font-semibold leading-relaxed text-gray-700"
              style={{ marginBottom: "30px" }}
            >
              {content.intro}
            </p>

            <div
              className="grid gap-4 md:grid-cols-2"
              style={{ marginTop: "10px", marginBottom: "20px" }}
            >
              {content.points.map((point, index) => (
                <div key={point} className="flex items-start gap-4 rounded-lg p-[26px]">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <span className="text-[19px] font-semibold leading-relaxed text-gray-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="animate-item rounded-2xl bg-gradient-to-r from-forest to-forest-light text-white"
            style={{ padding: "25px", marginTop: "20px" }}
          >
            <p className="text-[20px] font-semibold leading-relaxed">{content.conclusion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
