import { Plus } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "هل بتطلبوا كلمة المرور تبعت حسابي؟",
    a: "لا إطلاقاً لخدمات المتابعين واللايكات والمشاهدات — بنحتاج اليوزر أو رابط الحساب فقط والحساب لازم يكون عام. الخدمات الوحيدة اللي بتحتاج وصول للحساب هي استرجاع الحسابات وبعض التوثيقات، وبنشرحلك بالتفصيل قبلها.",
  },
  {
    q: "قديش بياخد الطلب وقت لحد ما يوصل؟",
    a: "أغلب الخدمات بتبدأ خلال 5 إلى 30 دقيقة من تأكيد الدفع. الاشتراكات والشحن بيوصلوا خلال دقائق، أما خدمات التصميم والهوية فمدتها من 3 لـ 20 يوم حسب حجم الشغل، ومكتوبة على صفحة كل خدمة.",
  },
  {
    q: "شو طرق الدفع المتاحة؟",
    a: "بنتفق على الطريقة الأنسب إلك عبر الواتساب — تحويل بنكي، محافظ إلكترونية، أو أي وسيلة متاحة عندك. بنبعتلك تأكيد استلام فوري بعد الدفع.",
  },
  {
    q: "شو بصير إذا نقصت المتابعين بعد فترة؟",
    a: "أغلب خدمات المتابعين عليها ضمان تعويض من 30 لـ 60 يوم. لو لاحظت نقص خلال فترة الضمان، راسلنا برقم الطلب وبنعوّض النقص مجاناً بدون أي أسئلة.",
  },
  {
    q: "بتشتغلوا مع عملاء من برا فلسطين؟",
    a: "أكيد. أغلب خدماتنا رقمية بالكامل وبتوصل لأي مكان بالعالم. خدمات باقات الاتصالات فقط هي المحصورة بالشبكات المحلية.",
  },
  {
    q: "بقدر أطلب خدمة مش موجودة بالموقع؟",
    a: "طبعاً. راسلنا على الواتساب واحكيلنا شو بدك بالضبط، وإذا بنقدر نوفرها بنبعتلك عرض سعر خلال ساعات.",
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
