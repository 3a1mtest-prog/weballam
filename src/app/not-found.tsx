import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { site, waLink } from "@/config/site";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80vh] place-items-center overflow-hidden px-4 py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-aurora" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid opacity-30" />

      <div className="text-center">
        <LogoMark className="mx-auto h-20 w-auto opacity-60 drop-shadow-[0_0_40px_rgba(34,255,136,0.35)]" />

        <p className="mt-8 font-display text-7xl font-extrabold text-gradient-neon sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 text-2xl font-extrabold text-offwhite sm:text-3xl">
          الصفحة اللي بتدوّر عليها مش موجودة
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-fg-muted">
          يمكن الرابط تغيّر أو الخدمة انسحبت من المتجر. رجّاع للرئيسية أو تصفّح
          كل الخدمات المتاحة.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" size="lg">
            الرجوع للرئيسية
          </ButtonLink>
          <ButtonLink href="/services" variant="outline" size="lg">
            تصفّح الخدمات
          </ButtonLink>
          <ButtonLink
            href={waLink(`مرحباً ${site.name} 👋 بدوّر على خدمة ومش لاقيها`)}
            external
            variant="whatsapp"
            size="lg"
          >
            اسأل على واتساب
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
