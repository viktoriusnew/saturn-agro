# Saturn Agro

Корпоративный инвестиционный лендинг для проекта ООО «Сатурн-Агро».

Продакшен: <https://saturn-agro.com>

## Что в проекте сейчас

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- GSAP + ScrollTrigger (скролл-анимации и card stacking)
- Framer Motion (hover/press эффекты)
- Remotion + `@remotion/player` (таймлайн-анимация)
- Локальные ассеты: видео, изображения, шрифт Inter

Текущая страница собирается в `src/app/page.tsx` из 10 блоков:

1. Hero
2. GeneralInfo
3. GeoAdvantage
4. LandBank
5. ProductionProfile
6. Infrastructure
7. Finance
8. Strategy
9. Uniqueness
10. Cooperation

## Структура репозитория

```text
.github/workflows/
  deploy.yml                 # автодеплой на VPS при push в main

docs/
  LAYOUT.md                  # правила по верстке и центровке контента

public/
  animations/                # mp4-ролики, в т.ч. для секций
  fonts/
  images/
  video/

remotion/
  index.ts
  Root.tsx
  Compositions/
    HelloWorld.tsx
    Section01Timeline.tsx

src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    CardStackContainer.tsx
    sections/
      Hero.tsx
      GeneralInfo.tsx
      GeoAdvantage.tsx
      LandBank.tsx
      ProductionProfile.tsx
      Infrastructure.tsx
      Finance.tsx
      Strategy.tsx
      Uniqueness.tsx
      Cooperation.tsx
    ui/
      Button.tsx
      Card.tsx
      SectionHeading.tsx
      TimelinePlayer.tsx
  hooks/
    useGsap.ts
    useGsapContext.ts
  lib/
    constants.ts
```

## Локальный запуск

Требуется Node.js 20+.

```bash
npm ci
npm run dev
```

Открыть: <http://localhost:3000>

## Команды

```bash
npm run dev              # dev-сервер
npm run build            # production build
npm run start            # запуск production-сервера
npm run lint             # ESLint
npm run remotion:studio  # Remotion Studio
npm run remotion:render  # render через remotion/index.ts
```

Пример ручного рендера композиции:

```bash
npx remotion render remotion/index.ts Section01Timeline public/animations/section01-timeline.mp4
```

## Автодеплой на VPS

Автодеплой настроен в `.github/workflows/deploy.yml`.

Триггер:
- push в ветку `main`

Что делает workflow на VPS:
1. Переходит в `/root/saturn-agro`
2. Обновляет код из `origin/main`
3. Пересобирает проект (`npm ci`, `npm run build`)
4. Перезапускает systemd-сервис `saturn-agro`

Нужные GitHub Secrets:
- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`

## Ручной деплой на сервере

```bash
cd /root/saturn-agro
git fetch origin main
git reset --hard origin/main
npm ci
npm run build
systemctl restart saturn-agro
```

Проверка:

```bash
systemctl status saturn-agro
journalctl -u saturn-agro -f
```

## Где править контент

- Контент секций: `src/components/sections/*.tsx`
- Общие константы и данные: `src/lib/constants.ts`
- Глобальные токены/стили: `src/app/globals.css`

Для правок layout/spacing см. `docs/LAYOUT.md`.
