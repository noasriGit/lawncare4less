"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { seasonalServices } from "@/lib/constants";

const seasons = [
  { id: "spring", label: "Spring" },
  { id: "summer", label: "Summer" },
  { id: "fall", label: "Fall" },
  { id: "winter", label: "Winter" },
] as const;

export default function SeasonalTabs() {
  const [active, setActive] = useState<keyof typeof seasonalServices>("spring");
  const items = seasonalServices[active];

  return (
    <section className="py-16 md:py-24" aria-labelledby="seasonal-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          id="seasonal-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-charcoal md:text-3xl"
        >
          Services by season
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-charcoal-light"
        >
          We offer the right services for every time of year.
        </motion.p>

        <div className="mt-8">
          <div
            className="flex gap-1 overflow-x-auto pb-2 scrollbar-none"
            role="tablist"
            aria-label="Seasons"
          >
            {seasons.map((season) => (
              <button
                key={season.id}
                type="button"
                role="tab"
                aria-selected={active === season.id}
                aria-controls={`panel-${season.id}`}
                id={`tab-${season.id}`}
                onClick={() => setActive(season.id)}
                className="relative shrink-0 rounded-full px-5 py-3 text-sm font-medium text-charcoal-light transition-colors hover:bg-green-50 hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                {active === season.id && (
                  <motion.span
                    layoutId="seasonal-tab"
                    className="absolute inset-0 rounded-full bg-green-100"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{season.label}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm"
          >
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="flex min-h-[44px] items-center justify-between rounded-lg px-4 py-3 text-charcoal hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                  >
                    <span>{item.name}</span>
                    <svg className="h-4 w-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
