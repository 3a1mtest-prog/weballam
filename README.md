# weballam — portfolio

بورتفوليو مطوّر ويب بصفحة واحدة، مبني على **Next.js 16 + TypeScript + Tailwind CSS v4**.
التصميم مأخوذ من عرض بورتفوليو ٢٠٢٦: أسود + بنفسجي كهربائي، عناوين كروم معدنية، وشريط
فاصل متكرّر بين الأقسام.

## التشغيل

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # بناء الإنتاج
npm run start      # تشغيل نسخة الإنتاج
npm run typecheck  # فحص الأنواع
```

## تعديل المحتوى

**كل** النصوص والروابط في ملف واحد:

```
src/config/portfolio.ts
```

فيه: الاسم والمهنة والسنة، بيانات التواصل والحسابات، فهرس الأقسام، النبذة، الخدمات،
الضمانات، المشاريع، قائمة الأدوات، ودراسات الحالة. عدّل الملف وكل الموقع يتغيّر.

### إضافة صورتك

حط الصورة في `public/` (PNG بخلفية شفافة أفضل — الغلاف مصمّم حولها) وعدّل:

```ts
// src/config/portfolio.ts
portrait: "/portrait.png",
```

وهي `null` يظهر عمود بنفسجي مضيء مكانها، وهو المكان اللي النص متكوّن حوله أصلاً.

### إضافة صور للمشاريع

كل مشروع بياخد `image` اختياري:

```ts
{ name: "STOREFRONT", tag: "Next.js · Stripe", summary: "...", image: "/work/storefront.png" }
```

بدون صورة تُرسم لوحة بنفسجية عليها اسم المشروع.

## البنية

```
src/
├── app/
│   ├── layout.tsx        الخطوط (Archivo / Inter / Dancing Script) + الميتاداتا
│   ├── page.tsx          ترتيب الأقسام من فوق لتحت
│   └── globals.css       ألوان الهوية وأدوات chrome / glow / frame / pill
├── config/portfolio.ts   كل المحتوى
└── components/
    ├── Divider.tsx       شريط PORTFOLIO ————— التوقيع
    ├── SectionTitle.tsx  لوحة العنوان الكبيرة بين الأقسام
    ├── Wordmark.tsx      التوقيع بالخط اليدوي
    └── sections/         Cover · IndexSlide · About · Services · Guarantees
                          Projects · TechStack · CaseStudies · Closing
```

## الهوية البصرية

| اللون | القيمة |
| --- | --- |
| Ink | `#000000` |
| Violet Deep | `#1a0442` |
| Violet Core | `#4c1d95` |
| Violet Glow | `#7c3aed` |
| Violet Bright | `#a855f7` |
| Silver | `#e8e8ec` |

الأدوات المعرّفة في `globals.css`:

| الأداة | الاستخدام |
| --- | --- |
| `chrome` | نص معدني على خلفية سوداء |
| `chrome-on-violet` | نص معدني على لوحة بنفسجية مضيئة |
| `glow-violet` | توهج بنفسجي خلف المحتوى |
| `panel-violet` | لوحة بنفسجية كاملة العرض (الغلاف وفواصل الأقسام) |
| `frame` | كرت بحدود رفيعة فاتحة |
| `pill-violet` | زر pill بتدرّج بنفسجي |

## ملاحظات

- الـ import alias مضبوط على `@/*` → `./src/*`.
- الموقع static بالكامل — `next build` يولّد `/` كصفحة ثابتة.
- دعم `prefers-reduced-motion`، رابط تخطي للمحتوى، وتركيز واضح بلوحة المفاتيح.
- قبل كتابة أي كود، راجع التوثيق المرفق مع النسخة المثبتة في `node_modules/next/dist/docs/`.
