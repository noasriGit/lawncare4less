"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  variant?: "default" | "compact";
}

export default function CTASection({
  title,
  description,
  primaryLabel = "240-305-1371",
  primaryHref = "tel:2403051371",
  variant = "default",
}: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={
        variant === "compact"
          ? "bg-green-700 py-12 md:py-16"
          : "bg-green-700 py-16 md:py-24"
      }
    >
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-3 max-w-xl text-green-100 md:mt-4 md:text-lg">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full bg-white px-6 font-medium text-green-700 transition-colors hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-700"
          >
            {primaryLabel}
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full border-2 border-white px-6 font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-700"
          >
            View Services
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
