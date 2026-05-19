import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description: `About Lawn Care 4 Less. ${SITE_DESCRIPTION}`,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
              About us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              Lawn Care 4 Less is a local lawn care and landscaping company built on reliability and fair pricing.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              We show up when we say we will, use sharp equipment, and give you clear quotes with no hidden fees. Our crew takes pride in every cut, trim, and cleanup.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              Whether you need regular mowing, seasonal cleanups, or one-off projects, we&apos;re here to help. Get in touch for a free quote.
            </p>
            <div className="mt-10">
              <a
                href="tel:2403051371"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-green-600 px-6 font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                240-305-1371
              </a>
            </div>
          </div>
        </section>
        <CTASection
          title="Ready to get started?"
          primaryLabel="Contact us"
          variant="compact"
        />
      </main>
      <Footer />
    </>
  );
}
