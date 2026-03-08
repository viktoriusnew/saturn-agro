"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GeoAdvantage() {
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
        stagger: 0.15,
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
      style={{ zIndex: 10 }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/agriculture.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Light overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/75" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center section-padding"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-item">
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 2
            </span>
          </div>

          <h2 className="animate-item mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-graphite leading-[1.1] tracking-tight">
            ГЕОГРАФИЧЕСКОЕ
            <br />
            <span className="font-medium">И ПРИРОДНОЕ</span>
            <br />
            <span className="font-medium">ПРЕИМУЩЕСТВО</span>
          </h2>

          <div className="animate-item mt-12 grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg" style={{ padding: '48px' }}>
              <h3 className="text-xl lg:text-2xl font-medium text-graphite mb-6">
                Север Волгоградской области — зона наиболее плодородных земель региона
              </h3>
              <p className="text-gray-700 mb-6">
                Предприятие расположено в северной части Волгоградской области — зоне высокопродуктивных чернозёмов.
              </p>
              <div className="space-y-3">
                <p className="text-gray-800"><span className="text-forest font-medium">•</span> естественно плодородные почвы</p>
                <p className="text-gray-800"><span className="text-forest font-medium">•</span> более благоприятный климат по влагообеспеченности</p>
                <p className="text-gray-800"><span className="text-forest font-medium">•</span> стабильность урожайности</p>
                <p className="text-gray-800"><span className="text-forest font-medium">•</span> сниженные риски засух</p>
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-sm rounded-lg" style={{ padding: '48px' }}>
              <h3 className="text-xl lg:text-2xl font-medium text-graphite mb-6">
                Расположение на берегу реки Дон
              </h3>
              <p className="text-gray-700 mb-6">
                Предприятие находится в непосредственной близости к реке Дон, что создаёт стратегическое преимущество:
              </p>
              <div className="space-y-3">
                <p className="text-gray-800"><span className="text-forest font-medium">•</span> наличие крупного и стабильного водного ресурса</p>
                <p className="text-gray-800"><span className="text-forest font-medium">•</span> возможность внедрения промышленных систем орошения</p>
                <p className="text-gray-800"><span className="text-forest font-medium">•</span> потенциал существенного увеличения урожайности</p>
                <p className="text-gray-800"><span className="text-forest font-medium">•</span> снижение климатических рисков</p>
              </div>
              <p className="text-gray-700 mt-6 italic">
                Наличие водного ресурса формирует фундамент для перехода к интенсивной модели земледелия.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
