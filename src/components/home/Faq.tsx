import { Plus } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "كيف بتم عملية نقل اليوزر؟ وشو ضماني؟",
    a: "بنتفق على الوقت، وبنحرر اليوزر من الحساب القديم ونحجزه على حسابك بنفس اللحظة عشان ما يخطفه حدا. بنأكد معك قبل كل خطوة، وبعد التسليم اليوزر بيصير ملكك بضمان عدم استرجاع. للطلبات الكبيرة في وسيط ضمان متاح.",
  },
  {
    q: "شو الفرق بين اليوزر الرباعي شبه الثلاثي والرباعي العادي؟",
    a: "الاثنين أربع خانات، بس «شبه الثلاثي» بيحتوي حرف رفيع (زي l أو i أو j) بيخلي الاسم يبان ثلاثي للعين. يعني بتاخد مظهر الثلاثي النادر بجزء بسيط من سعره.",
  },
  {
    q: "بتطلبوا كلمة المرور تبعت حسابي؟",
    a: "لخدمة زيادة المتابعين لأ إطلاقاً — بنحتاج اليوزر بس والحساب لازم يكون عام أثناء التنفيذ. أما نقل اليوزر فبنشتغل معك مباشرة وبنشرحلك كل خطوة بتعملها أنت بنفسك.",
  },
  {
    q: "شو طرق الدفع المتاحة؟",
    a: "بنوفر طرق دفع متعددة — تحويل بنكي، محافظ إلكترونية، أو أي وسيلة متاحة عندك. بنتفق على الأنسب إلك عبر الواتساب وبنبعتلك تأكيد استلام فوري بعد الدفع.",
  },
  {
    q: "بقدر أشوف اليوزر أو الحساب قبل ما أدفع؟",
    a: "أكيد، وهاد شي أساسي عنا. بنبعتلك صور توثّق اليوزر، أو إحصائيات كاملة للحساب إذا كنت بتشتري حساب جاهز — وبعدها بتقرر.",
  },
  {
    q: "شو بصير إذا نقصت المتابعين بعد فترة؟",
    a: "خدمة المتابعين عليها ضمان تعويض ٣٠ يوم. لو لاحظت نقص خلال فترة الضمان، راسلنا برقم الطلب وبنعوّض النقص مجاناً بدون أي أسئلة.",
  },
  {
    q: "باقات سوا بتشحنوها لأي رقم؟",
    a: "بنشحن كل فئات باقات سوا، وبنفعّلها مباشرة على رقمك خلال دقائق. إذا مش متأكد أي باقة تناسب استخدامك، احكيلنا وبنساعدك تختار مجاناً.",
  },
  {
    q: "بقدر أطلب يوزر محدد مش موجود عندكم؟",
    a: "احكيلنا اليوزر اللي بدك إياه وبنشوف إذا بنقدر نوصله. إذا توفر بنبعتلك السعر، وإذا لأ بنحكيلك بصراحة بدل ما نضيّع وقتك.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="أسئلة شائعة"
          title="أسئلة بتيجينا كتير"
          highlight="بتيجينا كتير"
          description="لو سؤالك مش هون، راسلنا على الواتساب وبنرد عليك بدقائق."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50}>
              <details className="group overflow-hidden rounded-2xl border border-mint/10 bg-white/[0.025] backdrop-blur-md transition-colors open:border-neon/30 open:bg-neon/[0.04] hover:border-mint/25">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-start [&::-webkit-details-marker]:hidden">
                  <h3 className="text-sm font-bold text-offwhite transition-colors group-open:text-neon sm:text-base">
                    {faq.q}
                  </h3>
                  <Plus
                    className="size-5 shrink-0 text-neon transition-transform duration-300 group-open:rotate-45"
                    strokeWidth={2.2}
                  />
                </summary>
                <p className="border-t border-mint/10 px-6 py-5 text-sm leading-relaxed text-fg-muted">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
