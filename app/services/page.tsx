import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { serviceCategories } from "@/lib/services";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Services | ${SITE_NAME}`,
  description:
    "Lawn mowing, trimming, seasonal cleanups, aeration, mulching, snow removal, and more. Professional lawn care and landscaping.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
              Our services
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-charcoal-light">
              Professional lawn care and landscaping. We group our work by category so you can find what you need.
            </p>
          </div>
        </section>

        {serviceCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="border-t border-charcoal/10 py-12 md:py-16"
            aria-labelledby={`category-${category.id}`}
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <h2 id={`category-${category.id}`} className="text-xl font-semibold tracking-tight text-charcoal md:text-2xl">
                {category.label}
              </h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, i) => (
                  <li key={service.slug}>
                    <ServiceCard service={service} index={i} expandable={false} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="border-t border-charcoal/10 py-8 md:py-12">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <p className="text-charcoal-light">
              Not sure what you need?{" "}
              <a
                href="tel:2403051371"
                className="font-medium text-green-600 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                Give us a call
              </a>{" "}
              and we&apos;ll help you choose.
            </p>
          </div>
        </section>

        <CTASection
          title="Get a free quote"
          description="Tell us about your property and we'll respond with a clear estimate."
          variant="compact"
        />
      </main>
      <Footer />
    </>
  );
}
