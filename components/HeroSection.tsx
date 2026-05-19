"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative grid w-full place-items-center overflow-hidden bg-off-white-warm pt-20"
      style={{ minHeight: "100svh", height: "100svh" }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 md:flex-row md:gap-12 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:max-w-xl md:text-left"
        >
          <h1 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl md:leading-tight">
            Professional lawn care at a fair price.
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-charcoal-light md:mt-6 md:text-xl"
          >
            Mowing, trimming, seasonal cleanups, and more. Reliable service, clear pricing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:gap-4 md:items-start"
          >
            <a
              href="tel:2403051371"
              className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full bg-green-600 px-6 font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              240-305-1371
            </a>
            <a
              href="mailto:lawncareforrless@gmail.com"
              className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full border-2 border-charcoal/20 px-6 font-medium text-charcoal transition-colors hover:border-green-500 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              lawncareforrless@gmail.com
            </a>
            <Link
              href="/services"
              className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full border-2 border-charcoal/20 px-6 font-medium text-charcoal transition-colors hover:border-green-500 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-1 items-center justify-center md:justify-end"
        >
          <Image
            src="/lawnmower2.png"
            alt=""
            width={400}
            height={320}
            className="h-auto w-full max-w-sm object-contain md:max-w-md lg:max-w-lg"
            priority
          />
        </motion.div>
      </div>
      <a
        href="#before-after"
        className="absolute bottom-[22px] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-green-600 transition-colors hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 md:bottom-6"
        aria-label="Scroll to before and after"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-green-600/80">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.span>
      </a>
    </section>
  );
}
