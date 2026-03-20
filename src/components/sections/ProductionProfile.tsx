"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { SiteContent } from "@/lib/site-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProductionProfileProps = {
  ui: SiteContent["ui"];
  content: SiteContent["productionProfile"];
};

export default function ProductionProfile({ ui: _ui, content }: ProductionProfileProps) {
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
        duration: 0.6,
        stagger: 0.08,
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
      style={{ zIndex: 30, minHeight: "100vh" }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/agriculture.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-white/55" />

      <div
        ref={contentRef}
        className="relative z-10 flex items-center section-padding py-12"
        style={{ minHeight: "100vh" }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2
            className="animate-item text-center text-4xl font-light text-graphite md:text-5xl lg:text-6xl"
            style={{ marginBottom: "12px" }}
          >
            {content.title}
          </h2>

          <p
            className="animate-item text-center text-xl font-semibold text-gray-600"
            style={{ marginBottom: "12px" }}
          >
            {content.subtitle}
          </p>

          <div
            className="animate-item grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            style={{ columnGap: "0px", rowGap: "20px", maxWidth: "1040px", marginLeft: "auto", marginRight: "auto" }}
          >
            {content.crops.map((crop) => (
              <div
                key={crop.name}
                className="group flex cursor-pointer flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-xl"
                style={{ width: "58%", marginLeft: "auto", marginRight: "auto" }}
              >
                <div className="mb-4 overflow-hidden rounded-lg" style={{ aspectRatio: "4/3", width: "45%" }}>
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-lg font-medium text-graphite">{crop.name}</span>
              </div>
            ))}
          </div>

          <p
            className="animate-item text-lg font-semibold leading-relaxed text-gray-700 md:text-xl"
            style={{
              marginTop: "24px",
              textAlign: "center",
              maxWidth: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {content.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
