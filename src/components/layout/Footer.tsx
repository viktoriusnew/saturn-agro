import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-graphite border-t border-white/5 py-8 section-padding">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm font-medium">Сатурн-Агро</span>
          <span className="text-white/20">|</span>
          <span className="text-white/30 text-xs">{COMPANY.region}</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} {COMPANY.name}. Все права защищены.
          </p>
          <p className="text-white/10 text-[10px]">
            Обновлено: {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>
      </div>
    </footer>
  );
}
