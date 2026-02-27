"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useGsap";
import { COMPANY } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contacts() {
  const ref = useScrollFadeIn();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    wechat: "",
    purpose: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClasses =
    "w-full bg-transparent border border-gray-200/60 rounded-sm px-4 py-3 text-graphite text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <section id="contacts" className="py-24 md:py-32 section-padding bg-cream">
      <SectionHeading
        label="Раздел 11"
        title="Контактная информация"
        subtitle="Свяжитесь с нами для получения дополнительной информации, NDA или назначения встречи"
        center
      />

      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-sm border border-forest/20 p-12 text-center"
            >
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-graphite mb-2">Заявка отправлена</h3>
              <p className="text-gray-500">Мы свяжемся с вами в ближайшее время</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-sm border border-gray-200/60 p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Имя *"
                  required
                  className={inputClasses}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Компания"
                  className={inputClasses}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className={inputClasses}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Телефон / WeChat"
                  className={inputClasses}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <select
                className={`${inputClasses} appearance-none`}
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              >
                <option value="">Цель обращения</option>
                <option value="nda">Запросить NDA</option>
                <option value="dd">Начать Due Diligence</option>
                <option value="meeting">Назначить встречу</option>
                <option value="info">Получить информацию</option>
                <option value="other">Другое</option>
              </select>
              <Button variant="primary" size="md" className="w-full">
                Отправить заявку
              </Button>
              <p className="text-xs text-gray-400 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>

        <div className="lg:col-span-2 space-y-8">
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
