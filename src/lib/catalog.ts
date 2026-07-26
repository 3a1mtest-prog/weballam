import type { Category, Service, Testimonial } from "./types";

/**
 * The storefront catalog.
 *
 * This is the single source of truth used to seed Supabase (see
 * `supabase/seed.sql`) and the fallback the site renders from when Supabase
 * credentials are not configured, so the store is never empty.
 */

export const categories: Category[] = [
  {
    id: "cat-ig-usernames",
    slug: "instagram-usernames",
    name: "يوزرات إنستقرام",
    tagline: "رباعية • نادرة • مميزة",
    description:
      "أكبر تشكيلة يوزرات إنستقرام رباعية ومميزة — شبه ثلاثية، مكررة، شبه أرقام، وأحرف كاملة. نقل ملكية آمن وموثّق خطوة بخطوة.",
    icon: "AtSign",
    sort_order: 1,
    is_active: true,
  },
  {
    id: "cat-ig-services",
    slug: "instagram-services",
    name: "خدمات إنستقرام",
    tagline: "نقل يوزر • زيادة متابعين",
    description:
      "نقل اليوزر من حساب لحساب بأمان تام، وزيادة متابعين بجودة عالية وضمان تعويض النقص.",
    icon: "TrendingUp",
    sort_order: 2,
    is_active: true,
  },
  {
    id: "cat-snap-usernames",
    slug: "snapchat-usernames",
    name: "يوزرات سناب شات",
    tagline: "أسماء قصيرة ومميزة",
    description:
      "بيع يوزرات سناب شات مميزة بأطوال وفئات مختلفة، مع نقل ملكية مباشر وضمان بعد التسليم.",
    icon: "Ghost",
    sort_order: 3,
    is_active: true,
  },
  {
    id: "cat-tiktok-usernames",
    slug: "tiktok-usernames",
    name: "يوزرات تيك توك",
    tagline: "احجز اسمك قبل غيرك",
    description:
      "بيع يوزرات تيك توك قصيرة ومميزة وأسماء علامات تجارية، مع نقل آمن وتوثيق كامل للعملية.",
    icon: "Music2",
    sort_order: 4,
    is_active: true,
  },
  {
    id: "cat-accounts",
    slug: "accounts",
    name: "حسابات سوشيال ميديا",
    tagline: "حسابات جاهزة بمتابعين",
    description:
      "حسابات إنستقرام وتيك توك وسناب شات جاهزة بمتابعين وتفاعل حقيقي — ابدأ من نقطة متقدمة بدل الصفر.",
    icon: "Users",
    sort_order: 5,
    is_active: true,
  },
  {
    id: "cat-sawa",
    slug: "sawa",
    name: "باقات سوا",
    tagline: "بيع وشحن فوري",
    description:
      "بيع وشحن باقات سوا (SAWA) بكل الفئات، تفعيل مباشر على رقمك خلال دقائق من تأكيد الطلب.",
    icon: "Signal",
    sort_order: 6,
    is_active: true,
  },
  {
    id: "cat-plus-apps",
    slug: "plus-apps",
    name: "تطبيقات بلس",
    tagline: "نسخ معدّلة بمزايا إضافية",
    description:
      "توفير تطبيقات Plus المعدّلة بمزايا ما بتلاقيها بالنسخ العادية، مع شرح التركيب ومتابعة التحديثات.",
    icon: "Smartphone",
    sort_order: 7,
    is_active: true,
  },
];

export const services: Service[] = [
  // ── يوزرات إنستقرام ─────────────────────────────────────────────────────
  {
    id: "svc-ig-user-premium",
    category_slug: "instagram-usernames",
    slug: "instagram-username-premium",
    title: "يوزرات إنستقرام مميزة",
    summary: "أسماء نادرة وقوية ترفع قيمة حسابك من أول نظرة.",
    description:
      "تشكيلة يوزرات إنستقرام مميزة — كلمات إنجليزية معروفة، أسماء أشخاص، وأسماء علامات تجارية. الأسعار تختلف حسب قوة الاسم والطلب عليه، وبنرسلك القائمة المتاحة حالياً على الواتساب مع صور توثّق كل يوزر قبل الشراء.",
    price: 350,
    old_price: 480,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 1-3 ساعات",
    features: [
      "قائمة متجددة يومياً على الواتساب",
      "نقل ملكية آمن بالكامل",
      "ضمان عدم الاسترجاع بعد التسليم",
      "وسيط ضمان متاح عند الطلب",
    ],
    badge: "الأكثر طلباً",
    is_featured: true,
    is_active: true,
    sort_order: 1,
  },
  {
    id: "svc-ig-user-4",
    category_slug: "instagram-usernames",
    slug: "instagram-username-4-char",
    title: "يوزرات إنستقرام رباعية",
    summary: "أربعة خانات فقط — الفئة اللي كل حدا بدوّر عليها.",
    description:
      "يوزرات إنستقرام من أربع خانات، أقصر وأنظف شكل متاح للحسابات الجديدة والقديمة. متوفرة بتشكيلات مختلفة (أحرف، أرقام، خليط) وبأسعار تناسب كل ميزانية.",
    price: 180,
    old_price: 250,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 1-3 ساعات",
    features: [
      "أربع خانات فقط",
      "تشكيلات وأسعار متعددة",
      "شرح مباشر لكل خطوة نقل",
      "ضمان كامل بعد التسليم",
    ],
    badge: null,
    is_featured: true,
    is_active: true,
    sort_order: 2,
  },
  {
    id: "svc-ig-user-4-like-3",
    category_slug: "instagram-usernames",
    slug: "instagram-username-4-like-3",
    title: "يوزرات رباعية شبه ثلاثية",
    summary: "بتبان ثلاثية للعين — أقرب شي للثلاثي بسعر الرباعي.",
    description:
      "يوزرات رباعية بس شكلها بيوحي إنها ثلاثية، لأن أحد أحرفها رفيع أو مدموج بصرياً مع اللي جنبه (مثل l و i و j). خيار ذكي لمن بده مظهر اليوزر الثلاثي النادر بجزء بسيط من سعره.",
    price: 420,
    old_price: 600,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 1-3 ساعات",
    features: [
      "مظهر ثلاثي بسعر رباعي",
      "فئة نادرة وكمية محدودة",
      "معاينة الشكل قبل الشراء",
      "نقل ملكية موثّق",
    ],
    badge: "نادر",
    is_featured: true,
    is_active: true,
    sort_order: 3,
  },
  {
    id: "svc-ig-user-4-repeat",
    category_slug: "instagram-usernames",
    slug: "instagram-username-4-repeated",
    title: "يوزرات رباعية مكررة",
    summary: "حروف متكررة سهلة الحفظ زي aabb و xxxy.",
    description:
      "يوزرات رباعية بأحرف متكررة (aaaa، aabb، abab، xxxy وغيرها). سهلة الحفظ والكتابة وبتعطي الحساب طابع مميز، وهي من الفئات المطلوبة كتير للمتاجر ومنشئي المحتوى.",
    price: 260,
    old_price: 340,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 1-3 ساعات",
    features: [
      "أنماط تكرار متعددة",
      "سهلة الحفظ والكتابة",
      "مطلوبة للمتاجر ومنشئي المحتوى",
      "ضمان بعد التسليم",
    ],
    badge: null,
    is_featured: false,
    is_active: true,
    sort_order: 4,
  },
  {
    id: "svc-ig-user-4-numeric-look",
    category_slug: "instagram-usernames",
    slug: "instagram-username-4-numeric-look",
    title: "يوزرات رباعية شبه أرقام",
    summary: "أحرف بتنقرأ كأرقام — شكل نظيف ومختلف.",
    description:
      "يوزرات رباعية بتستخدم أحرف بتشبه الأرقام بصرياً (o بدل 0، l بدل 1، s بدل 5، b بدل 6). بتعطي إحساس اليوزر الرقمي النادر مع بقاء الاسم أحرف بالكامل.",
    price: 230,
    old_price: null,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 1-3 ساعات",
    features: [
      "شكل رقمي بأحرف كاملة",
      "خيارات متعددة متاحة",
      "معاينة قبل الشراء",
      "نقل آمن وموثّق",
    ],
    badge: null,
    is_featured: false,
    is_active: true,
    sort_order: 5,
  },
  {
    id: "svc-ig-user-4-letters",
    category_slug: "instagram-usernames",
    slug: "instagram-username-4-letters",
    title: "يوزرات رباعية أحرف",
    summary: "أحرف صافية بدون أرقام ولا شرطات — الأنظف شكلاً.",
    description:
      "يوزرات رباعية من أحرف إنجليزية فقط، بدون أي أرقام أو شرطة سفلية. هي الفئة الأنظف والأغلى ضمن الرباعيات لأنها الأقرب لشكل الاسم الحقيقي أو الكلمة المفهومة.",
    price: 300,
    old_price: 400,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 1-3 ساعات",
    features: [
      "أحرف فقط — بدون أرقام أو _",
      "الأنظف شكلاً بين الرباعيات",
      "بعضها كلمات مفهومة",
      "ضمان عدم الاسترجاع",
    ],
    badge: null,
    is_featured: false,
    is_active: true,
    sort_order: 6,
  },

  // ── خدمات إنستقرام ──────────────────────────────────────────────────────
  {
    id: "svc-ig-transfer",
    category_slug: "instagram-services",
    slug: "instagram-username-transfer",
    title: "نقل يوزرات إنستقرام",
    summary: "ننقل اليوزر من حسابك القديم للجديد بدون ما يضيع.",
    description:
      "عندك يوزر بحساب وبدك تنقله لحساب تاني بدون ما حدا يخطفه بالثانية اللي بينهم؟ منتولى العملية كاملة بالتوقيت الصحيح والطريقة الآمنة، مع تأكيد لك بكل خطوة قبل تنفيذها.",
    price: 90,
    old_price: null,
    currency: "₪",
    unit: "للعملية",
    delivery_time: "التنفيذ خلال 1-2 ساعة",
    features: [
      "توقيت دقيق يمنع خطف اليوزر",
      "تأكيد منك قبل كل خطوة",
      "يعمل بين حساباتك الشخصية",
      "لا تدفع إلا بعد نجاح النقل",
    ],
    badge: "مضمون",
    is_featured: true,
    is_active: true,
    sort_order: 1,
  },
  {
    id: "svc-ig-followers",
    category_slug: "instagram-services",
    slug: "instagram-followers",
    title: "زيادة متابعين إنستقرام",
    summary: "متابعين بجودة عالية مع ضمان تعويض النقص ٣٠ يوم.",
    description:
      "زيادة متابعين إنستقرام بحسابات نشطة وبسرعة إضافة طبيعية تحمي حسابك من أي إنذار. ما بنطلب كلمة المرور نهائياً — بس اليوزر والحساب لازم يكون عام أثناء التنفيذ.",
    price: 15,
    old_price: 22,
    currency: "₪",
    unit: "لكل 1000",
    delivery_time: "يبدأ خلال 5 دقائق",
    features: [
      "بدون كلمة مرور — اليوزر فقط",
      "ضمان تعويض النقص 30 يوم",
      "سرعة إضافة آمنة ومتدرجة",
      "متاح لأي عدد",
    ],
    badge: null,
    is_featured: true,
    is_active: true,
    sort_order: 2,
  },

  // ── يوزرات سناب شات ─────────────────────────────────────────────────────
  {
    id: "svc-snap-usernames",
    category_slug: "snapchat-usernames",
    slug: "snapchat-usernames",
    title: "بيع يوزرات سناب شات",
    summary: "يوزرات سناب قصيرة ومميزة بأسعار تنافسية.",
    description:
      "تشكيلة يوزرات سناب شات مميزة بأطوال وفئات مختلفة — رباعية، خماسية، وأسماء نادرة. بنرسلك المتاح حالياً على الواتساب مع الأسعار، وبتختار براحتك قبل ما تدفع إشي.",
    price: 120,
    old_price: 170,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 1-3 ساعات",
    features: [
      "فئات وأطوال متعددة",
      "نقل ملكية مباشر",
      "قائمة متجددة على الواتساب",
      "ضمان بعد التسليم",
    ],
    badge: null,
    is_featured: true,
    is_active: true,
    sort_order: 1,
  },

  // ── يوزرات تيك توك ──────────────────────────────────────────────────────
  {
    id: "svc-tiktok-usernames",
    category_slug: "tiktok-usernames",
    slug: "tiktok-usernames",
    title: "بيع يوزرات تيك توك",
    summary: "احجز اسم علامتك على تيك توك قبل ما حدا ياخده.",
    description:
      "يوزرات تيك توك قصيرة ومميزة وأسماء علامات تجارية محجوزة. مثالية لمن بده اسم موحّد على كل المنصات، أو بده يبدأ حساب باسم قوي من أول يوم.",
    price: 140,
    old_price: null,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 2-5 ساعات",
    features: [
      "أسماء قصيرة وعلامات تجارية",
      "توحيد اسمك على كل المنصات",
      "نقل آمن وموثّق",
      "خدمة البحث عن يوزر محدد",
    ],
    badge: null,
    is_featured: true,
    is_active: true,
    sort_order: 1,
  },

  // ── حسابات سوشيال ميديا ─────────────────────────────────────────────────
  {
    id: "svc-acc-instagram",
    category_slug: "accounts",
    slug: "instagram-accounts",
    title: "حسابات إنستقرام",
    summary: "حسابات جاهزة بمتابعين وتفاعل — ابدأ من نقطة متقدمة.",
    description:
      "حسابات إنستقرام جاهزة بأعداد متابعين مختلفة وتفاعل حقيقي، مناسبة للمتاجر ومنشئي المحتوى اللي مش بدهم يبلشوا من الصفر. بنوضحلك إحصائيات كل حساب قبل الشراء.",
    price: 250,
    old_price: null,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 2-6 ساعات",
    features: [
      "إحصائيات كاملة قبل الشراء",
      "أعداد متابعين متنوعة",
      "تسليم بيانات كاملة",
      "ضمان عدم الاسترجاع",
    ],
    badge: null,
    is_featured: false,
    is_active: true,
    sort_order: 1,
  },
  {
    id: "svc-acc-tiktok",
    category_slug: "accounts",
    slug: "tiktok-accounts",
    title: "حسابات تيك توك",
    summary: "حسابات بمتابعين ومشاهدات جاهزة للانطلاق.",
    description:
      "حسابات تيك توك بأعداد متابعين ومشاهدات مختلفة، بعضها وصل لشروط البث المباشر. خيار سريع لمن بده حساب فعّال من أول يوم بدل شهور بناء.",
    price: 220,
    old_price: null,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 2-6 ساعات",
    features: [
      "بعضها مؤهل للبث المباشر",
      "إحصائيات واضحة قبل الشراء",
      "تسليم بيانات كاملة",
      "ضمان بعد التسليم",
    ],
    badge: null,
    is_featured: false,
    is_active: true,
    sort_order: 2,
  },
  {
    id: "svc-acc-snapchat",
    category_slug: "accounts",
    slug: "snapchat-accounts",
    title: "حسابات سناب شات",
    summary: "حسابات سناب بمتابعين ونسبة مشاهدة ستوري عالية.",
    description:
      "حسابات سناب شات جاهزة بأعداد متابعين مختلفة ونسبة مشاهدة ستوري جيدة، مناسبة للمتاجر اللي بدها تبدأ التسويق على سناب مباشرة.",
    price: 280,
    old_price: null,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تسليم خلال 2-6 ساعات",
    features: [
      "نسبة مشاهدة ستوري جيدة",
      "أعداد متابعين متنوعة",
      "تسليم بيانات كاملة",
      "ضمان بعد التسليم",
    ],
    badge: null,
    is_featured: false,
    is_active: true,
    sort_order: 3,
  },

  // ── باقات سوا ───────────────────────────────────────────────────────────
  {
    id: "svc-sawa",
    category_slug: "sawa",
    slug: "sawa-packages",
    title: "بيع وشحن باقات سوا",
    summary: "كل باقات سوا بتفعيل مباشر على رقمك خلال دقائق.",
    description:
      "بيع وشحن باقات سوا (SAWA) بكل الفئات المتاحة — إنترنت، مكالمات، وباقات مدمجة. أرسل رقمك والباقة اللي بدك إياها وبنفعّلها لك مباشرة، وبنساعدك تختار الأنسب لاستخدامك إذا كنت متردد.",
    price: 55,
    old_price: 70,
    currency: "₪",
    unit: "تبدأ من",
    delivery_time: "تفعيل خلال 10 دقائق",
    features: [
      "كل الفئات متوفرة",
      "تفعيل مباشر على رقمك",
      "استشارة مجانية لاختيار الباقة",
      "تذكير قبل انتهاء الباقة",
    ],
    badge: "تفعيل فوري",
    is_featured: true,
    is_active: true,
    sort_order: 1,
  },

  // ── تطبيقات بلس ─────────────────────────────────────────────────────────
  {
    id: "svc-plus-apps",
    category_slug: "plus-apps",
    slug: "plus-apps",
    title: "توفير تطبيقات Plus المعدّلة",
    summary: "نسخ معدّلة بمزايا إضافية مش موجودة بالنسخة العادية.",
    description:
      "توفير تطبيقات Plus المعدّلة بمزايا زيادة عن النسخ الرسمية. بنوفرلك النسخة المناسبة لجهازك مع شرح خطوات التركيب، وبنعلمك لما ينزل تحديث جديد.",
    price: 35,
    old_price: null,
    currency: "₪",
    unit: "للتطبيق",
    delivery_time: "تسليم خلال 30 دقيقة",
    features: [
      "نسخة مناسبة لجهازك",
      "شرح خطوات التركيب",
      "تنبيه عند نزول تحديث",
      "دعم في حال واجهت مشكلة",
    ],
    badge: null,
    is_featured: false,
    is_active: true,
    sort_order: 1,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "محمود أبو ندى",
    handle: "صاحب متجر ملابس",
    rating: 5,
    body: "أخذت يوزر رباعي أحرف للمتجر وكانت العملية مرتبة وواضحة من أولها لآخرها. شرحولي كل خطوة قبل ما ينفذوها.",
  },
  {
    id: "t2",
    name: "سُلاف حرب",
    handle: "منشئة محتوى",
    rating: 5,
    body: "كنت خايفة أنقل اليوزر لحالي عشان ما ينخطف. نقلوه بدقيقة وكل إشي تمام. ما توقعت يكون بهالسهولة.",
  },
  {
    id: "t3",
    name: "أحمد ياسين",
    handle: "لاعب ومنشئ محتوى",
    rating: 5,
    body: "شحنت باقة سوا كذا مرة من عندهم. أرخص من غيرهم والتفعيل بيجي قبل ما أسكّر المحادثة.",
  },
  {
    id: "t4",
    name: "رنا الأغا",
    handle: "صاحبة مشروع حلويات",
    rating: 5,
    body: "اشتريت حساب إنستقرام جاهز بمتابعين، وبعتولي الإحصائيات كاملة قبل ما أدفع شيكل واحد. ثقة من أول تعامل.",
  },
  {
    id: "t5",
    name: "كريم دولة",
    handle: "صاحب متجر إلكتروني",
    rating: 5,
    body: "أفضل شي فيهم إنهم بيردوا بسرعة على الواتساب. سألت عشرين سؤال قبل ما أطلب يوزر وما زهقوا ولا مرة.",
  },
  {
    id: "t6",
    name: "ليان مقداد",
    handle: "طالبة جامعية",
    rating: 5,
    body: "طلبت يوزر رباعي شبه ثلاثي وما كنت مصدقة الشكل. الناس بتحسبه ثلاثي فعلاً وسعره كان بمتناول إيدي.",
  },
];

// ── helpers ────────────────────────────────────────────────────────────────

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug) ?? null;
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug) ?? null;
}

export function servicesByCategory(slug: string) {
  return services
    .filter((s) => s.category_slug === slug && s.is_active)
    .sort((a, b) => a.sort_order - b.sort_order);
}

export function countByCategory(slug: string) {
  return services.filter((s) => s.category_slug === slug && s.is_active).length;
}
