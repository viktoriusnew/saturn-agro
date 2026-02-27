"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import SectionHeading from "@/components/ui/SectionHeading";

const POINTS = [
  "земельный банк более 22 000 га;",
  "расположение в наиболее плодородной зоне региона;",
  "прямой доступ к водным ресурсам реки Дон;",
  "действующая производственная инфраструктура;",
  "устойчивые финансовые показатели;",
  "потенциал масштабного орошения;",
  "возможность создания комплекса молочного животноводства от 2 000 голов;",
  "перспективы глубокой переработки сельскохозяйственной продукции.",
];

export default function Section08Uniqueness() {
  const ref = useScrollFadeIn({ stagger: 0.06 });

  return (
    <section id="section-8" className="py-24 md:py-32 section-padding bg-white">
      <SectionHeading
        label="Раздел 8"
        title="Уникальность предложения на рынке"
        subtitle=""
        center
      />

      <div ref={ref} className="max-w-4xl mx-auto">
        <p className="text-graphite text-lg leading-relaxed mb-8 text-center">
          В настоящее время предложение ООО «Сатурн-Агро» сочетает в себе характеристики, крайне редко представленные в рамках одного действующего предприятия:
        </p>

        <ul className="space-y-3 mb-10">
          {POINTS.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-graphite text-lg leading-relaxed"
            >
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-graphite text-lg leading-relaxed text-center">
          Одновременное наличие масштабного земельного банка, водного ресурса и действующей инфраструктуры формирует актив стратегического уровня. Подобная комбинация факторов на рынке агробизнеса встречается ограниченно.
        </p>
      </div>
    </section>
  );
}
