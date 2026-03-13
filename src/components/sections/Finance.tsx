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

      <div ref={contentRef} className="relative z-10 section-padding">
        <div className="w-full">
          <div className="animate-item text-center" style={{ marginTop: "100px" }}>
            <span className="inline-block rounded-sm border border-forest/30 px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-forest">
              Раздел 6
            </span>
          </div>

          <h2
            className="animate-item text-center text-4xl font-light text-graphite md:text-5xl lg:text-6xl"
            style={{ marginTop: "30px" }}
          >
            Финансовые показатели
          </h2>

          <p
            className="animate-item text-center text-xl font-semibold text-gray-600"
            style={{ marginTop: "15px" }}
          >
            Нормализованный период
          </p>

          <div
            className="animate-item grid gap-6 md:grid-cols-3"
            style={{ marginTop: "30px" }}
          >
            <div
              className="flex flex-col justify-center rounded-2xl bg-white p-8 text-center shadow-xl"
              style={{ minHeight: "320px" }}
            >
              <div className="mb-4 text-2xl font-medium text-gold">
                Годовая выручка
              </div>
              <div className="mb-2 text-5xl font-bold text-forest md:text-6xl">
                1,25–1,45
              </div>
              <div className="text-2xl font-medium text-gold">млрд рублей</div>
            </div>

            <div
              className="flex flex-col justify-center rounded-2xl bg-white p-8 text-center shadow-xl"
              style={{ minHeight: "320px" }}
            >
              <div className="mb-4 text-2xl font-medium text-gold">EBITDA</div>
              <div className="mb-2 text-5xl font-bold text-forest md:text-6xl">
                420–600
              </div>
              <div className="text-2xl font-medium text-gold">млн рублей в год</div>
            </div>

            <div
              className="flex flex-col justify-center rounded-2xl bg-white p-8 text-center shadow-xl"
              style={{ minHeight: "320px" }}
            >
              <div className="mb-4 text-2xl font-medium text-gold">
                Денежный поток
              </div>
              <div className="mb-2 text-4xl font-bold text-forest md:text-5xl">
                Устойчивый
              </div>
              <div className="text-2xl font-medium text-gold">операционный</div>
            </div>
          </div>

          <p
            className="animate-item text-center text-lg font-semibold text-gray-700"
            style={{ marginTop: "35px" }}
          >
            Данные показатели подтверждают эффективность действующей
            операционной модели.
          </p>
        </div>
      </div>
    </section>
  );
}
