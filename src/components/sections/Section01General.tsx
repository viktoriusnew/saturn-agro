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

        {/* Фоновое изображение полей */}
        <div className="mt-12 relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80"
            alt="Аэрофотосъёмка сельскохозяйственных полей"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-graphite/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-sm md:text-base font-light opacity-90">22 002,96 га земельного банка</p>
            <p className="text-xs md:text-sm opacity-70 mt-1">Волгоградская область, северная зона</p>
          </div>
        </div>
      </div>
    </section>
  );
}
