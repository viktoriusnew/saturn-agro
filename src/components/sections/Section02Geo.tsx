"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LIST_2_1 = [
  "естественно плодородные почвы;",
  "более благоприятный климат по влагообеспеченности по сравнению с южной частью региона;",
  "стабильность урожайности;",
  "сниженные риски засух.",
];

const LIST_2_2 = [
  "наличие крупного и стабильного водного ресурса;",
  "возможность внедрения промышленных систем орошения;",
  "потенциал существенного увеличения урожайности;",
  "снижение климатических рисков;",
  "расширение структуры выращиваемых культур.",
];

function IconLand() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gold">
      <path
        d="M8 32 L16 24 L24 28 L32 20 L40 24 L40 36 L8 36 Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M4 36 L12 28 L20 32 L28 24 L36 28 L44 24 L44 40 L4 40 Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <path
        d="M6 38 L14 30 L22 34 L30 26 L38 30 L42 38 L6 38 Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
    </svg>
  );
}

function IconWater() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#4A90C4]">
      <path
        d="M4 28 Q14 22 24 28 T44 28 L44 40 L4 40 Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M4 32 Q12 28 20 32 T36 32 T44 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M8 36 Q16 32 24 36 T40 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export default function Section02Geo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const list1Ref = useRef<HTMLUListElement>(null);
  const list2Ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !mapContainerRef.current) return;

    const paths = svgRef.current?.querySelectorAll(".draw-path");
    const labels = svgRef.current?.querySelectorAll(".map-label");
    const pin = svgRef.current?.querySelector(".map-pin");
    const pinPulse = svgRef.current?.querySelector(".map-pin-pulse");

    paths?.forEach((path) => {
      const el = path as SVGPathElement;
      const length = el.getTotalLength();
      gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
    });

    const tl = gsap.timeline();
    paths?.forEach((path, i) => {
      const el = path as SVGPathElement;
      tl.to(el, { strokeDashoffset: 0, duration: 1, ease: "none" }, i * 0.05);
    });
    tl.to(
      labels || [],
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      0.4
    );
    if (pin) {
      tl.fromTo(
        pin,
        { scale: 0, transformOrigin: "center bottom" },
        { scale: 1, duration: 0.4, ease: "back.out(2)" },
        0.35
      );
    }
    if (pinPulse) {
      tl.fromTo(
        pinPulse,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.2 },
        0.6
      );
    }

    ScrollTrigger.create({
      trigger: mapContainerRef.current,
      start: "top 80%",
      end: "top 20%",
      animation: tl,
      scrub: 1,
    });

    ScrollTrigger.create({
      trigger: mapContainerRef.current,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => mapContainerRef.current?.setAttribute("data-pin-visible", "true"),
      onLeaveBack: () => mapContainerRef.current?.removeAttribute("data-pin-visible"),
      onLeave: () => mapContainerRef.current?.removeAttribute("data-pin-visible"),
      onEnterBack: () => mapContainerRef.current?.setAttribute("data-pin-visible", "true"),
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!card1Ref.current || !sectionRef.current) return;
    gsap.fromTo(
      card1Ref.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!card2Ref.current || !sectionRef.current) return;
    gsap.fromTo(
      card2Ref.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!list1Ref.current || !sectionRef.current) return;
    const items = list1Ref.current.querySelectorAll("li");
    gsap.fromTo(
      items,
      { opacity: 0, x: -12 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: list1Ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!list2Ref.current || !sectionRef.current) return;
    const items = list2Ref.current.querySelectorAll("li");
    gsap.fromTo(
      items,
      { opacity: 0, x: -12 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: list2Ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="section-2" ref={sectionRef} className="py-24 md:py-32 section-padding bg-graphite">
      <SectionHeading
        label="Раздел 2"
        title="Географическое и природное преимущество"
        subtitle=""
        light
        center
      />

      <div className="max-w-4xl mx-auto space-y-16 mt-28">
        <div
          ref={card1Ref}
          className="group rounded-lg border border-white/10 bg-graphite-light/30 p-8 md:p-10 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
        >
          <div className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 mt-1">{IconLand()}</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                2.1. Север Волгоградской области — зона наиболее плодородных земель региона
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Предприятие расположено в северной части Волгоградской области — зоне высокопродуктивных чернозёмов.
              </p>
              <p className="text-gold/90 text-sm font-medium mb-2">Ключевые преимущества:</p>
              <ul ref={list1Ref} className="list-disc list-inside text-gray-300 space-y-1">
                {LIST_2_1.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          ref={card2Ref}
          className="group rounded-lg border border-white/10 bg-graphite-light/30 p-8 md:p-10 transition-all duration-300 hover:border-[#4A90C4]/40 hover:shadow-lg hover:shadow-[#4A90C4]/5"
        >
          <div className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 mt-1">{IconWater()}</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                2.2. Расположение на берегу реки Дон
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Предприятие находится в непосредственной близости к реке Дон, что создаёт стратегическое преимущество:
              </p>
              <ul ref={list2Ref} className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                {LIST_2_2.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Наличие водного ресурса формирует фундамент для перехода к интенсивной модели земледелия.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={mapContainerRef} className="max-w-4xl mx-auto mt-32">
        <div className="relative bg-graphite-light/50 rounded-sm border border-white/5 p-8 md:p-12">
          <svg ref={svgRef} viewBox="0 0 800 500" fill="none" className="w-full h-auto">
            <path
              className="draw-path"
              d="M200 80 L380 60 L520 100 L620 80 L700 140 L720 260 L680 360 L600 420 L480 440 L360 400 L280 360 L200 400 L140 340 L120 240 L160 160 Z"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              fill="rgba(255,255,255,0.03)"
            />
            <path
              className="draw-path"
              d="M200 80 L380 60 L520 100 L500 180 L380 200 L260 180 L200 140 Z"
              stroke="#C4A35A"
              strokeWidth="2"
              fill="rgba(196,163,90,0.08)"
            />
            <path
              className="draw-path"
              d="M150 120 C200 130 240 110 280 130 S350 160 380 140 S440 120 480 150 S540 170 580 160 S640 180 680 170"
              stroke="#4A90C4"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
            />
            <g className="map-pin" transform="translate(340, 120)">
              <circle className="map-pin-pulse" r="24" fill="rgba(196,163,90,0.12)" />
              <circle r="20" fill="rgba(196,163,90,0.15)" />
              <circle r="10" fill="rgba(196,163,90,0.3)" />
              <circle r="4" fill="#C4A35A" />
            </g>
            <g className="map-label" style={{ opacity: 0, transform: "translateY(10px)" }}>
              <text x="340" y="170" fill="#C4A35A" fontSize="14" fontWeight="600" textAnchor="middle">
                ООО «Сатурн-Агро»
              </text>
              <text x="340" y="188" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">
                22 002,96 га
              </text>
            </g>
            <g className="map-label" style={{ opacity: 0, transform: "translateY(10px)" }}>
              <text x="480" y="150" fill="#4A90C4" fontSize="13" fontStyle="italic">
                р. Дон
              </text>
            </g>
            <g className="map-label" style={{ opacity: 0, transform: "translateY(10px)" }}>
              <text x="400" y="300" fill="rgba(255,255,255,0.35)" fontSize="16" textAnchor="middle" fontWeight="300">
                Волгоградская область
              </text>
            </g>
            <g className="map-label" style={{ opacity: 0, transform: "translateY(10px)" }}>
              <text x="360" y="90" fill="rgba(196,163,90,0.5)" fontSize="11" textAnchor="middle">
                Северная зона — чернозёмы
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
