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

// SVG-иллюстрация: Золотое поле с пшеницей
function ImageLand() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
      {/* Фон - небо с градиентом заката */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a3e" />
          <stop offset="40%" stopColor="#2d2d5a" />
          <stop offset="100%" stopColor="#C4A35A" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d1f0f" />
          <stop offset="50%" stopColor="#1a1208" />
          <stop offset="100%" stopColor="#0d0904" />
        </linearGradient>
        <linearGradient id="wheatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C4A35A" />
          <stop offset="50%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#4a3f2a" />
        </linearGradient>
      </defs>
      
      {/* Небо */}
      <rect width="400" height="200" fill="url(#skyGradient)" />
      
      {/* Далекие холмы */}
      <path d="M0 140 Q100 120 200 135 T400 130 V200 H0 Z" fill="#1a1520" opacity="0.6" />
      <path d="M0 150 Q150 140 300 148 T400 145 V200 H0 Z" fill="#1a1210" opacity="0.8" />
      
      {/* Золотое поле */}
      <path d="M0 160 Q200 150 400 165 V200 H0 Z" fill="url(#fieldGradient)" />
      
      {/* Стебли пшеницы - передний план */}
      <g opacity="0.9">
        {/* Левая группа */}
        <path d="M30 200 Q32 150 28 100" stroke="url(#wheatGradient)" strokeWidth="2" fill="none" />
        <ellipse cx="28" cy="95" rx="6" ry="12" fill="#C4A35A" opacity="0.8" />
        <ellipse cx="26" cy="85" rx="5" ry="10" fill="#C4A35A" opacity="0.7" />
        <ellipse cx="30" cy="78" rx="4" ry="8" fill="#C4A35A" opacity="0.6" />
        
        <path d="M50 200 Q48 145 52 95" stroke="url(#wheatGradient)" strokeWidth="2" fill="none" />
        <ellipse cx="52" cy="90" rx="7" ry="14" fill="#C4A35A" opacity="0.8" />
        <ellipse cx="54" cy="78" rx="5" ry="11" fill="#C4A35A" opacity="0.7" />
        
        <path d="M80 200 Q82 155 78 105" stroke="url(#wheatGradient)" strokeWidth="2" fill="none" />
        <ellipse cx="78" cy="100" rx="6" ry="13" fill="#C4A35A" opacity="0.8" />
        <ellipse cx="76" cy="88" rx="5" ry="10" fill="#C4A35A" opacity="0.7" />
        
        {/* Центральная группа */}
        <path d="M120 200 Q118 148 122 98" stroke="url(#wheatGradient)" strokeWidth="2.5" fill="none" />
        <ellipse cx="122" cy="93" rx="8" ry="15" fill="#C4A35A" opacity="0.9" />
        <ellipse cx="124" cy="80" rx="6" ry="12" fill="#C4A35A" opacity="0.8" />
        <ellipse cx="120" cy="70" rx="4" ry="8" fill="#C4A35A" opacity="0.7" />
        
        <path d="M160 200 Q162 152 158 102" stroke="url(#wheatGradient)" strokeWidth="2" fill="none" />
        <ellipse cx="158" cy="97" rx="7" ry="14" fill="#C4A35A" opacity="0.8" />
        <ellipse cx="160" cy="84" rx="5" ry="11" fill="#C4A35A" opacity="0.7" />
        
        <path d="M200 200 Q198 150 202 100" stroke="url(#wheatGradient)" strokeWidth="2.5" fill="none" />
        <ellipse cx="202" cy="95" rx="8" ry="15" fill="#C4A35A" opacity="0.9" />
        <ellipse cx="200" cy="82" rx="6" ry="12" fill="#C4A35A" opacity="0.8" />
        
        {/* Правая группа */}
        <path d="M250 200 Q252 155 248 105" stroke="url(#wheatGradient)" strokeWidth="2" fill="none" />
        <ellipse cx="248" cy="100" rx="6" ry="13" fill="#C4A35A" opacity="0.8" />
        <ellipse cx="250" cy="88" rx="5" ry="10" fill="#C4A35A" opacity="0.7" />
        
        <path d="M300 200 Q298 148 302 98" stroke="url(#wheatGradient)" strokeWidth="2.5" fill="none" />
        <ellipse cx="302" cy="93" rx="8" ry="15" fill="#C4A35A" opacity="0.9" />
        <ellipse cx="304" cy="80" rx="6" ry="12" fill="#C4A35A" opacity="0.8" />
        
        <path d="M340 200 Q342 152 338 102" stroke="url(#wheatGradient)" strokeWidth="2" fill="none" />
        <ellipse cx="338" cy="97" rx="7" ry="14" fill="#C4A35A" opacity="0.8" />
        
        <path d="M370 200 Q368 150 372 100" stroke="url(#wheatGradient)" strokeWidth="2" fill="none" />
        <ellipse cx="372" cy="95" rx="6" ry="12" fill="#C4A35A" opacity="0.8" />
      </g>
      
      {/* Световой эффект - закат */}
      <ellipse cx="350" cy="80" rx="40" ry="25" fill="#C4A35A" opacity="0.15" />
      <ellipse cx="350" cy="80" rx="25" ry="15" fill="#C4A35A" opacity="0.2" />
    </svg>
  );
}

// SVG-иллюстрация: Река Дон
function ImageWater() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
      {/* Фон - вечернее небо */}
      <defs>
        <linearGradient id="riverSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a3e" />
          <stop offset="50%" stopColor="#2a3a5a" />
          <stop offset="100%" stopColor="#3a5a7a" />
        </linearGradient>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A90C4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#2E5A7C" />
          <stop offset="100%" stopColor="#1a3a5a" />
        </linearGradient>
        <linearGradient id="shoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a1510" />
          <stop offset="100%" stopColor="#2a2015" />
        </linearGradient>
      </defs>
      
      {/* Небо */}
      <rect width="400" height="200" fill="url(#riverSkyGradient)" />
      
      {/* Далекий берег */}
      <path d="M0 90 Q100 85 200 88 T400 85 V200 H0 Z" fill="#1a2535" opacity="0.5" />
      
      {/* Вода - река Дон */}
      <path d="M0 110 Q150 105 250 115 T400 110 V200 H0 Z" fill="url(#waterGradient)" />
      
      {/* Блики на воде */}
      <g opacity="0.3">
        <ellipse cx="80" cy="135" rx="30" ry="3" fill="#6AB0E4" />
        <ellipse cx="180" cy="140" rx="40" ry="4" fill="#6AB0E4" />
        <ellipse cx="300" cy="138" rx="35" ry="3" fill="#6AB0E4" />
        <ellipse cx="120" cy="155" rx="25" ry="2" fill="#6AB0E4" />
        <ellipse cx="250" cy="160" rx="30" ry="3" fill="#6AB0E4" />
      </g>
      
      {/* Рябь на воде */}
      <g opacity="0.2" stroke="#6AB0E4" strokeWidth="1" fill="none">
        <path d="M50 130 Q70 128 90 130" />
        <path d="M150 135 Q170 133 190 135" />
        <path d="M280 132 Q300 130 320 132" />
        <path d="M100 150 Q120 148 140 150" />
        <path d="M220 155 Q240 153 260 155" />
        <path d="M340 148 Q360 146 380 148" />
      </g>
      
      {/* Ближний берег */}
      <path d="M0 160 Q80 155 150 165 T300 160 L400 155 V200 H0 Z" fill="url(#shoreGradient)" />
      
      {/* Трава на берегу */}
      <g opacity="0.6">
        <path d="M20 165 L22 150 L24 165" stroke="#3a5a3a" strokeWidth="2" fill="none" />
        <path d="M35 168 L37 152 L39 168" stroke="#3a5a3a" strokeWidth="2" fill="none" />
        <path d="M60 166 L62 148 L64 166" stroke="#3a5a3a" strokeWidth="2" fill="none" />
        <path d="M320 162 L322 145 L324 162" stroke="#3a5a3a" strokeWidth="2" fill="none" />
        <path d="M350 165 L352 150 L354 165" stroke="#3a5a3a" strokeWidth="2" fill="none" />
        <path d="M375 163 L377 147 L379 163" stroke="#3a5a3a" strokeWidth="2" fill="none" />
      </g>
      
      {/* Отражение заката на воде */}
      <ellipse cx="320" cy="125" rx="25" ry="8" fill="#4A90C4" opacity="0.2" />
      <ellipse cx="320" cy="125" rx="15" ry="4" fill="#6AB0E4" opacity="0.3" />
      
      {/* Луна */}
      <circle cx="60" cy="50" r="15" fill="#e0e0e0" opacity="0.8" />
      <circle cx="58" cy="48" r="3" fill="#d0d0d0" opacity="0.5" />
      <circle cx="63" cy="52" r="2" fill="#d0d0d0" opacity="0.4" />
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

    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
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

      <div className="max-w-7xl mx-auto px-4">
        <div className="h-12"></div>
        
        <div className="grid grid-cols-2 gap-12">
        
        {/* Карточка 1 - Земля */}
        <div
          ref={card1Ref}
          className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-graphite-light/40 to-graphite/60 overflow-hidden"
        >
          {/* Фоновый градиент при наведении */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* SVG-иллюстрация */}
          <div className="relative w-full h-48 overflow-hidden">
            <ImageLand />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent"></div>
          </div>
          
          <div className="relative" style={{ padding: '40px', paddingTop: '60px' }}>
            {/* Контент */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-gold/60 text-sm font-medium">01</span>
              <h3 className="text-xl font-semibold text-white">
                Север Волгоградской области
              </h3>
            </div>
            
            <p className="text-white leading-relaxed mb-12 px-2">
              Зона наиболее плодородных земель региона — высокопродуктивные чернозёмы с оптимальным климатом.
            </p>
            
            <div className="bg-white/5 rounded-xl p-8 border border-white/5">
              <p className="text-gold text-sm font-semibold mb-8 uppercase tracking-wider">Ключевые преимущества</p>
              <ul ref={list1Ref} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {LIST_2_1.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm text-left">
                    <span className="text-gold mt-1">•</span>
                    <span>{item.replace(';', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Карточка 2 - Вода */}
        <div
          ref={card2Ref}
          className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-graphite-light/40 to-graphite/60 overflow-hidden"
        >
          {/* Фоновый градиент при наведении */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A90C4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* SVG-иллюстрация */}
          <div className="relative w-full h-48 overflow-hidden">
            <ImageWater />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent"></div>
          </div>
          
          <div className="relative" style={{ padding: '40px', paddingTop: '60px' }}>
            {/* Контент */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#4A90C4]/60 text-sm font-medium">02</span>
              <h3 className="text-xl font-semibold text-white">
                Расположение на берегу реки Дон
              </h3>
            </div>
            
            <p className="text-white leading-relaxed mb-12 px-2">
              Непосредственная близость к крупному водному ресурсу создаёт уникальное стратегическое преимущество.
            </p>
            
            <div className="bg-white/5 rounded-xl p-8 border border-white/5">
              <p className="text-[#4A90C4] text-sm font-semibold mb-8 uppercase tracking-wider">Возможности</p>
              <ul ref={list2Ref} className="grid grid-cols-1 gap-y-5">
                {LIST_2_2.slice(0, -1).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm text-left">
                    <span className="text-[#4A90C4] mt-1">•</span>
                    <span>{item.replace(';', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div ref={mapContainerRef} className="max-w-6xl mx-auto mt-32 px-4">
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
        </div>
      </div>
    </section>
  );
}
