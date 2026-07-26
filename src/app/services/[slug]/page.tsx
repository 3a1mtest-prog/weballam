import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock, ShieldCheck, Zap } from "lucide-react";

import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceOrderPanel } from "@/components/services/ServiceOrderPanel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CategoryIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import {
  getCategoryBySlug,
  getServiceBySlug,
  getServices,
  getServicesByCategory,
} from "@/lib/data";

export const revalidate = 300;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "الخدمة غير موجودة" };

  return {
    title: service.title,
    description: service.summary,
    openGraph: { title: service.title, description: service.summary },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const category = await getCategoryBySlug(service.category_slug);
  const related = (await getServicesByCategory(service.category_slug))
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const guarantees = [
    { icon: Zap, title: "بدء سريع", body: service.delivery_time },
    { icon: ShieldCheck, title: "ضمان الجودة", body: "متابعة حتى اكتمال الطلب" },
    { icon: Clock, title: "دعم متواصل", body: "رد على الواتساب طوال اليوم" },
  ];

  return (
    <>
      <PageHeader
        eyebrow={category?.name}
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { href: "/", label: "الرئيسية" },
          { href: "/services", label: "الخدمات" },
          ...(category
            ? [{ href: `/categories/${category.slug}`, label: category.name }]
            : []),
          { href: `/services/${service.slug}`, label: service.title },
        ]}
      />

      <section className="relative pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          {/* ── Details ── */}
          <div className="lg:col-span-7 xl:col-span-8">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-3">
                {guarantees.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-mint/10 bg-white/[0.025] p-5 backdrop-blur-md"
                  >
                    <Icon className="size-5 text-neon" strokeWidth={1.8} />
                    <p className="mt-3 text-sm font-extrabold text-offwhite">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-fg-muted">{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={80} className="mt-10">
              <h2 className="text-xl font-extrabold text-offwhite">
                تفاصيل الخدمة
              </h2>
              <p className="mt-4 text-[0.95rem] leading-loose text-fg-muted">
                {service.description}
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-10">
              <h2 className="text-xl font-extrabold text-offwhite">
                شو بتشمل الخدمة
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-mint/10 bg-white/[0.025] p-4 text-sm text-fg-muted"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-neon/15">
                      <Check className="size-3 text-neon" strokeWidth={3.2} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            {category && (
              <Reveal delay={200} className="mt-10">
                <Link
                  href={`/categories/${category.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-mint/10 bg-white/[0.025] p-5 transition-all hover:border-neon/30"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-neon/20 bg-neon/[0.08] text-neon">
                    <CategoryIcon name={category.icon} className="size-5.5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs text-fg-subtle">
                      من قسم
                    </span>
                    <span className="block text-sm font-extrabold text-offwhite transition-colors group-hover:text-neon">
                      {category.name}
                    </span>
                  </span>
                  <ArrowLeft
                    className="size-4 text-neon transition-transform group-hover:-translate-x-1"
                    strokeWidth={2.4}
                  />
                </Link>
              </Reveal>
            )}
          </div>

          {/* ── Order panel ── */}
          <div className="lg:col-span-5 xl:col-span-4">
            <ServiceOrderPanel service={service} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-extrabold text-offwhite">
              خدمات <span className="text-gradient-neon">مشابهة</span>
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <Reveal key={s.slug} delay={i * 60}>
                  <ServiceCard service={s} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
