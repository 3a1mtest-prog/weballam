/**
 * Central brand + contact configuration for AL-GHAZAWE STORE.
 * Everything the site shows about "who we are" comes from here.
 */

export const site = {
  name: "غزاوي ستور",
  nameEn: "AL-GHAZAWE STORE",
  shortName: "AL-GHAZAWE",
  tagline: "نصنع حضورك الرقمي ونحول أفكارك إلى نجاح",
  taglineEn: "We build your digital presence and turn your ideas into success",
  description:
    "غزاوي ستور — متجرك لبيع يوزرات إنستقرام الرباعية والمميزة، يوزرات سناب شات وتيك توك، حسابات سوشيال ميديا، نقل اليوزرات وزيادة المتابعين، باقات سوا وتطبيقات بلس. نقل آمن، طرق دفع متعددة، وتسليم بيبدأ خلال دقائق.",
  url: "https://www.alghazawe.store",
  locale: "ar_PS",

  contact: {
    /** Digits only, international format — used to build wa.me links. */
    whatsapp: "970599067192",
    phoneDisplay: "+970 59 906 7192",
    email: "info@alghazawe.store",
    address: "فلسطين — خدمة عن بُعد لكل الدول العربية",
    hours: "متاحون يومياً من 9:00 صباحاً حتى 12:00 منتصف الليل",
  },

  social: {
    instagram: "https://instagram.com/alghazawe.store",
    tiktok: "https://tiktok.com/@alghazawe.store",
    telegram: "https://t.me/alghazawe_store",
    facebook: "https://facebook.com/alghazawe.store",
  },

  /** Headline numbers shown in the hero strip. */
  stats: [
    { value: "+12K", label: "طلب مكتمل" },
    { value: "+8K", label: "عميل سعيد" },
    { value: "٩٩٪", label: "نسبة الرضا" },
    { value: "24/7", label: "دعم متواصل" },
  ],
} as const;

/** Builds a pre-filled WhatsApp link. */
export function waLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
