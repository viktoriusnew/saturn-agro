"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectStatus() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    const items = sectionRef.current.querySelectorAll(".timeline-item");
    gsap.fromTo(
      items,
      { y: 30 },
      {
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 section-padding bg-white">
      <SectionHeading
        label="Статус проекта"
        title="Дорожная карта"
        subtitle="Действующее предприятие, готовое к следующему этапу стратегического развития"
        center
      />

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div
            ref={lineRef}
            className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-forest via-gold to-gold/30 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TIMELINE.map((item, i) => (
              <div key={item.months} className="timeline-item relative">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-cream border-2 border-gold/30 mb-6 relative z-10">
                  <span className="text-sm font-bold text-gold">{item.months}</span>
                </div>
                <div className="md:hidden flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream border-2 border-gold/30 text-xs font-bold text-gold">
                    {item.months}
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">мес.</span>
                </div>
                <h4 className="text-base font-semibold text-graphite mb-1">{item.label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                {i === 0 && (
                  <span className="inline-block mt-3 text-xs bg-forest/10 text-forest px-3 py-1 rounded-sm font-medium">
                    Текущий этап
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
