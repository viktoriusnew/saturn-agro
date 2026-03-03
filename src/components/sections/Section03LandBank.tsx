"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import SectionHeading from "@/components/ui/SectionHeading";

const totalHa = "22 002,96";

export default function Section03LandBank() {
  const fadeRef = useScrollFadeIn();

  return (
    <section id="section-3" className="py-24 md:py-32 section-padding bg-cream">
      <SectionHeading
        label="Раздел 3"
        title="Земельный банк"
        subtitle=""
        center
      />

      <div ref={fadeRef} className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-graphite text-lg leading-relaxed mb-6">
            Общая площадь сельскохозяйственных угодий — 22 002,96 га.
          </p>
          <p className="text-graphite text-lg leading-relaxed mb-2">
            Структура владения:
          </p>
          <ul className="list-disc list-inside text-graphite text-lg leading-relaxed mb-6">
            <li>собственность компании: ~9 502 га;</li>
            <li>долгосрочная аренда: ~12 500,96 га, долгосрочная аренда сроком свыше 15 лет с преимущественным правом выкупа.</li>
          </ul>
          <p className="text-graphite text-lg leading-relaxed">
            Консолидированный массив обеспечивает управляемость, масштаб и устойчивость производственного процесса.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-baseline gap-3">
            <span className="text-6xl md:text-8xl font-light text-graphite tracking-tight">
              {totalHa}
            </span>
            <span className="text-2xl md:text-3xl text-gold font-medium">га</span>
          </div>
        </div>
      </div>
    </section>
  );
}
