"use client";

import { useCountUp, useScrollFadeIn } from "@/hooks/useGsap";
import SectionHeading from "@/components/ui/SectionHeading";

export default function LandBank() {
  const ownedRef = useCountUp(9502, 2);
  const leasedRef = useCountUp(12501, 2);
  const fadeRef = useScrollFadeIn();

  const totalHa = "22 002,96";
  const ownedPercent = Math.round((9502 / 22002.96) * 100);
  const leasedPercent = 100 - ownedPercent;

  return (
    <section id="land" className="py-24 md:py-32 section-padding bg-cream">
      <SectionHeading
        label="Земельный банк"
        title="Консолидированный массив"
        subtitle="Управляемый земельный банк обеспечивает масштаб и устойчивость производственного процесса"
      />

      <div ref={fadeRef} className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-baseline gap-3">
            <span className="text-6xl md:text-8xl font-light text-graphite tracking-tight">
              {totalHa}
            </span>
            <span className="text-2xl md:text-3xl text-gold font-medium">га</span>
          </div>
          <p className="mt-3 text-gray-500">Общая площадь сельскохозяйственных угодий</p>
        </div>

        <div className="relative mb-12">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-forest rounded-l-full transition-all duration-1000"
              style={{ width: `${ownedPercent}%` }}
            />
            <div
              className="h-full bg-gold rounded-r-full transition-all duration-1000"
              style={{ width: `${leasedPercent}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-sm border border-gray-200/60 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-forest" />
              <span className="text-sm text-gray-400 uppercase tracking-wider">В собственности</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span ref={ownedRef} className="text-4xl font-light text-graphite">0</span>
              <span className="text-gold text-lg">га</span>
            </div>
            <p className="mt-3 text-gray-500 text-sm">~{ownedPercent}% земельного банка</p>
          </div>

          <div className="bg-white rounded-sm border border-gray-200/60 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-gold" />
              <span className="text-sm text-gray-400 uppercase tracking-wider">Долгосрочная аренда</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span ref={leasedRef} className="text-4xl font-light text-graphite">0</span>
              <span className="text-gold text-lg">га</span>
            </div>
            <p className="mt-3 text-gray-500 text-sm">Срок свыше 15 лет с правом выкупа</p>
          </div>
        </div>
      </div>
    </section>
  );
}
