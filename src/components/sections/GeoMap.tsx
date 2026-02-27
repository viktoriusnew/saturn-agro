"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GeoMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !sectionRef.current) return;

    const paths = svgRef.current.querySelectorAll(".draw-path");
    const labels = svgRef.current.querySelectorAll(".map-label");
    const pin = svgRef.current.querySelector(".map-pin");

    paths.forEach((path) => {
      const el = path as SVGPathElement;
      const length = el.getTotalLength();
      gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(el, {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.fromTo(
      labels,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    if (pin) {
      gsap.fromTo(
        pin,
        { scale: 0, transformOrigin: "center bottom" },
        {
          scale: 1,
          duration: 0.6,
          delay: 2,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="geography" ref={sectionRef} className="py-24 md:py-32 section-padding bg-graphite">
      <SectionHeading
        label="География"
        title="Стратегическое расположение"
        subtitle="Север Волгоградской области — зона наиболее плодородных земель региона, в непосредственной близости к реке Дон"
        light
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-graphite-light/50 rounded-sm border border-white/5 p-8 md:p-12">
          <svg
            ref={svgRef}
            viewBox="0 0 800 500"
            fill="none"
            className="w-full h-auto"
          >
            {/* Region outline */}
            <path
              className="draw-path"
              d="M200 80 L380 60 L520 100 L620 80 L700 140 L720 260 L680 360 L600 420 L480 440 L360 400 L280 360 L200 400 L140 340 L120 240 L160 160 Z"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              fill="rgba(255,255,255,0.03)"
            />

            {/* Northern zone highlight */}
            <path
              className="draw-path"
              d="M200 80 L380 60 L520 100 L500 180 L380 200 L260 180 L200 140 Z"
              stroke="#C4A35A"
              strokeWidth="2"
              fill="rgba(196,163,90,0.08)"
            />

            {/* Don River */}
            <path
              className="draw-path"
              d="M150 120 C200 130 240 110 280 130 S350 160 380 140 S440 120 480 150 S540 170 580 160 S640 180 680 170"
              stroke="#4A90C4"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
            />

            {/* Pin */}
            <g className="map-pin" transform="translate(340, 120)">
              <circle r="20" fill="rgba(196,163,90,0.15)" />
              <circle r="10" fill="rgba(196,163,90,0.3)" />
              <circle r="4" fill="#C4A35A" />
            </g>

            {/* Labels */}
            <g className="map-label">
              <text x="340" y="170" fill="#C4A35A" fontSize="14" fontWeight="600" textAnchor="middle">
                ООО «Сатурн-Агро»
              </text>
              <text x="340" y="188" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">
                22 002,96 га
              </text>
            </g>

            <g className="map-label">
              <text x="480" y="150" fill="#4A90C4" fontSize="13" fontStyle="italic">
                р. Дон
              </text>
            </g>

            <g className="map-label">
              <text x="400" y="300" fill="rgba(255,255,255,0.35)" fontSize="16" textAnchor="middle" fontWeight="300">
                Волгоградская область
              </text>
            </g>

            <g className="map-label">
              <text x="360" y="90" fill="rgba(196,163,90,0.5)" fontSize="11" textAnchor="middle">
                Северная зона — чернозёмы
              </text>
            </g>
          </svg>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Чернозёмы",
                desc: "Естественно плодородные почвы в наиболее благоприятной климатической зоне",
              },
              {
                title: "Река Дон",
                desc: "Крупный и стабильный водный ресурс для промышленного орошения",
              },
              {
                title: "Инфраструктура",
                desc: "Полная производственная база площадью 28 000+ м²",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
