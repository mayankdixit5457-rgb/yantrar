import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </>
    );
};
