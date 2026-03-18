"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { SiteContent } from "@/lib/site-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type LandBankProps = {
  ui: SiteContent["ui"];
  content: SiteContent["landBank"];
};

export default function LandBank({ ui: _ui, content }: LandBankProps) {
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
      style={{ zIndex: 20, paddingBottom: "100px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/landbank-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/80" />

      <div ref={contentRef} className="relative z-10 flex flex-col items-center section-padding">
        <div className="w-full max-w-6xl text-center">
          <h2
            className="animate-item text-4xl font-light text-graphite md:text-5xl lg:text-6xl"
            style={{ marginTop: "100px" }}
          >
            {content.title}
          </h2>

          <div className="animate-item mt-12">
            <p className="mb-6 text-xl text-gray-600 md:text-2xl">{content.intro}</p>
            <div className="text-[6.8rem] font-bold leading-none tracking-tighter text-forest md:text-[10.2rem] lg:text-[13.6rem]">
              {content.total}
              <span className="mt-8 block text-4xl font-medium tracking-wide text-forest md:text-6xl lg:text-8xl">
                {content.unit}
              </span>
            </div>
          </div>

          <p
            className="animate-item text-xl font-semibold leading-relaxed text-gray-700 md:text-[22px]"
            style={{
              marginTop: "100px",
              textAlign: "center",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {content.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
