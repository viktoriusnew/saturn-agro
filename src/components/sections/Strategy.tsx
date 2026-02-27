"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import { GROWTH_STRATEGY } from "@/lib/constants";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Strategy() {
  const ref = useScrollFadeIn({ stagger: 0.15 });

  return (
    <section id="strategy" className="py-24 md:py-32 section-padding bg-cream">
      <SectionHeading
        label="Стратегия развития"
        title="Три направления роста"
        subtitle="Формирование агрокластера полного цикла — от растениеводства до переработки"
        center
      />

      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {GROWTH_STRATEGY.map((item, i) => (
          <Card key={item.id} className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full" />
            <span className="text-4xl mb-4 block">{item.icon}</span>
            <span className="text-sm text-gold font-medium tracking-wide uppercase">
              Направление {i + 1}
            </span>
            <h3 className="text-xl font-semibold text-graphite mt-2 mb-1">{item.title}</h3>
            <p className="text-forest font-medium text-sm mb-4">{item.subtitle}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-sm border border-gray-200/60 p-8 text-center">
          <h4 className="text-lg font-medium text-graphite mb-4">
            Агрокластер полного цикла
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {["Растениеводство", "Орошение", "Животноводство", "Переработка молока", "Глубокая переработка"].map(
              (step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-forest/5 text-forest rounded-sm border border-forest/10 font-medium">
                    {step}
                  </span>
                  {i < 4 && (
                    <svg className="w-4 h-4 text-gold" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6 3l5 5-5 5" />
                    </svg>
                  )}
                </span>
              )
            )}
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            Модель устойчивого агропромышленного кластера с высокой капитализацией
          </p>
        </div>
      </div>
    </section>
  );
}
