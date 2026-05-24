import Hero from "@/components/Hero";
import OurVertices from "@/components/ourvertices";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <OurVertices />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <CTA />
    </>
  );
}