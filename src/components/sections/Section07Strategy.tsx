"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import SectionHeading from "@/components/ui/SectionHeading";

const CLUSTER_STEPS = [
  "растениеводство",
  "орошение",
  "комплекс молочного животноводства",
  "переработка молока",
  "глубокая переработка сельхозпродукции",
];

export default function Section07Strategy() {
  const ref = useScrollFadeIn({ stagger: 0.08 });

  return (
    <section id="section-7" className="py-24 md:py-32 section-padding bg-cream">
      <SectionHeading
        label="Раздел 7"
        title="Стратегия развития"
        subtitle=""
        center
      />

      <div ref={ref} className="max-w-4xl mx-auto space-y-14">
        <div>
          <h3 className="text-xl font-semibold text-graphite mb-4">
            7.1. Внедрение системы орошения
          </h3>
          <p className="text-graphite text-lg leading-relaxed mb-4">
            Благодаря расположению у реки Дон возможно внедрение систем промышленного орошения.
          </p>
          <p className="text-gold/90 text-sm font-medium mb-2">Ожидаемые эффекты:</p>
          <ul className="list-disc list-inside text-graphite leading-relaxed mb-4 space-y-1">
            <li>рост урожайности на 30–60 %;</li>
            <li>увеличение валового сбора;</li>
            <li>расширение линейки культур;</li>
            <li>переход к интенсивной модели земледелия.</li>
          </ul>
          <p className="text-graphite text-lg leading-relaxed">
            Орошение повышает капитализацию земельного банка и устойчивость бизнеса.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-graphite mb-4">
            7.2. Создание комплекса молочного животноводства
          </h3>
          <p className="text-graphite text-lg leading-relaxed mb-4">
            Предприятие обладает потенциалом размещения комплекса молочного животноводства (молочно-товарной фермы) мощностью от 2 000 голов крупного рогатого скота.
          </p>
          <p className="text-gold/90 text-sm font-medium mb-2">Преимущества интеграции:</p>
          <ul className="list-disc list-inside text-graphite leading-relaxed space-y-1">
            <li>использование собственной кормовой базы;</li>
            <li>диверсификация доходов;</li>
            <li>формирование стабильного денежного потока;</li>
            <li>снижение зависимости от волатильности зернового рынка.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-graphite mb-4">
            7.3. Переработка молока
          </h3>
          <p className="text-graphite text-lg leading-relaxed mb-4">
            Развитие молокоперерабатывающего направления позволит:
          </p>
          <ul className="list-disc list-inside text-graphite leading-relaxed space-y-1">
            <li>производить готовую молочную продукцию;</li>
            <li>увеличивать добавленную стоимость;</li>
            <li>формировать вертикально интегрированную модель.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-graphite mb-4">
            7.4. Возведение завода глубокой переработки сельхозпродукции
          </h3>
          <p className="text-graphite text-lg leading-relaxed mb-4">
            Строительство завода глубокой переработки сельскохозяйственной продукции создаст возможность:
          </p>
          <ul className="list-disc list-inside text-graphite leading-relaxed space-y-1">
            <li>выпускать продукты с высокой добавленной стоимостью на базе собственной сырьевой базы;</li>
            <li>расширять продуктовую линейку и рынки сбыта (внутренний рынок и экспорт);</li>
            <li>повышать устойчивость бизнеса за счёт переработки как растительного, так и животноводческого сырья.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-graphite mb-4">
            7.5. Формирование агрокластера полного цикла
          </h3>
          <p className="text-graphite text-lg leading-relaxed mb-4">
            Связка:
          </p>
          <ul className="list-disc list-inside text-graphite leading-relaxed mb-6 space-y-1">
            <li>растениеводство;</li>
            <li>орошение;</li>
            <li>комплекс молочного животноводства;</li>
            <li>переработка молока;</li>
            <li>глубокая переработка сельхозпродукции</li>
          </ul>
          <p className="text-graphite text-lg leading-relaxed mb-10">
            создаёт модель устойчивого агропромышленного кластера с высокой капитализацией и долгосрочным потенциалом роста.
          </p>

          <div className="bg-white rounded-sm border border-gray-200/60 p-8 text-center">
            <h4 className="text-lg font-medium text-graphite mb-6">
              Агрокластер полного цикла
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm">
              {CLUSTER_STEPS.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="px-3 py-2 bg-forest/5 text-forest rounded-sm border border-forest/10 font-medium capitalize">
                    {step}
                  </span>
                  {i < CLUSTER_STEPS.length - 1 && (
                    <svg className="w-4 h-4 text-gold flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6 3l5 5-5 5" />
                    </svg>
                  )}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-400 text-sm">
              Модель устойчивого агропромышленного кластера с высокой капитализацией и долгосрочным потенциалом роста
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
