import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { WhyUs } from "@/components/home/WhyUs";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { CtaBanner } from "@/components/home/CtaBanner";

import {
  getCategories,
  getFeaturedServices,
  getServices,
  getTestimonials,
} from "@/lib/data";

export const revalidate = 300;

export default async function HomePage() {
  const [categories, services, featured, testimonials] = await Promise.all([
    getCategories(),
    getServices(),
    getFeaturedServices(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero />
      <CategoryGrid categories={categories} services={services} />
      <FeaturedServices services={featured.slice(0, 6)} />
      <WhyUs />
      <Process />
      <Testimonials testimonials={testimonials} />
      <Faq />
      <CtaBanner />
    </>
  );
}
