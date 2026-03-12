"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Finance() {
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
      className="relative w-full overflow-hidden bg-cream pt-24"
      style={{ zIndex: 50, paddingBottom: "100px" }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-8"
        style={{ backgroundImage: "url('/images/grafic.png')" }}
      />

      <div
        ref={contentRef}
        className="relative z-10 section-padding"
      >
        <div className="w-full">
          <div className="animate-item text-center" style={{ marginTop: "100px" }}>
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 6
            </span>
          </div>

          <h2 className="animate-item text-center text-4xl md:text-5xl lg:text-6xl font-light text-graphite" style={{ marginTop: '30px' }}>
            Финансовые показатели
          </h2>

          <p className="animate-item text-center text-xl text-gray-600" style={{ marginTop: '15px' }}>
            Нормализованный период
          </p>

          <div className="animate-item grid md:grid-cols-3 gap-6" style={{ marginTop: '30px' }}>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center flex flex-col justify-center" style={{ minHeight: '320px' }}>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">Годовая выручка</div>
              <div className="text-5xl md:text-6xl font-bold text-forest mb-2">
                1,25–1,45
              </div>
              <div className="text-2xl text-gold font-medium">млрд рублей</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center flex flex-col justify-center" style={{ minHeight: '320px' }}>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">EBITDA</div>
              <div className="text-5xl md:text-6xl font-bold text-forest mb-2">
                420–600
              </div>
              <div className="text-2xl text-gold font-medium">млн рублей в год</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center flex flex-col justify-center" style={{ minHeight: '320px' }}>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">Денежный поток</div>
              <div className="text-4xl md:text-5xl font-bold text-forest mb-2">
                Устойчивый
              </div>
              <div className="text-2xl text-gold font-medium">операционный</div>
            </div>
          </div>

          <p className="animate-item text-center text-lg text-gray-700" style={{ marginTop: '15px' }}>
            Данные показатели подтверждают эффективность действующей операционной модели.
          </p>
        </div>
      </div>
    </section>
  );
}
