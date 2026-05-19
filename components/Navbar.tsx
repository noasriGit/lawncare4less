"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-charcoal/10 bg-off-white/95 backdrop-blur supports-[backdrop-filter]:bg-off-white/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6" aria-label="Main navigation">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          Lawn Care 4 Less
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg px-4 text-charcoal-light hover:bg-green-50 hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="mailto:lawncareforrless@gmail.com"
            className="hidden min-h-[44px] items-center justify-center rounded-full border-2 border-charcoal/20 px-4 font-medium text-charcoal transition-colors hover:border-green-500 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 md:flex"
          >
            lawncareforrless@gmail.com
          </a>
          <a
            href="tel:2403051371"
            className="hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-green-600 px-5 font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 md:flex"
          >
            240-305-1371
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-charcoal hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-charcoal/10 bg-off-white md:hidden"
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] items-center rounded-lg px-4 text-charcoal hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex flex-col gap-2 pt-2">
                <a
                  href="mailto:lawncareforrless@gmail.com"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center justify-center rounded-full border-2 border-charcoal/20 px-5 font-medium text-charcoal hover:border-green-500 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                >
                  lawncareforrless@gmail.com
                </a>
                <a
                  href="tel:2403051371"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center justify-center rounded-full bg-green-600 px-5 font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                >
                  240-305-1371
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
