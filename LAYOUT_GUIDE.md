# Спецификация центрирования и ширины экрана

## Общие принципы

В проекте используется единая система центрирования контента. **Важно:** не используйте `max-w-6xl` внутри разделов - это вызывает смещение контента влево!

## Ширина контейнера

- **section-padding**: 1200px (максимальная ширина контента)
- **max-w-6xl**: 1152px (72rem) - **НЕ ИСПОЛЬЗОВАТЬ** в разделах!
- Используйте: `w-full` или не указывайте max-width

## Структура раздела (правильная)

```tsx
<section
  ref={sectionRef}
  data-card-section
  className="relative h-screen w-full overflow-hidden"
  style={{ zIndex: XX }}
>
  {/* Фон (видео/картинка/цвет) */}
  <div className="absolute inset-0 bg-cover bg-center" />
  <div className="absolute inset-0 bg-white/XX" /> {/* Оверлей */}

  {/* Контент */}
  <div
    ref={contentRef}
    className="relative z-10 h-full flex flex-col justify-center section-padding"
  >
    {/* ❌ НЕПРАВИЛЬНО: max-w-6xl mx-auto */}
    {/* ✅ ПРАВИЛЬНО: w-full или просто без ограничения */}
    <div className="w-full">
      {/* Заголовок по центру */}
      <div className="animate-item text-center">
        <span className="inline-block text-forest text-sm font-medium tracking-[0.25em] uppercase border border-forest/30 px-4 py-2 rounded-sm">
          Раздел X
        </span>
      </div>

      <h2 className="animate-item text-center text-4xl md:text-5xl lg:text-6xl font-light text-graphite">
        ЗАГОЛОВОК РАЗДЕЛА
      </h2>

      {/* Контент раздела */}
    </div>
  </div>
</section>
```

## Примеры из существующих разделов

### ✅ Правильно (центрирование работает):
- **Hero.tsx**: Использует собственную структуру
- **GeneralInfo.tsx**: `<div className="max-w-6xl">` (без mx-auto, выравнивание по левому краю - ок)
- **LandBank.tsx**: `<div className="w-full max-w-6xl text-center">` + items-center
- **ProductionProfile.tsx**: `<div className="max-w-7xl mx-auto w-full">`
- **Strategy.tsx**: Полная ширина с grid

### ❌ Исправлено (было смещение):
- **GeoAdvantage.tsx**: Было `max-w-6xl mx-auto` → Стало `w-full`
- **Infrastructure.tsx**: Было `max-w-6xl mx-auto` → Стало `w-full`
- **Finance.tsx**: Было `max-w-6xl mx-auto` → Стало `w-full`
- **Uniqueness.tsx**: Было `max-w-6xl mx-auto` → Стало `w-full`
- **Cooperation.tsx**: Было `max-w-6xl mx-auto` → Стало `w-full`

## Правила для новых разделов

1. **Всегда** используйте `section-padding` для внешнего контейнера
2. **Никогда** не используйте `max-w-6xl mx-auto` вместе
3. Для центрирования используйте:
   - `text-center` для текста
   - `flex flex-col items-center` для flex-контейнеров
   - `mx-auto` только для конкретных элементов (не для основного контейнера)
4. Используйте `w-full` чтобы растянуть контент на всю ширину section-padding

## Палитра цветов

| Цвет | HEX | Использование |
|------|-----|---------------|
| Graphite | #1a1a2e | Тёмный фон, заголовки |
| Forest | #16423C | Зелёный акцент, основной бренд |
| Gold | #C4A35A | Золотой акцент, CTA |
| Cream | #FAFAF8 | Светлый фон |

## Анимации

- Используйте GSAP ScrollTrigger для анимаций появления
- Класс `.animate-item` для элементов с анимацией
- Stagger: 0.1-0.15 между элементами

## Дата обновления

Последнее обновление: 08.03.2026
Исправлено центрирование в разделах 2, 5, 6, 8, 9
