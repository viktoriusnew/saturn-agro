"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Section10Status() {
  const ref = useScrollFadeIn();

  return (
    <section id="section-10" className="py-24 md:py-32 section-padding bg-cream">
      <SectionHeading
        label="Раздел 10"
        title="Статус проекта"
        subtitle=""
        center
      />

      <div ref={ref} className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-graphite text-lg leading-relaxed">
          Предприятие находится в стадии действующей операционной деятельности и обладает всей необходимой базой для перехода к следующему этапу стратегического развития.
        </p>
        <p className="text-graphite text-lg leading-relaxed">
          Возможен переход к следующему этапу взаимодействия: проведение детальных переговоров, структурирование сделки и реализация совместной дорожной карты развития проекта.
        </p>
      </div>
    </section>
  );
}
