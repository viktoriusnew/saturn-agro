# Сатурн-Агро — Корпоративный сайт-лендинг

Инвестиционная презентация агропромышленного актива ООО «Сатурн-Агро».

**Сайт:** https://saturn-agro.com

## Стек

- **Next.js 16** (App Router, SSR)
- **Remotion** — программная генерация видео (композиции в `remotion/`)
- **TypeScript**
- **Tailwind CSS 4**
- **GSAP** + ScrollTrigger — скролл-анимации, countUp, SVG-отрисовка
- **Framer Motion** — hover-эффекты, переходы
- **Lottie React** — (подготовлено для JSON-анимаций)
- **HTML5 Video** — hero-фон + видео-плеер

## Структура секций (12 блоков)

1. **Hero** — видео-фон, заголовок, ключевые цифры, 2 CTA
2. **Почему стратегический актив** — 7 карточек с SVG-иконками
3. **География** — SVG-карта Волгоградской области, река Дон
4. **Земельный банк** — 22 002,96 га
5. **Культуры** — сетка 12 культур
6. **Инфраструктура** — 8 объектов, инженерное обеспечение
7. **Финансы** — выручка, EBITDA, дисклеймер
8. **Стратегия роста** — 3 направления + схема агрокластера
9. **Сделка** — 49% / 3 млрд / направления инвестиций
10. **Статус проекта** — таймлайн 3-6-12-24 мес
11. **Видео-презентация** — HTML5 плеер с lazy-load
12. **Контакты** — форма заявки, WeChat, телефон, email

## Документация

- **[docs/LAYOUT.md](docs/LAYOUT.md)** — рекомендации по вёрстке и центрированию контента (использовать при изменениях блоков или редактировании).

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx          # RootLayout, мета, шрифты
│   ├── page.tsx            # Сборка всех секций
│   └── globals.css         # Tailwind 4, дизайн-система, анимации
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header, навигация по якорям
│   │   └── Footer.tsx
│   ├── sections/           # 12 секций лендинга
│   │   ├── Hero.tsx
│   │   ├── WhyStrategic.tsx
│   │   ├── GeoMap.tsx
│   │   ├── LandBank.tsx
│   │   ├── Crops.tsx
│   │   ├── Infrastructure.tsx
│   │   ├── Finance.tsx
│   │   ├── Strategy.tsx
│   │   ├── Deal.tsx
│   │   ├── ProjectStatus.tsx
│   │   ├── VideoPresentation.tsx
│   │   └── Contacts.tsx
│   └── ui/                 # UI-компоненты
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionHeading.tsx
├── hooks/
│   └── useGsap.ts          # useScrollFadeIn, useCountUp, useDrawSVG
└── lib/
    └── constants.ts         # Все данные, цифры, тексты
```

## Команды

```bash
npm run dev              # Запуск dev-сервера (порт 3000)
npm run build            # Продакшен-сборка
npm start                # Запуск продакшен-сервера
npm run remotion:studio  # Remotion Studio (превью анимаций)
```

**Рендер видео Remotion:**
```bash
npx remotion render remotion/index.ts <CompositionId> public/animations/<имя>.mp4
```

**Вставка на сайт:** использовать Remotion Player (не `<video>`), см. скил `remotion-saturn-agro`.

## Деплой на VPS

Сервис управляется через systemd:

```bash
systemctl status saturn-agro     # Статус
systemctl restart saturn-agro    # Перезапуск
systemctl stop saturn-agro       # Остановка
journalctl -u saturn-agro -f     # Логи
```

Nginx: `/etc/nginx/sites-available/saturn-agro`  
SSL: Let's Encrypt (автообновление certbot)

## Пересборка после изменений

```bash
cd /root/saturn-agro
npm run build
systemctl restart saturn-agro
```

## Дизайн-система

| Цвет | HEX | Применение |
|------|-----|------------|
| Graphite | #1a1a2e | Основной тёмный фон |
| Forest | #16423C | Акцент зелёный |
| Gold | #C4A35A | Акцент золото, CTA |
| Cream | #FAFAF8 | Светлый фон секций |

**Шрифт:** Inter (Variable, локальный woff2)

## Видео

| Файл | Размер | Назначение |
|------|--------|------------|
| hero.mp4 | 9 МБ | Фон Hero (autoplay, muted, loop) |
| hero-poster.jpg | 322 КБ | Poster для hero |
| presentation.mp4 | 44 МБ | Видео-плеер перед контактами |
