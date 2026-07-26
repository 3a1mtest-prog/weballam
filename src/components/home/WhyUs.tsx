import {
  CreditCard,
  Eye,
  Headphones,
  Lock,
  RefreshCcw,
  Zap,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: CreditCard,
    title: "طرق دفع متعددة وآمنة",
    body: "تحويل بنكي، محافظ إلكترونية، أو أي وسيلة متاحة عندك — بتختار الأريح إلك وبنبعتلك تأكيد استلام فوري.",
  },
  {
    icon: Lock,
    title: "نقل ملكية موثّق",
    body: "كل عملية نقل يوزر بتتوثق خطوة بخطوة، وبنأكد معك قبل أي إجراء. وسيط ضمان متاح للطلبات الكبيرة.",
  },
  {
    icon: Eye,
    title: "تشوف قبل ما تدفع",
    body: "بنبعتلك صور اليوزر أو إحصائيات الحساب قبل الشراء. ما في إشي بتدفع فيه وأنت مش شايفه.",
  },
  {
    icon: Zap,
    title: "تسليم بيبدأ بدقائق",
    body: "شحن باقات سوا خلال ١٠ دقائق، نقل اليوزرات خلال ساعة، والمتابعين بيبلشوا بعد ٥ دقائق من التأكيد.",
  },
  {
    icon: RefreshCcw,
    title: "ضمان بعد التسليم",
    body: "اليوزرات بضمان عدم استرجاع، والمتابعين بضمان تعويض النقص ٣٠ يوم. لاحظت إشي؟ راسلنا برقم الطلب.",
  },
  {
    icon: Headphones,
    title: "دعم لا ينام",
    body: "رد سريع على الواتساب على مدار اليوم. اسأل قد ما بدك قبل ما تطلب — ما بنزهق ولا بنستعجلك.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-brand-pattern opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink-950 via-transparent to-ink-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="مميزات المتجر"
          title="ليش الناس بتشتري من عنا"
          highlight="بتشتري من عنا"
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
