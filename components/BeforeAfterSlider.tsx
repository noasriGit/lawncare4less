"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BeforeAfterImage } from "@/lib/types";

interface BeforeAfterSliderProps {
  slides: BeforeAfterImage[];
}

export default function BeforeAfterSlider({ slides }: BeforeAfterSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const slide = slides[activeIndex];
  if (!slide) return null;

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
    setSliderPosition(50);
  };

  const moveSlider = (delta: number) => {
    setSliderPosition((p) => Math.max(5, Math.min(95, p + delta)));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      moveSlider(-5);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      moveSlider(5);
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(5);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(95);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") {
      e.preventDefault();
    }
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);

    const handleMove = (ev: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const p = Math.max(5, Math.min(95, ((ev.clientX - rect.left) / rect.width) * 100));
      setSliderPosition(p);
    };

    const handleUp = () => {
      el.releasePointerCapture(e.pointerId);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp, { once: true });
    handleMove(e.nativeEvent);
  };

  return (
    <section id="before-after" className="bg-off-white-warm py-16 md:py-24" aria-label="Before and after results">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-charcoal md:text-3xl"
        >
          See the difference
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-charcoal-light"
        >
          Real results from our lawn care and landscaping work.
        </motion.p>
        <p className="mt-4 text-center text-sm font-medium text-charcoal sm:text-base">
          Drag the bar left or right—or tap anywhere on the image—to compare before and after.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 md:mx-auto md:max-w-[50%]"
        >
          <div
            ref={containerRef}
            className="relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-2xl bg-charcoal/5 shadow-md"
            style={{ touchAction: "none" }}
            onClick={(e) => {
              const container = containerRef.current;
              if (!container || (e.target as HTMLElement).closest("[role=slider]")) return;
              const rect = container.getBoundingClientRect();
              const p = Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100));
              setSliderPosition(p);
            }}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.afterSrc}
                alt={`${slide.alt} - after`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
            <div
              className="absolute inset-0 z-10 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={slide.beforeSrc}
                alt={`${slide.alt} - before`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
            <div
              className="absolute top-0 bottom-0 z-20 flex min-w-[48px] cursor-grab active:cursor-grabbing sm:min-w-12 sm:w-12"
              style={{
                left: `${sliderPosition}%`,
                transform: "translateX(-50%)",
              }}
              onPointerDown={handlePointerDown}
              onKeyDown={handleKeyDown}
              role="slider"
              aria-valuenow={sliderPosition}
              aria-valuemin={5}
              aria-valuemax={95}
              aria-label="Drag left or right to compare before and after. Use arrow keys to move."
              tabIndex={0}
            >
              <span className="absolute left-1/2 top-0 h-full w-1.5 -translate-x-1/2 bg-white shadow-lg sm:w-2" aria-hidden />
              <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full border-2 border-green-600 bg-white shadow-lg sm:h-10 sm:w-10">
                <svg className="h-5 w-5 text-green-600 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
                <span className="hidden text-[10px] font-semibold uppercase tracking-wide text-green-600 sm:block">Drag</span>
              </span>
            </div>
            <div className="absolute left-2 top-2 z-30 rounded-md bg-charcoal/90 px-3 py-1.5 text-sm font-semibold text-white shadow sm:left-4 sm:top-4">
              Before
            </div>
            <div className="absolute right-2 top-2 z-30 rounded-md bg-charcoal/90 px-3 py-1.5 text-sm font-semibold text-white shadow sm:right-4 sm:top-4">
              After
            </div>
          </div>

          {slides.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 sm:min-h-0 sm:min-w-0"
                  aria-label={`Slide ${i + 1}`}
                  aria-current={i === activeIndex}
                >
                  <span
                    className={`block h-2 w-8 rounded-full transition-colors sm:h-2 sm:w-8 ${
                      i === activeIndex ? "bg-green-600" : "bg-charcoal/20"
                    }`}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
