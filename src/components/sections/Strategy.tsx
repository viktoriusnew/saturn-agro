"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const strategies = [
  {
    title: "Внедрение системы орошения",
    description:
      "Благодаря расположению у реки Дон возможно внедрение систем промышленного орошения.",
    effects: [
      "рост урожайности на 30–60 %",
      "увеличение валового сбора",
      "расширение линейки культур",
      "переход к интенсивной модели земледелия",
    ],
    conclusion:
      "Орошение повышает капитализацию земельного банка и устойчивость бизнеса.",
  },
  {
    title: "Создание комплекса молочного животноводства",
    description:
      "Предприятие обладает потенциалом размещения комплекса молочного животноводства мощностью от 2 000 голов крупного рогатого скота.",
    effects: [
      "использование собственной кормовой базы",
      "диверсификация доходов",
      "формирование стабильного денежного потока",
      "снижение зависимости от волатильности зернового рынка",
    ],
  },
  {
    title: "Переработка молока",
    description:
      "Развитие молокоперерабатывающего направления позволит:",
    effects: [
      "производить готовую молочную продукцию",
      "увеличивать добавленную стоимость",
      "формировать вертикально интегрированную модель",
    ],
  },
  {
    title: "Возведение завода глубокой переработки сельхозпродукции",
    description:
      "Строительство завода глубокой переработки сельскохозяйственной продукции создаст возможность:",
    effects: [
      "выпускать продукты с высокой добавленной стоимостью",
      "расширять продуктовую линейку и рынки сбыта",
      "повышать устойчивость бизнеса",
    ],
  },
  {
    title: "Формирование агрокластера полного цикла",
    description:
      "Связка растениеводства, орошения, комплекса молочного животноводства, переработки молока и глубокой переработки сельхозпродукции создаёт модель устойчивого агропромышленного кластера с высокой капитализацией и долгосрочным потенциалом роста.",
    effects: [],
  },
];

export default function Strategy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll(".animate-item");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-card-section
      className="relative w-full overflow-hidden pt-24"
      style={{ zIndex: 60, paddingBottom: "100px" }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/agriculture.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-white/75" />

      <div ref={contentRef} className="relative z-10 section-padding py-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="animate-item text-center" style={{ marginTop: "100px", marginBottom: "24px" }}>
            <span className="inline-block rounded-sm border border-forest/30 px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-forest">
              Раздел 7
            </span>
          </div>

          <h2 className="animate-item text-center text-3xl font-light text-graphite md:text-4xl lg:text-5xl">
            Стратегия развития
          </h2>

          <div className="animate-item" style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "40px" }}>
            {strategies.map((strategy) => (
              <article
                key={strategy.title}
                className="rounded-2xl bg-white/45 shadow-lg backdrop-blur-sm"
                style={{ padding: "10px" }}
              >
                <div
                  className="grid lg:grid-cols-[minmax(280px,340px)_1fr] lg:items-start"
                  style={{ columnGap: "32px", rowGap: "20px" }}
                >
                  <div style={{ padding: "10px" }}>
                    <h3 className="text-2xl font-semibold leading-tight text-graphite md:text-[30px]">
                      {strategy.title}
                    </h3>
                  </div>

                  <div
                    className="space-y-4 text-[19px] font-semibold leading-relaxed text-gray-700 md:text-[20px]"
                    style={{ padding: "10px" }}
                  >
                    <p>{strategy.description}</p>

                    {strategy.effects.length > 0 && (
                      <div className="space-y-3">
                        {strategy.effects.map((effect) => (
                          <div
                            key={effect}
                            className="grid items-start"
                            style={{ gridTemplateColumns: "14px 1fr", columnGap: "12px" }}
                          >
                            <div
                              className="h-2.5 w-2.5 rounded-full bg-forest"
                              style={{ marginTop: "10px" }}
                            />
                            <span>{effect}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {strategy.conclusion && (
                      <p className="border-t border-gray-200 pt-4">
                        {strategy.conclusion}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
