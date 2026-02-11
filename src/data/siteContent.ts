export type PortfolioCategory = "Residential" | "Commercial" | "Hospitality" | "Hardware Showcase";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  image: string;
  description: string;
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "RB Enterprises", path: "/rb-enterprises" },
  { label: "RB Interiors", path: "/rb-interiors" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Studio", path: "/studio" },
  { label: "Contact", path: "/contact" },
];

export const heroStats = [
  { label: "Years of Experience", value: "18+" },
  { label: "Projects Delivered", value: "420+" },
  { label: "Associated Brand Partners", value: "35+" },
  { label: "Cities Served", value: "12" },
];

export const hardwareCategories = [
  "Architectural Hardware",
  "Door & Window Fittings",
  "Modular Kitchen Accessories",
  "Smart Locks & Security",
  "Bulk Contractor Supplies",
  "Premium Surface & Finish Solutions",
];

export const associatedBrands = [
  "Häfele",
  "Godrej Locks",
  "Hettich",
  "Dorma",
  "Ebco",
  "Ozone",
];

export const interiorsServices = [
  "Residential Interior Design",
  "Workspace Planning & Execution",
  "Turnkey Renovation",
  "Custom Furniture & Joinery",
  "Material Curation & Styling",
  "Project Management & Handover",
];

export const processSteps = [
  { title: "01 · Discovery Call", description: "Understand requirements and lock a site visit as the first milestone." },
  { title: "02 · Site Visit", description: "Measure, assess spatial opportunities, and map practical constraints." },
  { title: "03 · Concept & Budget", description: "Share concepts, budget ranges, and material direction for approval." },
  { title: "04 · Execution", description: "Coordinate procurement, timelines, and quality checks from start to handover." },
];

export const testimonialsPlaceholder = [
  {
    name: "Client Testimonial Placeholder",
    text: "Replace this with verified testimonial copy once customer quotes and approvals are finalized.",
  },
  {
    name: "Architect Collaboration Placeholder",
    text: "Add project-specific feedback from associated architects, builders, and procurement teams.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "urban-residence",
    title: "Urban Residence Revamp",
    category: "Residential",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "Minimal-luxury apartment with curated hardware finishes and ambient lighting.",
  },
  {
    id: "corporate-suite",
    title: "Executive Corporate Suite",
    category: "Commercial",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    description: "Workspace transformation balancing acoustics, circulation, and premium materials.",
  },
  {
    id: "boutique-lobby",
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    description: "Hospitality arrival experience with warm tones, stone textures, and sculptural fixtures.",
  },
  {
    id: "hardware-display",
    title: "Hardware Experience Gallery",
    category: "Hardware Showcase",
    location: "Navi Mumbai",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    description: "Category-led layout featuring smart locks, sliding systems, and premium fittings.",
  },
  {
    id: "villa-core",
    title: "Luxury Villa Core",
    category: "Residential",
    location: "Lonavala",
    image: "https://images.unsplash.com/photo-1600566752225-3f2f6f8f64d9?auto=format&fit=crop&w=1200&q=80",
    description: "End-to-end villa interiors with integrated lighting, storage, and automation-ready hardware.",
  },
  {
    id: "retail-flagship",
    title: "Retail Flagship Refresh",
    category: "Commercial",
    location: "Thane",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
    description: "Display-focused planning with high-durability fittings for premium customer traffic.",
  },
];
