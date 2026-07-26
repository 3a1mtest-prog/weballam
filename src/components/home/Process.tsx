import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "اختار خدمتك",
    body: "تصفّح الأقسام وأضف اللي بناسبك للسلة — الأسعار كلها واضحة قدامك بدون مفاجآت.",
  },
  {
    n: "02",
    title: "أكّد على الواتساب",
    body: "اضغط إتمام الطلب، وبنحوّلك على الواتساب وتفاصيل طلبك جاهزة كاملة برسالة واحدة.",
  },
  {
    n: "03",
    title: "ادفع بالطريقة اللي بتريحك",
    body: "بنتفق على طريقة الدفع الأنسب إلك، وبنبعتلك تأكيد استلام فوراً.",
  },
  {
    n: "04",
    title: "استلم واطمّن",
    body: "التنفيذ بيبدأ فوراً وبنتابع معك لحد ما تتأكد إن كل إشي وصل تمام.",
  },
];

export function Process() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="كيف بتطلب"
          title="أربع خطوات وطلبك بين إيديك"
          highlight="أربع خطوات"
          description="بدون تسجيل، بدون تعقيد، وبدون ما تنتظر حدا يرد عليك بكرة."
        />

        <ol className="relative mt-16 grid gap-6 lg:grid-cols-4">
          {/* connector line on wide screens */}
          <span className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-linear-to-l from-transparent via-neon/25 to-transparent lg:block" />

          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className="relative">
              <div className="group flex h-full flex-col items-center gap-4 text-center">
                <div className="relative grid size-14 shrink-0 place-items-center rounded-2xl border border-neon/25 bg-ink-950 font-display text-lg font-extrabold text-neon transition-all duration-500 group-hover:scale-110 group-hover:bg-neon group-hover:text-ink-950 group-hover:shadow-[0_0_36px_-6px_rgba(34,255,136,0.8)]">
                  {step.n}
                </div>
                <h3 className="text-base font-extrabold text-offwhite">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
