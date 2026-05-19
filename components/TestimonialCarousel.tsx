"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "@/lib/types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const goTo = useCallback(
    (next: number) => {
      setIndex((i) => (i + next + testimonials.length) % testimonials.length);
    },
    [testimonials.length]
  );

  if (!testimonials.length || !current) return null;

  return (
    <section className="bg-off-white-warm py-16 md:py-24" aria-label="Customer testimonials">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-charcoal md:text-3xl"
        >
          What our customers say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-charcoal-light"
        >
          Real feedback from real customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm md:p-12">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <p className="text-lg leading-relaxed text-charcoal md:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="font-semibold text-charcoal">{current.author}</span>
                    {current.location && (
                      <span className="ml-2 text-charcoal-light">— {current.location}</span>
                    )}
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {testimonials.length > 1 && (
              <>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => goTo(-1)}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-charcoal/20 text-charcoal hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                    aria-label="Previous testimonial"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-sm text-charcoal-light" aria-live="polite">
                    {index + 1} of {testimonials.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => goTo(1)}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-charcoal/20 text-charcoal hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                    aria-label="Next testimonial"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Testimonial dots">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`Testimonial ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`h-2 w-8 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
                        i === index ? "bg-green-600" : "bg-charcoal/20 hover:bg-charcoal/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
