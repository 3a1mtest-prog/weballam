import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesBrowser } from "@/components/services/ServicesBrowser";
import { CtaBanner } from "@/components/home/CtaBanner";
import { getCategories, getServices } from "@/lib/data";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "كل الخدمات",
  description:
    "تصفّح كل ما يوفره غزاوي ستور: يوزرات إنستقرام رباعية ومميزة، يوزرات سناب شات وتيك توك، حسابات سوشيال ميديا، نقل يوزرات وزيادة متابعين، باقات سوا وتطبيقات بلس.",
};

export default async function ServicesPage() {
  const [categories, services] = await Promise.all([
    getCategories(),
    getServices(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow="متجر الخدمات"
        title="كل اللي بنوفره بمكان واحد"
        highlight="بمكان واحد"
        description="فلتر حسب القسم، دوّر بالاسم، ورتّب حسب السعر — وأضف اللي بناسبك للسلة وأكّد على الواتساب بثواني."
        breadcrumbs={[
          { href: "/", label: "الرئيسية" },
          { href: "/services", label: "الخدمات" },
        ]}
      />

      <ServicesBrowser categories={categories} services={services} />
      <CtaBanner />
    </>
  );
}
