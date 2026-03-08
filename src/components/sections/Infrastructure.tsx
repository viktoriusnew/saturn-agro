"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const infrastructureItems = [
  "складские комплексы",
  "токовые площадки", 
  "сушильно-очистительный комплекс",
  "ремонтная база",
  "премиальный парк техники",
  "нефтебаза",
  "автозаправочный пункт",
  "административные здания",
];

const engineeringCards = [
  { name: "промышленное электроснабжение", image: "/images/power.png" },
  { name: "газоснабжение", image: "/images/gas.png" },
  { name: "технологическое и хозяйственное водоснабжение", image: "/images/woter.png" },
];

export default function Infrastructure() {
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
      className="relative h-screen w-full overflow-hidden"
      style={{ zIndex: 40 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/infrastructure-bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-white/85" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center section-padding"
      >
        <div className="w-full">
          <div className="animate-item text-center">
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 5
            </span>
          </div>

          <h2 className="animate-item text-center text-4xl md:text-5xl lg:text-6xl font-light text-graphite" style={{ marginTop: '18px' }}>
            ИНФРАСТРУКТУРА
          </h2>

          <p className="animate-item text-center text-xl md:text-2xl text-gray-600" style={{ marginTop: '24px', marginBottom: '15px' }}>
            Предприятие обладает полной производственной базой:
          </p>
          
          <div className="animate-item grid grid-cols-2 md:grid-cols-4 gap-3" style={{ marginBottom: '20px' }}>
            {infrastructureItems.map((item) => (
              <div 
                key={item}
                className="flex items-center gap-2 p-3"
              >
                <div className="w-2 h-2 rounded-full bg-forest flex-shrink-0" />
                <span className="text-gray-700 text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="animate-item bg-gradient-to-br from-forest to-forest-light text-white rounded-2xl p-8 shadow-2xl text-center" style={{ maxWidth: '500px', margin: '0 auto 24px' }}>
            <p className="text-white/80 text-lg mb-2">Общая площадь зданий и сооружений превышает</p>
            <div className="text-6xl md:text-7xl font-bold mb-4">
              28 000
            </div>
            <div className="text-3xl font-light text-gold">
              кв. м.
            </div>
          </div>

          <h3 className="animate-item text-center text-xl md:text-2xl font-medium text-graphite mb-6">Инженерное обеспечение</h3>
          
          <div className="animate-item grid grid-cols-1 md:grid-cols-3 gap-4">
            {engineeringCards.map((card) => (
              <div 
                key={card.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <span className="text-sm font-medium text-graphite">{card.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
