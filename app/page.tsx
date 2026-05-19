import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import SeasonalTabs from "@/components/SeasonalTabs";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import { beforeAfterSlides, testimonials } from "@/lib/constants";

export default function Home() {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BeforeAfterSlider slides={beforeAfterSlides} />
        <section className="pt-20 py-16 md:py-24" aria-labelledby="services-heading">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 id="services-heading" className="text-2xl font-semibold tracking-tight text-charcoal md:text-3xl">
              Our services
            </h2>
            <p className="mt-2 text-charcoal-light">
              Lawn care, landscaping, and seasonal work. Expand a card to learn more.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service, i) => (
                <li key={service.slug}>
                  <ServiceCard service={service} index={i} expandable />
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex min-h-[44px] items-center font-medium text-green-600 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                View all services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </p>
          </div>
        </section>
        <WhyChooseUs />
        <SeasonalTabs />
        <TestimonialCarousel testimonials={testimonials} />
        <CTASection
          title="Ready for a better lawn?"
          description="Get a free quote. No obligation. We respond quickly."
        />
      </main>
      <Footer />
    </>
  );
}
