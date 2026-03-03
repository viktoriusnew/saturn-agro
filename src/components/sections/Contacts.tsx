"use client";

import { useScrollFadeIn } from "@/hooks/useGsap";
import { COMPANY } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contacts() {
  const ref = useScrollFadeIn();

  return (
    <section id="contacts" className="py-24 md:py-32 section-padding bg-cream">
      <SectionHeading
        label="Раздел 11"
        title="Контактная информация"
        subtitle="Свяжитесь с нами для получения дополнительной информации, NDA или назначения встречи"
        center
      />

      <div ref={ref} className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <div>
            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Контактное лицо</h4>
            <p className="text-graphite font-medium">{COMPANY.contact.name}</p>
          </div>

          <div>
            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Телефон</h4>
            <a href={`tel:${COMPANY.contact.phone}`} className="text-graphite hover:text-gold transition-colors">
              {COMPANY.contact.phone}
            </a>
          </div>

          <div>
            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Email</h4>
            <a href={`mailto:${COMPANY.contact.email}`} className="text-graphite hover:text-gold transition-colors">
              {COMPANY.contact.email}
            </a>
          </div>

          <div>
            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">WeChat</h4>
            <p className="text-graphite">{COMPANY.contact.wechat}</p>
            <p className="text-xs text-gray-400 mt-1">(для быстрого добавления отсканируйте QR‑код)</p>
          </div>

          <div className="pt-4 border-t border-gray-200/60">
            <p className="text-xs text-gray-400 leading-relaxed">
              Данный сайт носит информационный характер и не является публичной офертой.
              Информация предоставлена в обобщённом виде. Детальные данные доступны после подписания NDA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
