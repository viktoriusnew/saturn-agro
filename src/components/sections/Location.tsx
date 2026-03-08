"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Location() {
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
      className="relative min-h-screen w-full overflow-hidden bg-cream"
      style={{ zIndex: 30 }}
    >
      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 section-padding py-20 md:py-32"
      >
        <div className="w-full text-center mb-12">
          <div className="animate-item">
            <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
              Раздел 12
            </span>
          </div>

          <h2 className="animate-item mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-graphite">
            РАСПОЛОЖЕНИЕ
          </h2>

          <p className="animate-item mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
            Волгоградская область, Калачёвский район
          </p>
        </div>

        {/* Map Container */}
        <div className="animate-item w-full max-w-6xl mx-auto" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden shadow-2xl bg-gray-100">
            {/* Замените src на URL iframe с amap.com */}
            <iframe
              src="https://www.amap.com/"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Address Info */}
        <div className="animate-item mt-12 text-center">
          <div className="inline-block bg-white rounded-lg shadow-lg p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-medium text-graphite mb-4">
              Адрес производственной площадки
            </h3>
            <p className="text-gray-600 text-lg">
              Волгоградская область, Калачёвский район,<br />
              х. Верхнекумский, ул. Центральная, 15
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">GPS координаты</span>
                  <p className="text-graphite font-medium mt-1">48.6543° N, 43.1234° E</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Расстояние до Волгограда</span>
                  <p className="text-graphite font-medium mt-1">~180 км</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
