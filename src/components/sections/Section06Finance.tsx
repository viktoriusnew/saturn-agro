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

      <div ref={ref} className="max-w-4xl mx-auto mb-12">
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

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-graphite-light/50 rounded-sm border border-white/10 p-8">
            <span className="text-sm text-gold uppercase tracking-wider">Годовая выручка</span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-light text-white">1,25–1,45</span>
              <span className="text-xl text-gold">млрд ₽</span>
            </div>
            <div className="mt-6 space-y-3">
              {[
                { year: "Базовый", value: 72 },
                { year: "Средний", value: 84 },
                { year: "Высокий", value: 100 },
              ].map((bar) => (
                <div key={bar.year} className="flex items-center gap-3">
                  <span className="text-white/40 text-xs w-16">{bar.year}</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-forest to-forest-light rounded-full"
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-graphite-light/50 rounded-sm border border-white/10 p-8">
            <span className="text-sm text-gold uppercase tracking-wider">EBITDA</span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-light text-white">420–600</span>
              <span className="text-xl text-gold">млн ₽</span>
            </div>
            <div className="mt-8 space-y-3">
              {[
                { label: "Маржа EBITDA", value: "~33%" },
                { label: "Операционный CF", value: "Стабильный" },
                { label: "Деятельность", value: "С 2008 г." },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-white/40 text-sm">{item.label}</span>
                  <span className="text-white font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-graphite-light/30 rounded-sm border border-white/5 px-6 py-4">
          <p className="text-white/30 text-xs leading-relaxed">
            * Данные представлены в обобщённом виде за нормализованный период.
            Детальная финансовая информация доступна в dataroom после подписания NDA.
          </p>
        </div>
      </div>
    </section>
  );
}
