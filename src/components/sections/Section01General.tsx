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


      </div>
    </section>
  );
}
