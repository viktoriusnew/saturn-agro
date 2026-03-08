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
          <div className="animate-item" style={{ marginTop: '20px' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-graphite">
              КОНТАКТНАЯ ИНФОРМАЦИЯ
            </h2>
          </div>
        </div>

        {/* Map Container */}
        <div className="animate-item w-full max-w-6xl mx-auto" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }}>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden shadow-2xl bg-gray-100">
            {/* Amap (高德地图) с маркером на координатах 49.584086, 42.232112 */}
            <iframe
              src="https://uri.amap.com/marker?position=42.232112,49.584086&name=Сатурн-Агро&src=Сатурн-Агро&coordinate=gaode&callnative=0"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения Сатурн-Агро"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="animate-item text-center" style={{ marginTop: '20px' }}>
          <div className="inline-block bg-white rounded-lg shadow-lg p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-medium text-graphite mb-6">
              Бушинов Сергей Вячеславович
            </h3>
            
            <div className="space-y-4 text-lg">
              <p>
                <span className="text-gray-600">тел.: </span>
                <a 
                  href="tel:+79166222270" 
                  className="text-forest hover:text-forest/80 underline transition-colors"
                >
                  +7-916-622-22-70
                </a>
              </p>
              
              <p>
                <span className="text-gray-600">e-mail: </span>
                <a 
                  href="mailto:saturnagro96@mail.ru" 
                  className="text-forest hover:text-forest/80 underline transition-colors"
                >
                  saturnagro96@mail.ru
                </a>
              </p>
              
              <p>
                <span className="text-gray-600">WeChat: </span>
                <span className="text-graphite font-medium">Sergey BSV</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
