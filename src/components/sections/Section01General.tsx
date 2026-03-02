"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Section01General() {
  const textBlockRef = useRef<HTMLDivElement>(null);
  const infographicsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textBlockRef.current) return;
    const children = Array.from(textBlockRef.current.children);

    gsap.set(children, { y: 30 });

    const tl = gsap.timeline();
    children.forEach((child, i) => {
      tl.to(child, { y: 0, duration: 1, ease: "power2.out" }, i * 0.3);
    });

    ScrollTrigger.create({
      trigger: textBlockRef.current,
      start: "top 85%",
      end: "bottom 50%",
      animation: tl,
      scrub: 1,
    });

    // Анимация инфографики
    if (infographicsRef.current) {
      const points = infographicsRef.current.querySelectorAll('.infographic-point');
      gsap.fromTo(
        points,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: infographicsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="section-1" className="py-24 md:py-32 bg-cream" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
      <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
        <SectionHeading
          label="Раздел 1"
          title="Общая характеристика проекта"
          subtitle=""
          center
        />

        {/* Текст по абзацам */}
        <div ref={textBlockRef} style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "2rem", paddingBottom: "2rem" }}>
          <p className="text-graphite text-lg leading-relaxed">
            ООО «Сатурн-Агро» — действующее сельскохозяйственное предприятие, осуществляющее промышленное растениеводство в северной части Волгоградской области Российской Федерации.
          </p>
          <p className="text-graphite text-lg leading-relaxed">
            Компания ведёт операционную деятельность с 2008 года и обладает консолидированным земельным банком, развитой производственной инфраструктурой и устойчивыми финансовыми показателями. В течение всех лет ведётся анализ результатов производства сельскохозяйственной продукции, зафиксирован устойчивый прирост как качества, так и объёмов.
          </p>
          <p className="text-graphite text-lg leading-relaxed">
            Проект рассматривается как стратегический агропромышленный актив с потенциалом трансформации в агрокластер полного цикла.
          </p>
        </div>

        {/* Инфографика — Путь развития */}
        <div ref={infographicsRef} className="mt-16 mb-8">
          <div className="relative">
            {/* Линия пути */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-forest/30 via-gold/50 to-forest/30 transform -translate-y-1/2 rounded-full"></div>
            
            {/* Точки на пути */}
            <div className="relative grid grid-cols-4 gap-4">
              
              {/* 2008 - Старт */}
              <div className="infographic-point flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-forest/10 border-2 border-forest flex items-center justify-center mb-4 relative z-10 bg-cream">
                  <span className="text-forest font-bold text-sm">2008</span>
                </div>
                <div className="text-center">
                  <p className="text-graphite font-semibold text-sm mb-1">Старт</p>
                  <p className="text-gray-500 text-xs">Основание компании</p>
                </div>
              </div>

              {/* 2015 - Рост */}
              <div className="infographic-point flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4 relative z-10 bg-cream">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-graphite font-semibold text-sm mb-1">Рост масштаба</p>
                  <p className="text-gray-500 text-xs">Расширение земельного банка</p>
                </div>
              </div>

              {/* Сегодня - Факты */}
              <div className="infographic-point flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-forest/20 border-3 border-forest flex items-center justify-center mb-4 relative z-10 bg-cream shadow-lg">
                  <div className="text-center">
                    <span className="text-forest font-bold text-lg block leading-none">16+</span>
                    <span className="text-forest text-xs">лет</span>
                  </div>
                </div>
                <div className="text-center bg-white/50 rounded-lg p-3 border border-gray-200/60">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-center">
                      <span className="text-gold font-bold text-sm block">22 002</span>
                      <span className="text-gray-500">га земли</span>
                    </div>
                    <div className="text-center">
                      <span className="text-forest font-bold text-sm block">28 000</span>
                      <span className="text-gray-500">м² объектов</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Будущее - Агрокластер */}
              <div className="infographic-point flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-forest/20 border-2 border-gold flex items-center justify-center mb-4 relative z-10 bg-cream">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-graphite font-semibold text-sm mb-1">Агрокластер</p>
                  <p className="text-gold text-xs font-medium">Полный цикл →</p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Подпись */}
          <p className="text-center text-gray-500 text-sm mt-8 italic">
            Путь от основания в 2008 году до стратегического агропромышленного актива сегодня
          </p>
        </div>
      </div>
    </section>
  );
}
