"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import { STRATEGIC_POINTS } from "@/lib/constants";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  land: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="4" y="30" width="40" height="4" rx="2" fill="currentColor" opacity="0.2" />
      <path d="M8 30V18l8-6 8 6v12" stroke="currentColor" strokeWidth="2" />
      <path d="M28 30V22l8-4 8 4v8" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="20" r="14" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <path d="M24 8c-6.627 0-12 5.373-12 12 0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12z" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="20" r="4" fill="currentColor" />
    </svg>
  ),
  water: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M4 28c4-4 8 0 12-4s8 0 12-4 8 0 12-4" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M4 34c4-4 8 0 12-4s8 0 12-4 8 0 12-4" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M4 40c4-4 8 0 12-4s8 0 12-4 8 0 12-4" stroke="currentColor" strokeWidth="2" />
      <path d="M24 8l-6 14h12L24 8z" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="8" y="14" width="14" height="26" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="26" y="22" width="14" height="18" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="12" y="18" width="3" height="3" fill="currentColor" opacity="0.5" />
      <rect x="17" y="18" width="3" height="3" fill="currentColor" opacity="0.5" />
      <rect x="12" y="24" width="3" height="3" fill="currentColor" opacity="0.5" />
      <rect x="17" y="24" width="3" height="3" fill="currentColor" opacity="0.5" />
      <rect x="30" y="26" width="3" height="3" fill="currentColor" opacity="0.5" />
      <rect x="35" y="26" width="3" height="3" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="6" y="10" width="36" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M6 18h36" stroke="currentColor" strokeWidth="2" />
      <path d="M16 6v8M32 6v8" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="26" r="2" fill="currentColor" />
      <circle cx="24" cy="26" r="2" fill="currentColor" />
      <circle cx="32" cy="26" r="2" fill="currentColor" />
      <circle cx="16" cy="34" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="6" y="30" width="6" height="10" fill="currentColor" opacity="0.3" />
      <rect x="15" y="22" width="6" height="18" fill="currentColor" opacity="0.5" />
      <rect x="24" y="16" width="6" height="24" fill="currentColor" opacity="0.7" />
      <rect x="33" y="10" width="6" height="30" fill="currentColor" />
      <path d="M6 42h36" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  crop: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 40V20" stroke="currentColor" strokeWidth="2" />
      <path d="M24 28c-6-2-10-8-10-16 6 2 10 8 10 16z" fill="currentColor" opacity="0.3" />
      <path d="M24 22c6-2 10-8 10-16-6 2-10 8-10 16z" fill="currentColor" opacity="0.5" />
      <path d="M24 34c-4-1-7-5-7-10 4 1 7 5 7 10z" fill="currentColor" opacity="0.4" />
    </svg>
  ),
};

export default function WhyStrategic() {
  const ref = useScrollFadeIn({ stagger: 0.12 });

  return (
    <section id="about" className="py-24 md:py-32 section-padding bg-cream">
      <SectionHeading
        label="Преимущества"
        title="Почему это стратегический актив"
        subtitle="Уникальная комбинация земельного банка, водных ресурсов и действующей инфраструктуры"
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STRATEGIC_POINTS.map((point) => (
          <Card key={point.icon}>
            <div className="text-forest mb-5">{iconMap[point.icon]}</div>
            <h3 className="text-xl font-semibold text-graphite mb-2">{point.title}</h3>
            <p className="text-gray-500 leading-relaxed">{point.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
