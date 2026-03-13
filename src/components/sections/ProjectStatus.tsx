"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { SiteContent } from "@/lib/site-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProjectStatusProps = {
  ui: SiteContent["ui"];
  content: SiteContent["projectStatus"];
};

export default function ProjectStatus({ ui, content }: ProjectStatusProps) {
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
      className="relative w-full overflow-hidden pt-24"
      style={{ zIndex: 30, paddingBottom: "100px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/infrastructure-bg.png')" }}
      />
      <div className="absolute inset-0 bg-white/85" />

      <div ref={contentRef} className="relative z-10 flex flex-col items-center section-padding">
        <div className="w-full text-center">
          <div className="animate-item" style={{ marginTop: "100px" }}>
            <span className="inline-block rounded-sm border border-forest/30 px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-forest">
              {ui.sectionLabel} 10
            </span>
          </div>

          <h2 className="animate-item mt-8 text-4xl font-light text-graphite md:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          {content.paragraphs.map((paragraph, index) => (
            <div
              key={paragraph}
              className="animate-item"
              style={{ marginTop: index === 0 ? "80px" : "60px" }}
            >
              <p
                className="text-xl font-semibold leading-relaxed text-gray-700 md:text-2xl"
                style={{ textAlign: "center", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}
              >
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
