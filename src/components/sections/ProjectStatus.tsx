"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectStatus() {
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
      }
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
      {/* Background Image with light overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/infrastructure-bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-white/85" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center section-padding"
      >
        <div className="w-full text-center">
          <div className="animate-item" style={{ marginTop: "100px" }}>
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 10
            </span>
          </div>

          <h2 className="animate-item mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-graphite">
            Статус проекта
          </h2>

          <div className="animate-item" style={{ marginTop: '80px' }}>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 leading-relaxed" style={{ textAlign: 'center', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
              Предприятие находится в стадии действующей операционной деятельности и обладает всей необходимой базой для перехода к следующему этапу стратегического развития.
            </p>
          </div>

          <div className="animate-item" style={{ marginTop: '60px' }}>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 leading-relaxed" style={{ textAlign: 'center', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
              Возможен переход к следующему этапу взаимодействия: проведение детальных переговоров, структурирование сделки и реализация совместной дорожной карты развития проекта.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
