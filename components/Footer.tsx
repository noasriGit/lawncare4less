import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-off-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xl font-semibold tracking-tight">Lawn Care 4 Less</p>
            <p className="mt-2 max-w-sm text-sm text-green-100">
              Professional lawn care and landscaping. Quality service at a fair price.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-green-100 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-charcoal-light/30 pt-8 text-center text-sm text-green-100">
          <p>&copy; {new Date().getFullYear()} Lawn Care 4 Less. All rights reserved.</p>
          <p className="mt-3">
            Website made by{" "}
            <a
              href="https://nvdigitalconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 underline decoration-green-100/50 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
            >
              NV Digital Consulting
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
