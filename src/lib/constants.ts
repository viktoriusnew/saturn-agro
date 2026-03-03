export const COMPANY = {
  name: "ООО «Сатурн-Агро»",
  nameEn: "Saturn-Agro LLC",
  region: "Волгоградская область, Россия",
  regionEn: "Volgograd Region, Russia",
  since: 2008,
  contact: {
    name: "Бушинов Сергей Вячеславович",
    phone: "+7-916-622-22-70",
    email: "saturnagro96@mail.ru",
    wechat: "Sergey BSV",
  },
};

export const KEY_FACTS = {
  landBank: { value: 22002.96, unit: "га", label: "Земельный банк" },
  owned: { value: 9502, unit: "га", label: "В собственности" },
  leased: { value: 12501, unit: "га", label: "Долгосрочная аренда" },
  infrastructure: { value: 28000, unit: "м²", label: "Инфраструктура" },
  revenue: { min: 1.25, max: 1.45, unit: "млрд ₽", label: "Выручка" },
  ebitda: { min: 420, max: 600, unit: "млн ₽", label: "EBITDA" },
  dealShare: { value: 49, unit: "%", label: "Доля" },
  dealInvestment: { value: 3, unit: "млрд ₽", label: "Инвестиции" },
};

export const STRATEGIC_POINTS = [
  {
    icon: "land",
    title: "22 002,96 га",
    description: "Консолидированный земельный банк с плодородными чернозёмами",
  },
  {
    icon: "location",
    title: "Север Волгоградской области",
    description: "Зона наиболее плодородных земель региона с благоприятным климатом",
  },
  {
    icon: "water",
    title: "Река Дон",
    description: "Близость к крупному водному ресурсу — потенциал промышленного орошения",
  },
  {
    icon: "building",
    title: "28 000+ м²",
    description: "Полная производственная инфраструктура: склады, сушка, техника, нефтебаза",
  },
  {
    icon: "calendar",
    title: "С 2008 года",
    description: "Устойчивая операционная деятельность с подтверждёнными финансовыми показателями",
  },
  {
    icon: "chart",
    title: "1,25–1,45 млрд ₽",
    description: "Нормализованная годовая выручка, EBITDA 420–600 млн ₽",
  },
  {
    icon: "crop",
    title: "12+ культур",
    description: "Диверсификация снижает климатические и ценовые риски",
  },
];

export const CROPS = [
  { name: "Пшеница", icon: "🌾" },
  { name: "Подсолнечник", icon: "🌻" },
  { name: "Соя", icon: "🫘" },
  { name: "Рапс", icon: "🌿" },
  { name: "Кукуруза", icon: "🌽" },
  { name: "Ячмень", icon: "🌾" },
  { name: "Горох", icon: "🟢" },
  { name: "Нут", icon: "🫛" },
  { name: "Чечевица", icon: "🟤" },
  { name: "Сорго", icon: "🌱" },
  { name: "Бахчевые", icon: "🍈" },
  { name: "Чеснок", icon: "🧄" },
];

export const INFRASTRUCTURE_ITEMS = [
  { label: "Складские комплексы", icon: "warehouse" },
  { label: "Токовые площадки", icon: "grain" },
  { label: "Сушильно-очистительный комплекс", icon: "dryer" },
  { label: "Ремонтная база", icon: "wrench" },
  { label: "Парк современной техники", icon: "tractor" },
  { label: "Нефтебаза", icon: "fuel" },
  { label: "Автозаправочный пункт", icon: "gas" },
  { label: "Административные здания", icon: "office" },
];

export const ENGINEERING = [
  "Промышленное электроснабжение",
  "Газоснабжение",
  "Технологическое и хозяйственное водоснабжение",
];

export const GROWTH_STRATEGY = [
  {
    id: "irrigation",
    title: "Орошение",
    subtitle: "Рост урожайности +30–60%",
    description:
      "Внедрение систем промышленного орошения благодаря расположению у реки Дон. Увеличение валового сбора, расширение линейки культур, переход к интенсивной модели земледелия.",
    icon: "💧",
  },
  {
    id: "livestock",
    title: "Молочное животноводство",
    subtitle: "МТФ от 2 000 голов КРС",
    description:
      "Создание молочно-товарной фермы. Использование собственной кормовой базы, диверсификация доходов, формирование стабильного денежного потока.",
    icon: "🐄",
  },
  {
    id: "processing",
    title: "Переработка",
    subtitle: "Рост добавленной стоимости",
    description:
      "Развитие молокоперерабатывающего направления и завод глубокой переработки сельхозпродукции. Вертикально интегрированная модель.",
    icon: "🏭",
  },
];

export const TIMELINE = [
  { months: "0–3", label: "Структурирование сделки", description: "NDA, Due Diligence, согласование условий" },
  { months: "3–6", label: "Закрытие сделки", description: "Оформление доли, начало совместной работы" },
  { months: "6–12", label: "Запуск инвестпроектов", description: "Проектирование орошения, подготовка МТФ" },
  { months: "12–24", label: "Реализация стратегии", description: "Строительство, выход на новые мощности" },
];

export const NAV_ITEMS = [
  { id: "section-1", label: "Общая характеристика" },
  { id: "section-2", label: "География" },
  { id: "section-3", label: "Земельный банк" },
  { id: "section-4", label: "Производственный профиль" },
  { id: "section-5", label: "Инфраструктура" },
  { id: "section-6", label: "Финансы" },
  { id: "section-7", label: "Стратегия развития" },
  { id: "section-8", label: "Уникальность" },
  { id: "section-9", label: "Форма сотрудничества" },
  { id: "section-10", label: "Статус проекта" },
  { id: "contacts", label: "Контакты" },
];
