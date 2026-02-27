# Project Instructions — Saturn Agro

## Project Overview
Корпоративный сайт-лендинг для инвестиционной презентации агропромышленного актива ООО «Сатурн-Агро».

**Production URL:** https://saturn-agro.com

## Technology Stack
- **Next.js 16** (App Router, SSR)
- **Remotion** — программная генерация видео
- **TypeScript**
- **Tailwind CSS 4**
- **GSAP** + ScrollTrigger — скролл-анимации
- **Framer Motion** — hover-эффекты
- **Lottie React**

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # RootLayout, мета, шрифты
│   ├── page.tsx            # Сборка всех секций
│   └── globals.css         # Tailwind 4, дизайн-система
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header, навигация
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
├── hooks/
│   └── useGsap.ts          # useScrollFadeIn, useCountUp
└── lib/
    └── constants.ts         # Данные, цифры, тексты
```

## Design System
| Color | HEX | Usage |
|-------|-----|-------|
| Graphite | #1a1a2e | Основной тёмный фон |
| Forest | #16423C | Акцент зелёный |
| Gold | #C4A35A | Акцент золото, CTA |
| Cream | #FAFAF8 | Светлый фон секций |

**Font:** Inter (Variable, локальный woff2)

## Available Commands
- `npm run dev` — Запуск dev-сервера (порт 3000)
- `npm run build` — Продакшен-сборка
- `npm start` — Запуск продакшен-сервера
- `npm run remotion:studio` — Remotion Studio

## Deployment Workflow

### Автоматический деплой (GitHub Actions) — РЕКОМЕНДУЕТСЯ

Настроен автодеплой: при push в ветку `main` проект автоматически собирается и деплоится на VPS.

**Workflow файл:** `.github/workflows/deploy.yml`

**Процесс:**
1. Push в `main` → GitHub Actions запускается автоматически
2. Сборка проекта (`npm ci` + `npm run build`)
3. Деплой на VPS через SSH
4. Перезапуск systemd сервиса
5. Готово! (~1-2 минуты)

**Проверка статуса:**
GitHub → Actions → вкладка "Deploy to VPS"

### VPS конфигурация
- **IP:** 85.198.97.177
- **Пользователь:** root
- **Путь:** /root/saturn-agro
- **Сервис:** saturn-agro (systemd)

**Ручное управление (если нужно):**
```bash
systemctl status saturn-agro     # Статус
systemctl restart saturn-agro    # Перезапуск
journalctl -u saturn-agro -f     # Логи
```

### Local Development Workflow
1. Работай локально в OpenCode Desktop
2. Тестируй: `npm run dev`
3. Покажи пользователю изменения → жди подтверждения
4. Коммить: `git add . && git commit -m "feature"`
5. Push на GitHub: `git push origin main`
6. GitHub Actions автоматически деплоит (смотри статус в Actions)

## Documentation
- **docs/LAYOUT.md** — рекомендации по вёрстке и центрированию контента
- **README.md** — полная документация проекта

## Important Notes
- При изменениях блоков смотри docs/LAYOUT.md
- Видео Remotion рендерятся отдельно: `npx remotion render ...`
- Для продакшена используется Remotion Player (не `<video>`)
- Все тексты и данные хранятся в `src/lib/constants.ts`

## Integrations
- **Provider:** Kimi (Moonshot AI) через OpenCode Zen
- **Deployment:** VPS с systemd + Nginx + Let's Encrypt
- **Repository:** https://github.com/viktoriusnew/saturn-agro

## AI Assistant Guidelines
When working on this project:
1. Always check docs/LAYOUT.md before editing sections
2. Use design system colors (Graphite, Forest, Gold, Cream)
3. Test animations with GSAP and Framer Motion
4. For Remotion changes, test in Remotion Studio first
5. Run `npm run build` before committing to catch errors
6. Update constants.ts for content changes
7. Follow existing component patterns in src/components/
