"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Section06Finance() {
  const ref = useScrollFadeIn({ stagger: 0.15 });

  return (
    <section id="section-6" className="py-24 md:py-32 section-padding bg-graphite">
      <SectionHeading
        label="Раздел 6"
        title="Финансовые показатели"
        subtitle=""
        light
      />

      <div ref={ref} className="max-w-6xl mx-auto mb-12 px-4">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Нормализованный период:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed mb-6 space-y-2">
          <li>годовая выручка: 1,25–1,45 млрд рублей;</li>
          <li>EBITDA: 420–600 млн рублей в год;</li>
          <li>устойчивый операционный денежный поток.</li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed">
          Данные показатели подтверждают эффективность действующей операционной модели.
        </p>
      </div>


    </section>
  );
}
