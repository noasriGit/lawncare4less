import type { Service, ServiceCategory } from "./types";

export const services: Service[] = [
  {
    slug: "spring-clean-up",
    name: "Spring Clean Up",
    shortDescription: "Remove winter debris and prep your lawn for the growing season.",
    description:
      "Our spring clean up service removes leaves, branches, and winter debris from your property. We edge beds, clear gutters, and prepare your lawn for healthy growth. Get your yard ready for the season ahead.",
    category: "seasonal",
    image: "/springcleanup.jpg",
  },
  {
    slug: "lawn-aeration",
    name: "Lawn Aeration",
    shortDescription: "Improve soil drainage and nutrient absorption.",
    description:
      "Core aeration relieves soil compaction and allows air, water, and nutrients to reach grass roots. We recommend this service annually for healthier, thicker turf and better drought resistance.",
    category: "lawn",
    image: "/aeration-1.jpg",
  },
  {
    slug: "sidewalks",
    name: "Sidewalks",
    shortDescription: "Edging and cleaning of walkways and driveways.",
    description:
      "We edge along sidewalks and driveways for a crisp, clean look and trim overgrowth. Optional power washing keeps concrete and pavers looking like new.",
    category: "maintenance",
    image: "/sidewalks.jpg",
  },
  {
    slug: "lawn-cuts",
    name: "Lawn Cuts",
    shortDescription: "Regular mowing to keep your lawn looking sharp.",
    description:
      "Consistent, professional mowing on your schedule. We use sharp blades and proper height settings to promote healthy growth and a uniform appearance all season.",
    category: "lawn",
    image: "/lawncuts.jpg",
  },
  {
    slug: "trimming",
    name: "Trimming",
    shortDescription: "Precise edging and trimming around beds and obstacles.",
    description:
      "Detail trimming along fences, beds, trees, and structures. We keep lines clean and borders defined so your property looks polished after every visit.",
    category: "maintenance",
    image: "/trimming.jpg",
  },
  {
    slug: "pruning",
    name: "Pruning",
    shortDescription: "Shaping shrubs and trees for health and appearance.",
    description:
      "Proper pruning promotes plant health and improves shape. We prune shrubs, hedges, and small trees to maintain structure and encourage new growth.",
    category: "landscape",
    image: "/pruning.jpg",
  },
  {
    slug: "cutter-cleaning",
    name: "Gutter Cleaning",
    shortDescription: "Gutters cleared of leaves and debris for proper drainage.",
    description:
      "We clear gutters of leaves, pine needles, and debris so water flows correctly and your roof and foundation stay protected. Clean gutters prevent overflow, ice dams, and water damage.",
    category: "maintenance",
    image: "/guttercleaning.jpg",
  },
  {
    slug: "snow-removal",
    name: "Snow Removal",
    shortDescription: "Driveways and walkways cleared after snow.",
    description:
      "Reliable snow plowing and shoveling for driveways and walkways. We respond quickly so you can get in and out safely all winter.",
    category: "seasonal",
    image: "/snowremoval.jpg",
  },
  {
    slug: "leaf-removal",
    name: "Leaf Removal",
    shortDescription: "Thorough leaf pickup and disposal in fall.",
    description:
      "We remove leaves from lawns, beds, and gutters so your property stays tidy and your lawn can breathe. Bagged or mulched according to your preference.",
    category: "seasonal",
    image: "/leafremoval.jpg",
  },
  {
    slug: "mulching",
    name: "Mulching",
    shortDescription: "Bed mulching to retain moisture and suppress weeds.",
    description:
      "Fresh mulch in beds improves moisture retention, suppresses weeds, and gives your landscape a finished look. We offer natural and dyed options.",
    category: "landscape",
    image: "/mulching.jpg",
  },
  {
    slug: "weeding",
    name: "Weeding",
    shortDescription: "Weed control in beds and borders.",
    description:
      "Hand weeding and spot treatment in flower beds, borders, and around plantings. We keep beds clean so your plants can thrive.",
    category: "landscape",
    image: "/weeding.jpg",
  },
  {
    slug: "seeding",
    name: "Seeding",
    shortDescription: "Overseeding for thicker, greener turf.",
    description:
      "Overseeding fills in thin or bare spots and improves turf density. We use quality seed and proper timing for the best germination and establishment.",
    category: "lawn",
    image: "/seeding.jpg",
  },
  {
    slug: "power-washing",
    name: "Power Washing",
    shortDescription: "Driveways, walkways, and siding cleaned.",
    description:
      "Professional power washing removes dirt, mold, and stains from driveways, walkways, patios, and siding. Restore the look of your hardscapes and exterior.",
    category: "maintenance",
    image: "/powerwashing.jpg",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "lawn",
    label: "Lawn Care",
    services: services.filter((s) => s.category === "lawn"),
  },
  {
    id: "landscape",
    label: "Landscaping",
    services: services.filter((s) => s.category === "landscape"),
  },
  {
    id: "seasonal",
    label: "Seasonal",
    services: services.filter((s) => s.category === "seasonal"),
  },
  {
    id: "maintenance",
    label: "Maintenance",
    services: services.filter((s) => s.category === "maintenance"),
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug);
}
