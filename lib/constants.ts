import type { Testimonial, BeforeAfterImage } from "./types";

export const SITE_NAME = "Lawn Care 4 Less";
export const SITE_DESCRIPTION =
  "Professional lawn care and landscaping. Quality service at a fair price. Serving your community with mowing, trimming, seasonal cleanups, and more.";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "They've been maintaining our lawn for two years. Always on time, always neat. Couldn't ask for better.",
    author: "Sarah M.",
    location: "Residential",
  },
  {
    id: "2",
    quote:
      "The spring clean up made a huge difference. Our yard looked brand new. Highly recommend.",
    author: "James T.",
    location: "Residential",
  },
  {
    id: "3",
    quote:
      "Fair pricing and they actually answer the phone. Rare these days. Great crew.",
    author: "Linda K.",
    location: "Residential",
  },
  {
    id: "4",
    quote:
      "Professional, reliable, and our lawn has never looked better. Five stars.",
    author: "Mike R.",
    location: "Residential",
  },
];

export const beforeAfterSlides: BeforeAfterImage[] = [
  {
    id: "1",
    beforeSrc: "/BeforeAfter/before1.png",
    afterSrc: "/BeforeAfter/after1.png",
    alt: "Lawn transformation",
  },
];

export const whyChooseUs = [
  {
    id: "reliable",
    title: "Reliable",
    description: "Consistent scheduling. We show up when we say we will.",
    icon: "calendar",
  },
  {
    id: "quality",
    title: "Quality Work",
    description: "Sharp equipment, trained crew, attention to detail.",
    icon: "star",
  },
  {
    id: "fair",
    title: "Fair Pricing",
    description: "Clear quotes. No hidden fees. Great value.",
    icon: "tag",
  },
  {
    id: "local",
    title: "Local & Responsive",
    description: "Quick response. Easy to reach. We care about our community.",
    icon: "location",
  },
];

export const seasonalServices = {
  spring: [
    { name: "Spring Clean Up", slug: "spring-clean-up" },
    { name: "Lawn Aeration", slug: "lawn-aeration" },
    { name: "Seeding", slug: "seeding" },
    { name: "Mulching", slug: "mulching" },
  ],
  summer: [
    { name: "Lawn Cuts", slug: "lawn-cuts" },
    { name: "Trimming", slug: "trimming" },
    { name: "Weeding", slug: "weeding" },
    { name: "Pruning", slug: "pruning" },
  ],
  fall: [
    { name: "Leaf Removal", slug: "leaf-removal" },
    { name: "Lawn Cuts", slug: "lawn-cuts" },
    { name: "Mulching", slug: "mulching" },
    { name: "Power Washing", slug: "power-washing" },
  ],
  winter: [
    { name: "Snow Removal", slug: "snow-removal" },
    { name: "Cutter Cleaning", slug: "cutter-cleaning" },
    { name: "Power Washing", slug: "power-washing" },
  ],
};
