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

export default function ProjectStatus({ ui: _ui, content }: ProjectStatusProps) {
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
      style={{ zIndex: 30, paddingBottom: "100px", minHeight: "115vh" }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/section10-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-white/85" />

      <div ref={contentRef} className="relative z-10 flex flex-col items-center section-padding">
        <div className="w-full text-center">
          <h2
            className="animate-item text-4xl font-light text-graphite md:text-5xl lg:text-6xl"
            style={{ marginTop: "100px" }}
          >
            {content.title}
          </h2>

          {content.paragraphs.map((paragraph, index) => (
            <div
              key={paragraph}
              className="animate-item"
              style={{ marginTop: index === 0 ? "130px" : "90px" }}
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
