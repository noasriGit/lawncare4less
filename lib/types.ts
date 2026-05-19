export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: "lawn" | "landscape" | "seasonal" | "maintenance";
  icon?: string;
  /** Path to service image in public (e.g. /springcleanup.jpg) */
  image?: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  services: Service[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
}

export interface BeforeAfterImage {
  id: string;
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}
