"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  index?: number;
  expandable?: boolean;
}

export default function ServiceCard({
  service,
  index = 0,
  expandable = true,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  const content = (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex flex-col">
        {service.image && (
          <Link href={`/services/${service.slug}`} className="block aspect-[4/3] w-full overflow-hidden bg-charcoal/5">
            <Image
              src={service.image}
              alt=""
              width={400}
              height={300}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </Link>
        )}
        <div className="flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-charcoal">
            {service.name}
          </h3>
          {expandable && (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full text-charcoal-light hover:bg-green-50 hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              aria-expanded={expanded}
              aria-label={expanded ? "Collapse" : "Expand"}
            >
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </button>
          )}
        </div>
        <p className="text-charcoal-light text-sm leading-relaxed">
          {service.shortDescription}
        </p>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p className="border-t border-charcoal/10 pt-4 text-charcoal-light text-sm leading-relaxed">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex min-h-[44px] items-center font-medium text-green-600 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                Learn more
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        {!expandable && (
          <Link
            href={`/services/${service.slug}`}
            className="mt-2 inline-flex min-h-[44px] items-center font-medium text-green-600 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
          >
            Learn more
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
        </div>
      </div>
    </motion.article>
  );

  return content;
}
