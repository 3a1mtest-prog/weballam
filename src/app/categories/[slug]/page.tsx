import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesBrowser } from "@/components/services/ServicesBrowser";
import { CtaBanner } from "@/components/home/CtaBanner";
import { getCategories, getCategoryBySlug, getServices } from "@/lib/data";

export const revalidate = 300;

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return { title: "القسم غير موجود" };

  return {
    title: category.name,
    description: category.description,
    openGraph: { title: category.name, description: category.description },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [category, categories, services] = await Promise.all([
    getCategoryBySlug(slug),
    getCategories(),
    getServices(),
  ]);

  if (!category) notFound();

  return (
    <>
      <PageHeader
        eyebrow={category.tagline}
        title={category.name}
        description={category.description}
        breadcrumbs={[
          { href: "/", label: "الرئيسية" },
          { href: "/services", label: "الخدمات" },
          { href: `/categories/${category.slug}`, label: category.name },
        ]}
      />

      <ServicesBrowser
        categories={categories}
        services={services}
        initialCategory={category.slug}
      />

      <CtaBanner />
    </>
  );
}
