import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import type { Service } from "@/lib/types";

export function FeaturedServices({ services }: { services: Service[] }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-l from-transparent via-mint/20 to-transparent" />
      <div className="pointer-events-none absolute start-1/2 top-20 size-[30rem] -translate-x-1/2 rounded-full bg-emerald/12 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="الأكثر طلباً"
          title="الفئات اللي بتنفد بسرعة"
          highlight="بتنفد بسرعة"
          description="أكثر ما بيتطلب عنا — جاهز للحجز الآن بضغطة، والكمية بتتجدد يومياً."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 flex justify-center">
          <ButtonLink href="/services" variant="outline" size="lg">
            شوف كل الخدمات
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
