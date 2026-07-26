import type { Metadata } from "next";
import { Compass, Gem, HeartHandshake, Target } from "lucide-react";

import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Process } from "@/components/home/Process";
import { LogoMark } from "@/components/brand/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "غزاوي ستور — قصتنا، قيمنا، وكيف بنشتغل. متجر متخصص ببيع اليوزرات المميزة والحسابات وباقات سوا، بيخدم أكثر من 8 آلاف عميل.",
};

const values = [
  {
    icon: Target,
    title: "الصدق قبل البيع",
    body: "إذا اليوزر اللي بدك إياه سعره مش منطقي أو في أرخص منه بنفس الجودة، بنحكيلك. سمعتنا أهم من أي طلب.",
  },
  {
    icon: Gem,
    title: "ما بنبيع إشي ما بنضمنه",
    body: "كل يوزر بنعرضه موثّق ومتأكدين منه. لو في أي شك بمصدره، ما بينزل عنا أصلاً.",
  },
  {
    icon: HeartHandshake,
    title: "العلاقة مش بتنتهي بالتسليم",
    body: "بنتابع معك بعد الطلب، وبنعوّض أي نقص خلال فترة الضمان بدون جدال.",
  },
  {
    icon: Compass,
    title: "تخصص مش تشتيت",
    body: "بنشتغل بيوزرات وحسابات وباقات سوا وبس. التخصص هو اللي بيخلينا نعرف السوق أحسن من غيرنا.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title="غزاوي ستور — متجر اليوزرات المميزة"
        highlight="اليوزرات المميزة"
        description={site.tagline}
        breadcrumbs={[
          { href: "/", label: "الرئيسية" },
          { href: "/about", label: "من نحن" },
        ]}
      />

      {/* ── Story ── */}
      <section className="relative pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-offwhite sm:text-3xl">
              بدأنا من سؤال بسيط
            </h2>
            <div className="mt-6 space-y-5 text-[0.95rem] leading-loose text-fg-muted">
              <p>
                ليش شراء يوزر مميز لازم يكون مغامرة؟ بتلاقي حساب مجهول بيعرض
                يوزر، بيطلب منك تدفع الأول، وبعدها إما بيختفي أو بيسترجع اليوزر
                بعد أسبوع. وإذا سألت عن التفاصيل بيرد عليك بعد يومين.
              </p>
              <p>
                من هون بدأ <strong className="text-offwhite">غزاوي ستور</strong>:
                يوزرات موثّقة بتشوفها قبل ما تدفع، نقل ملكية بنشرحلك كل خطوة
                فيه، سعر مكتوب قدامك، ورد بيوصلك بدقائق مش بأيام.
              </p>
              <p>
                واليوم توسعنا لكل اللي بيلزم صاحب الحساب: يوزرات إنستقرام وسناب
                وتيك توك، حسابات جاهزة بمتابعين، نقل اليوزرات وزيادة المتابعين،
                باقات سوا وتطبيقات بلس. أكثر من ٨ آلاف عميل تعاملوا معنا، وكل
                واحد فيهم بيرجع لأنه لقي التعامل مريح والكلام صادق.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {site.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-mint/10 bg-white/[0.025] p-4 text-center"
                >
                  <dd className="font-display text-2xl font-extrabold text-neon">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs text-fg-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-5">
            <div className="relative isolate overflow-hidden rounded-[2rem] border border-mint/12 bg-ink-800 p-12">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-brand-pattern opacity-60" />
              <div className="pointer-events-none absolute inset-0 -z-10 animate-pulse-glow bg-[radial-gradient(circle_at_50%_40%,rgba(34,255,136,0.22),transparent_65%)]" />

              <LogoMark className="mx-auto h-auto w-40 drop-shadow-[0_0_46px_rgba(34,255,136,0.45)]" />

              <p className="brand-lockup mt-8 text-center text-base text-offwhite">
                AL-GHAZAWE
              </p>
              <p className="brand-lockup mt-2 text-center text-[0.6rem] text-neon">
                — Store —
              </p>
              <p className="mt-6 text-center text-sm leading-relaxed text-fg-muted">
                {site.tagline}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="قيمنا"
            title="أربع قواعد ما بنتنازل عنها"
            highlight="ما بنتنازل عنها"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="group flex h-full gap-5 rounded-3xl border border-mint/10 bg-white/[0.025] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-neon/30">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-neon/20 bg-neon/[0.08] text-neon transition-all duration-500 group-hover:bg-neon group-hover:text-ink-950">
                    <Icon className="size-6" strokeWidth={1.7} />
                  </span>
                  <span>
                    <h3 className="text-lg font-extrabold text-offwhite">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {body}
                    </p>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CtaBanner />
    </>
  );
}
