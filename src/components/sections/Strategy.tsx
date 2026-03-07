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
    description: "Благодаря расположению у реки Дон возможно внедрение систем промышленного орошения.",
    effects: [
      "рост урожайности на 30–60 %",
      "увеличение валового сбора",
      "расширение линейки культур",
      "переход к интенсивной модели земледелия",
    ],
    conclusion: "Орошение повышает капитализацию земельного банка и устойчивость бизнеса.",
  },
  {
    title: "Создание комплекса молочного животноводства",
    description: "Предприятие обладает потенциалом размещения комплекса молочного животноводства мощностью от 2 000 голов крупного рогатого скота.",
    effects: [
      "использование собственной кормовой базы",
      "диверсификация доходов",
      "формирование стабильного денежного потока",
      "снижение зависимости от волатильности зернового рынка",
    ],
  },
  {
    title: "Переработка молока",
    description: "Развитие молокоперерабатывающего направления позволит:",
    effects: [
      "производить готовую молочную продукцию",
      "увеличивать добавленную стоимость",
      "формировать вертикально интегрированную модель",
    ],
  },
  {
    title: "Возведение завода глубокой переработки сельхозпродукции",
    description: "Строительство завода глубокой переработки сельскохозяйственной продукции создаст возможность:",
    effects: [
      "выпускать продукты с высокой добавленной стоимостью",
      "расширять продуктовую линейку и рынки сбыта",
      "повышать устойчивость бизнеса",
    ],
  },
  {
    title: "Формирование агрокластера полного цикла",
    description: "Связка растениеводства, орошения, комплекса молочного животноводства, переработки молока и глубокой переработки сельхозпродукции создаёт модель устойчивого агропромышленного кластера с высокой капитализацией и долгосрочным потенциалом роста.",
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

  // Разделяем стратегии на две группы: первые 2 и остальные 3
  const firstRow = strategies.slice(0, 2);
  const secondRow = strategies.slice(2);

  return (
    <section
      ref={sectionRef}
      data-card-section
      className="relative h-screen w-full overflow-hidden"
      style={{ zIndex: 60 }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-white/75" />

      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center section-padding py-8 overflow-y-auto"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="animate-item text-center mb-6">
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 7
            </span>
          </div>

          <h2 className="animate-item text-center text-3xl md:text-4xl lg:text-5xl font-light text-graphite" style={{ marginBottom: '20px' }}>
            СТРАТЕГИЯ РАЗВИТИЯ
          </h2>

          {/* Первая строка - 2 карточки */}
          <div className="animate-item grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: 10 }}>
            {firstRow.map((strategy, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col" style={{ padding: "10px" }}
              >
                <h3 className="text-lg font-medium text-graphite leading-tight" style={{ marginLeft: '5px', marginBottom: '15px' }}>{strategy.title}</h3>
                
                <p className="text-base text-gray-600 mb-3" style={{ marginLeft: '5px' }}>{strategy.description}</p>
                
                {strategy.effects.length > 0 && (
                  <div className="flex-1">
                    <div className="space-y-2" style={{ marginLeft: '5px' }}>
                      {strategy.effects.map((effect, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-forest flex-shrink-0" />
                          <span className="text-base text-gray-700">{effect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {strategy.conclusion && (
                  <p className="text-base text-gray-700 mt-3 pt-3 border-t border-gray-200" style={{ marginLeft: '5px' }}>{strategy.conclusion}</p>
                )}
              </div>
            ))}
          </div>

          {/* Вторая строка - 3 карточки */}
          <div className="animate-item grid grid-cols-1 md:grid-cols-3 gap-4">
            {secondRow.map((strategy, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col" style={{ padding: "10px" }}
              >
                <h3 className="text-lg font-medium text-graphite leading-tight" style={{ marginLeft: '5px', marginBottom: '15px' }}>{strategy.title}</h3>
                
                <p className="text-base text-gray-600 mb-3" style={{ marginLeft: '5px' }}>{strategy.description}</p>
                
                {strategy.effects.length > 0 && (
                  <div className="flex-1">
                    <div className="space-y-2" style={{ marginLeft: '5px' }}>
                      {strategy.effects.map((effect, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-forest flex-shrink-0" />
                          <span className="text-base text-gray-700">{effect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

