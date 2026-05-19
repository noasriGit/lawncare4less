import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { getServiceBySlug, getAllSlugs } from "@/lib/services";
import { SITE_NAME } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: `Service | ${SITE_NAME}` };
  return {
    title: `${service.name} | ${SITE_NAME}`,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <article className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-light">
                <li>
                  <Link href="/" className="hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/services" className="hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-charcoal" aria-current="page">
                  {service.name}
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
              {service.name}
            </h1>
            {service.image && (
              <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-charcoal/5">
                <Image
                  src={service.image}
                  alt=""
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority
                />
              </div>
            )}
            <p className="mt-4 text-lg text-charcoal-light">
              {service.shortDescription}
            </p>
            <div className="mt-8 prose prose-charcoal max-w-none">
              <p className="leading-relaxed text-charcoal-light">
                {service.description}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:2403051371"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-green-600 px-6 font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                240-305-1371
              </a>
              <Link
                href="/services"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-charcoal/20 px-6 font-medium text-charcoal transition-colors hover:border-green-500 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                View all services
              </Link>
            </div>
          </div>
        </article>
        <CTASection
          title="Need something else?"
          description="We offer a full range of lawn care and landscaping services."
          primaryLabel="240-305-1371"
          primaryHref="tel:2403051371"
          variant="compact"
        />
      </main>
      <Footer />
    </>
  );
}
