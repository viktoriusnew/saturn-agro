"use client";

import { useScrollFadeIn, useCountUp } from "@/hooks/useGsap";
import { INFRASTRUCTURE_ITEMS, ENGINEERING } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const iconSvg: Record<string, React.ReactNode> = {
  warehouse: (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 16L16 6l12 10v14H4V16z" />
      <rect x="12" y="20" width="8" height="10" />
    </svg>
  ),
  grain: (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r="10" />
      <path d="M16 6v20M6 16h20" />
    </svg>
  ),
  dryer: (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="4" width="20" height="24" rx="2" />
      <path d="M10 12h12M10 16h12M10 20h12" opacity="0.5" />
      <circle cx="16" cy="8" r="2" fill="currentColor" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 4a8 8 0 00-7.5 10.5L4 23l5 5 8.5-8.5A8 8 0 0020 4z" />
    </svg>
  ),
  tractor: (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10" cy="24" r="4" />
      <circle cx="24" cy="24" r="3" />
      <path d="M6 20h8l4-8H8l-2 8zM14 20h12l2-4h-10" />
    </svg>
  ),
  fuel: (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="8" width="14" height="20" rx="1" />
      <path d="M20 16l4-4v12a2 2 0 004 0V12" />
      <rect x="9" y="11" width="8" height="6" opacity="0.3" fill="currentColor" />
    </svg>
  ),
  gas: (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 4v8M12 12h8v4l-4 8-4-8v-4z" />
      <circle cx="16" cy="26" r="2" fill="currentColor" />
    </svg>
  ),
  office: (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="6" width="24" height="22" rx="1" />
      <rect x="8" y="10" width="4" height="4" opacity="0.4" fill="currentColor" />
      <rect x="14" y="10" width="4" height="4" opacity="0.4" fill="currentColor" />
      <rect x="20" y="10" width="4" height="4" opacity="0.4" fill="currentColor" />
      <rect x="8" y="17" width="4" height="4" opacity="0.4" fill="currentColor" />
      <rect x="14" y="17" width="4" height="4" opacity="0.4" fill="currentColor" />
      <rect x="20" y="17" width="4" height="4" opacity="0.4" fill="currentColor" />
      <rect x="13" y="24" width="6" height="4" />
    </svg>
  ),
};

export default function Section05Infrastructure() {
  const ref = useScrollFadeIn({ stagger: 0.1 });
  const areaRef = useCountUp(28000, 2);

  return (
    <section id="section-5" className="py-24 md:py-32 section-padding bg-cream">
      <SectionHeading
        label="Раздел 5"
        title="Инфраструктура"
        subtitle=""
        center
      />

      <div className="max-w-6xl mx-auto mb-12 px-4">
        <p className="text-graphite text-lg leading-relaxed mb-6">
          Предприятие обладает полной производственной базой:
        </p>
        <ul className="list-disc list-inside text-graphite text-lg leading-relaxed mb-6 space-y-1">
          <li>складские комплексы;</li>
          <li>токовые площадки;</li>
          <li>сушильно-очистительный комплекс;</li>
          <li>ремонтная база;</li>
          <li>парк современной техники;</li>
          <li>нефтебаза;</li>
          <li>автозаправочный пункт;</li>
          <li>административные здания.</li>
        </ul>
        <p className="text-graphite text-lg leading-relaxed mb-8">
          Общая площадь зданий и сооружений превышает 28 000 кв. м.
        </p>
        <p className="text-graphite text-lg leading-relaxed mb-2">
          Инженерное обеспечение:
        </p>
        <ul className="list-disc list-inside text-graphite text-lg leading-relaxed mb-6 space-y-1">
          <li>промышленное электроснабжение;</li>
          <li>газоснабжение;</li>
          <li>технологическое и хозяйственное водоснабжение.</li>
        </ul>
        <p className="text-graphite text-lg leading-relaxed">
          Инфраструктура позволяет масштабировать объёмы производства без существенного увеличения рисков.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-baseline gap-2">
            <span className="text-gray-400 text-xl">более</span>
            <span ref={areaRef} className="text-5xl md:text-6xl font-light text-graphite">0</span>
            <span className="text-xl text-gold">м²</span>
          </div>
          <p className="text-gray-500 mt-2">общая площадь зданий и сооружений</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INFRASTRUCTURE_ITEMS.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-sm border border-gray-200/60 p-6 text-center hover:border-gold/30 hover:shadow-md transition-all duration-300"
            >
              <div className="text-forest mb-4 flex justify-center">{iconSvg[item.icon]}</div>
              <span className="text-sm font-medium text-graphite">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-sm border border-gray-200/60 p-8">
          <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Инженерное обеспечение</h4>
          <div className="flex flex-wrap gap-4">
            {ENGINEERING.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-sm text-sm text-graphite border border-gray-200/60"
              >
                <span className="w-1.5 h-1.5 bg-forest rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
