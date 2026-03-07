"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LandBank() {
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
      data-card-section
      className="relative h-screen w-full overflow-hidden"
      style={{ zIndex: 20 }}
    >
      {/* Background Image with light overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/landbank-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-white/80" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center items-center section-padding"
      >
        <div className="w-full max-w-6xl text-center">
          <div className="animate-item">
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 3
            </span>
          </div>

          <h2 className="animate-item mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-graphite">
            ЗЕМЕЛЬНЫЙ БАНК
          </h2>

          <div className="animate-item mt-12">
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Общая площадь сельскохозяйственных угодий
            </p>
            <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-forest leading-none tracking-tighter">
              22 002,96
              <span className="text-4xl md:text-6xl lg:text-8xl font-medium block mt-8 text-forest">га</span>
            </div>
          </div>

          <p className="animate-item text-lg md:text-xl text-gray-700 leading-relaxed" style={{ marginTop: '100px', textAlign: 'center', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            Собственность компании ~9 502 га. Долгосрочная аренда ~12 500,96 га сроком свыше 15 лет с преимущественным правом выкупа. Консолидированный массив обеспечивает управляемость, масштаб и устойчивость производственного процесса.
          </p>
        </div>
      </div>
    </section>
  );
}
