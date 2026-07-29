# weballam

مشروع [Next.js 16](https://nextjs.org) نظيف — TypeScript + Tailwind CSS v4 + App Router.

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

## البنية

```
src/app/
├── layout.tsx    الـ root layout (مطلوب — يحتوي html و body)
├── page.tsx      الصفحة الرئيسية /
└── globals.css   استيراد Tailwind + متغيّرات الثيم
```

ابدأ التعديل من `src/app/page.tsx`.

## ملاحظات

- الـ import alias مضبوط على `@/*` → `./src/*`.
- Turbopack هو الـ bundler الافتراضي في Next.js 16. للرجوع إلى Webpack: `next dev --webpack`.
- `next build` ما بعد يشغّل الـ linter تلقائياً — أضف سكربت لينتر (ESLint أو Biome) لو احتجت.
- قبل كتابة أي كود، راجع التوثيق المرفق مع النسخة المثبتة في `node_modules/next/dist/docs/` — فيه تغييرات كاسرة عن النسخ الأقدم.
