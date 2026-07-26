import {
  BadgeCheck,
  Eye,
  Headphones,
  LineChart,
  Lock,
  Rocket,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* The four pillars from the identity guide, expanded into concrete promises. */
const pillars = [
  {
    icon: Eye,
    title: "رؤية واضحة",
    body: "قبل ما نبيعك خدمة، منفهم هدفك. بنقترح اللي بيخدمك فعلاً — حتى لو كان أرخص من اللي جاي تطلبه.",
  },
  {
    icon: LineChart,
    title: "استراتيجيات ذكية",
    body: "مش أرقام على الفاضي. كل خدمة مبنية على خطة توصلك لجمهور حقيقي بيتفاعل ويشتري.",
  },
  {
    icon: Rocket,
    title: "نتائج ملموسة",
    body: "تسليم بيبدأ خلال دقائق، ومتابعة معك لحد ما تشوف الفرق بعينك على حسابك.",
  },
  {
    icon: BadgeCheck,
    title: "حضور رقمي قوي",
    body: "من الهوية البصرية للمحتوى للإعلانات — بنبني حضورك كنظام متكامل، مش قطع متفرقة.",
  },
  {
    icon: Lock,
    title: "أمان مضمون",
    body: "ما بنطلب منك كلمة المرور أبداً في خدمات المتابعين. بياناتك تبقى عندك، والخدمة تشتغل.",
  },
  {
    icon: Headphones,
    title: "دعم لا ينام",
    body: "رد سريع على الواتساب على مدار اليوم، ومتابعة طلبك من لحظة التأكيد لحد التسليم.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-brand-pattern opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink-950 via-transparent to-ink-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ليش غزاوي ستور"
          title="لأن الفرق بيبان بالتفاصيل"
          highlight="بالتفاصيل"
          description="مش أول متجر بتشوفه، بس على الأغلب آخر واحد بتتعامل معه. هاي أسبابنا."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-mint/10 bg-ink-900/60 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-neon/30">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-l from-transparent via-neon/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="grid size-12 place-items-center rounded-2xl border border-neon/20 bg-neon/[0.08] text-neon transition-all duration-500 group-hover:bg-neon group-hover:text-ink-950">
                  <Icon className="size-6" strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-offwhite">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
