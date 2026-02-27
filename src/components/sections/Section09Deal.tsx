"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import SectionHeading from "@/components/ui/SectionHeading";

const ITEMS = [
  "Приобретение стратегическим соинвестором 49 % доли в уставном капитале ООО «Сатурн-Агро» за 3 млрд рублей;",
  "возможность привлекать кредиты и проектное финансирование из КНР;",
  "совместные бренды и долгосрочные экспортные контракты;",
  "выход на крупнейший мировой рынок — Китай;",
  "совместный выход на рынки стран «Пояса и пути», дружественных России и КНР;",
  "формат: долгосрочное партнёрство.",
];

export default function Section09Deal() {
  const ref = useScrollFadeIn({ stagger: 0.08 });

  return (
    <section id="section-9" className="py-24 md:py-32 section-padding bg-graphite">
      <SectionHeading
        label="Раздел 9"
        title="Форма сотрудничества"
        subtitle=""
        light
      />

      <div ref={ref} className="max-w-4xl mx-auto">
        <ul className="space-y-4 mb-10">
          {ITEMS.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-300 text-lg leading-relaxed"
            >
              <span className="text-gold">–</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Такая структура взаимодействия обеспечивает баланс интересов сторон и стимулирует совместную реализацию стратегии развития предприятия.
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-white">49 %</div>
            <p className="text-gold text-sm mt-1">доля соинвестора</p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-white">3 млрд ₽</div>
            <p className="text-gold text-sm mt-1">сумма сделки</p>
          </div>
        </div>
      </div>
    </section>
  );
}
