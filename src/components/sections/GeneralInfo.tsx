"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GeneralInfo() {
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
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 overflow-hidden"
      style={{ paddingBottom: "100px" }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/section1-map-bg.png')",
        }}
      />
      
      <div className="absolute inset-0 bg-white/40" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 section-padding"
      >
        <div className="max-w-6xl">
          <div className="animate-item" style={{ marginTop: "100px" }}>
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 1
            </span>
          </div>

          <h2 className="animate-item mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-graphite leading-[1.1] tracking-tight" style={{ marginBottom: '60px' }}>
            Общая характеристика проекта
          </h2>

          <div className="animate-item max-w-4xl" style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingBottom: '60px' }}>
            <p className="text-lg md:text-xl text-black leading-relaxed font-bold">
              ООО «Сатурн-Агро» — действующее сельскохозяйственное предприятие, осуществляющее промышленное растениеводство в северной части Волгоградской области Российской Федерации.
            </p>

            <p className="text-lg md:text-xl text-black leading-relaxed font-bold">
              Компания ведёт операционную деятельность с 2008 года и обладает консолидированным земельным банком, развитой производственной инфраструктурой и устойчивыми финансовыми показателями. В течение всех лет ведётся анализ результатов производства сельскохозяйственной продукции, зафиксирован устойчивый рост качества, количества производимой продукции
            </p>

            <p className="text-lg md:text-xl text-black leading-relaxed font-bold">
              Проект рассматривается как стратегический агропромышленный актив с потенциалом трансформации в агрокластер полного цикла.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
