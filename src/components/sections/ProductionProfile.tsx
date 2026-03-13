"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const crops = [
  { name: "Пшеница", image: "/images/crops/1.png" },
  { name: "Подсолнечник", image: "/images/crops/2.png" },
  { name: "Соя", image: "/images/crops/3.png" },
  { name: "Рапс", image: "/images/crops/4.png" },
  { name: "Кукуруза", image: "/images/crops/5.png" },
  { name: "Ячмень", image: "/images/crops/6.png" },
  { name: "Горох", image: "/images/crops/7.png" },
  { name: "Нут", image: "/images/crops/8.png" },
  { name: "Чечевица", image: "/images/crops/9.png" },
  { name: "Сорго", image: "/images/crops/10.png" },
  { name: "Бахчевые", image: "/images/crops/11.png" },
  { name: "Чеснок", image: "/images/crops/12.png" },
];

export default function ProductionProfile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll(".animate-item");
    
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
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
      className="relative w-full overflow-hidden bg-cream pt-24"
      style={{ zIndex: 30, paddingBottom: "100px" }}
    >
      <div
        ref={contentRef}
        className="relative z-10 section-padding py-12"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="animate-item text-center mb-8" style={{ marginTop: "100px" }}>
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 4
            </span>
          </div>

          <h2 className="animate-item text-center text-4xl md:text-5xl lg:text-6xl font-light text-graphite" style={{ marginBottom: '12px' }}>
            Производственный профиль
          </h2>

          <p className="animate-item text-center text-xl font-semibold text-gray-600" style={{ marginBottom: '12px' }}>
            Диверсифицированный портфель культур
          </p>

          <div className="animate-item grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {crops.map((crop) => (
              <div
                key={crop.name}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="mb-4 overflow-hidden rounded-lg" style={{ aspectRatio: '4/3', width: '64%' }}>
                  <img 
                    src={crop.image} 
                    alt={crop.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-lg font-medium text-graphite">{crop.name}</span>
              </div>
            ))}
          </div>

          <p className="animate-item text-lg md:text-xl font-semibold text-gray-700 leading-relaxed" style={{ marginTop: '24px', textAlign: 'center', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
            Диверсификация снижает рыночные и климатические риски и обеспечивает экспортный потенциал.
          </p>
        </div>
      </div>
    </section>
  );
}
