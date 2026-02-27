"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Deal() {
  const ref = useScrollFadeIn();

  return (
    <section id="deal" className="py-24 md:py-32 section-padding bg-graphite relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center">
        <SectionHeading
          label="Инвестиционное предложение"
          title="Структура сделки"
          light
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-graphite-light/50 rounded-sm border border-white/10 p-8">
            <span className="text-5xl md:text-6xl font-light text-white">49</span>
            <span className="text-2xl text-gold ml-1">%</span>
            <p className="mt-3 text-white/50 text-sm">Доля в уставном капитале</p>
          </div>

          <div className="bg-graphite-light/50 rounded-sm border border-gold/20 p-8">
            <span className="text-5xl md:text-6xl font-light text-white">3</span>
            <span className="text-xl text-gold ml-2">млрд ₽</span>
            <p className="mt-3 text-white/50 text-sm">Объём инвестиций</p>
          </div>

          <div className="bg-graphite-light/50 rounded-sm border border-white/10 p-8">
            <div className="text-3xl text-white mb-2">∞</div>
            <p className="mt-3 text-white/50 text-sm">Долгосрочное стратегическое партнёрство</p>
          </div>
        </div>

        <div className="bg-graphite-light/30 rounded-sm border border-white/5 p-8 mb-12 text-left">
          <h4 className="text-gold text-sm font-medium uppercase tracking-wider mb-4">
            Направления инвестиций
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Внедрение систем промышленного орошения",
              "Строительство молочно-товарной фермы",
              "Создание молокоперерабатывающего производства",
              "Завод глубокой переработки сельхозпродукции",
              "Привлечение проектного финансирования из КНР",
              "Выход на рынки стран «Пояса и пути»",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg" href="#contacts" pulse>
            Запросить NDA
          </Button>
          <Button variant="outline" size="lg" href="#contacts">
            Начать Due Diligence
          </Button>
        </div>
      </div>
    </section>
  );
}
