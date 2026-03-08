"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cooperationPoints = [
  {
    text: "Приобретение стратегическим соинвестором 49 % доли в уставном капитале ООО «Сатурн-Агро» за 3 млрд рублей",
    highlight: false,
  },
  {
    text: "Возможность привлекать кредиты и проектное финансирование из КНР",
    highlight: false,
  },
  {
    text: "Совместные бренды и долгосрочные экспортные контракты",
    highlight: false,
  },
  {
    text: "Выход на крупнейший мировой рынок — Китай",
    highlight: false,
  },
  {
    text: "Совместный выход на рынки стран «Пояса и пути», дружественных России и КНР",
    highlight: false,
  },
  {
    text: "Формат: долгосрочное партнёрство",
    highlight: false,
  },
];

export default function Cooperation() {
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
        duration: 0.8,
        stagger: 0.12,
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
      className="relative h-screen w-full overflow-hidden bg-cream"
      style={{ zIndex: 80 }}
    >
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center section-padding"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="animate-item text-center">
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 9
            </span>
          </div>

          <h2 className="animate-item text-center text-4xl md:text-5xl lg:text-6xl font-light text-graphite" style={{ marginTop: '40px', marginBottom: '40px' }}>
            ФОРМА СОТРУДНИЧЕСТВА
          </h2>

          <div className="animate-item space-y-5">
            {cooperationPoints.map((point, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 ${
                  point.highlight 
                    ? "bg-gradient-to-r from-forest to-forest-light text-white shadow-xl" 
                    : "bg-white shadow-lg"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold ${
                    point.highlight 
                      ? "bg-white text-forest" 
                      : "bg-forest text-white"
                  }`}>
                    {index + 1}
                  </div>
                  <p className={`text-lg leading-relaxed ${
                    point.highlight ? "text-white" : "text-gray-700"
                  }`}>
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-item bg-gradient-to-r from-forest to-forest-light rounded-2xl text-white" style={{ padding: '15px', marginTop: '40px' }}>
            <p className="text-lg leading-relaxed">
              Такая структура взаимодействия обеспечивает баланс интересов сторон и стимулирует совместную реализацию стратегии развития предприятия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
