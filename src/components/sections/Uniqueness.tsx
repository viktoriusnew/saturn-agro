"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const uniquenessPoints = [
  "земельный банк более 22 000 га",
  "расположение в наиболее плодородной зоне региона",
  "прямой доступ к водным ресурсам реки Дон",
  "действующая производственная инфраструктура",
  "устойчивые финансовые показатели",
  "потенциал масштабного орошения",
  "возможность создания комплекса молочного животноводства от 2 000 голов",
  "перспективы глубокой переработки сельскохозяйственной продукции",
];

export default function Uniqueness() {
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
      className="relative h-screen w-full overflow-hidden bg-cream"
      style={{ zIndex: 70 }}
    >
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center section-padding"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="animate-item text-center">
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 8
            </span>
          </div>

          <h2 className="animate-item text-center text-4xl md:text-5xl lg:text-6xl font-light text-graphite" style={{ marginTop: '40px', marginBottom: '40px' }}>
            УНИКАЛЬНОСТЬ ПРЕДЛОЖЕНИЯ
            <br />
            <span className="font-medium">НА РЫНКЕ</span>
          </h2>

          <div className="animate-item bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed" style={{ marginBottom: '20px' }}>
              В настоящее время предложение ООО «Сатурн-Агро» сочетает в себе характеристики, крайне редко представленные в рамках одного действующего предприятия:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4" style={{ marginBottom: '20px' }}>
              {uniquenessPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-forest/5 rounded-lg p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-item bg-gradient-to-r from-forest to-forest-light rounded-2xl text-white" style={{ padding: '15px', marginTop: '20px' }}>
            <p className="text-lg leading-relaxed">
              Одновременное наличие масштабного земельного банка, водного ресурса и действующей инфраструктуры формирует актив стратегического уровня. Подобная комбинация факторов на рынке агробизнеса встречается ограниченно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
