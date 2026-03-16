// ─── Types ───────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface EventItem {
  title: string;
  tagline: string;
  date?: string;
  location?: string;
  category?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export interface Office {
  city: string;
  detail: string;
}

// ─── Site metadata ───────────────────────────────────────
export const SITE_NAME = "City Heights";
export const SITE_TAGLINE = "Where Cities Celebrate";
export const SITE_DESCRIPTION = "Bespoke event production and luxury celebration management.";
export const SITE_URL = "https://cityheights.com";
export const SITE_EMAIL = "hello@cityheights.com";
export const SITE_PHONE = "+1 (555) 000-8888";
export const SITE_WHATSAPP = "+1 (234) 567-890";
export const EST_YEAR = "2012";

// ─── Navigation ──────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─── Offices ─────────────────────────────────────────────
export const OFFICES: Office[] = [
  { city: "New York City", detail: "Manhattan, 5th Ave" },
  { city: "London", detail: "Mayfair" },
  { city: "Dubai", detail: "Marina" },
  { city: "Mumbai", detail: "BKC" },
];

// ─── Social links ────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Vimeo", href: "#" },
];

// ─── Homepage data ───────────────────────────────────────
export const EXPERTISE_SERVICES: Service[] = [
  {
    icon: "PartyPopper",
    title: "Private Parties",
    description: "Intimate gatherings crafted with exquisite attention to every detail.",
  },
  {
    icon: "Building2",
    title: "Corporate Events",
    description: "Professional affairs that leave lasting impressions on your stakeholders.",
  },
  {
    icon: "Music",
    title: "Concerts & Festivals",
    description: "Large-scale productions with world-class sound, lighting, and artist curation.",
  },
  {
    icon: "Heart",
    title: "Weddings",
    description: "Once-in-a-lifetime celebrations designed to be unforgettable.",
  },
];

export const CASE_STUDY = {
  title: "The Midnight Garden Gala",
  description:
    "A transformative evening where nature meets high-technology. We curated every detail from the bio-luminescent flora to the 3D-mapped ceiling projections, creating a sensory journey for 500 elite guests.",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "City Heights turned our vision into an ethereal reality. The attention to detail in the lighting and flow was simply unmatched.",
    name: "Julian Thorne",
    role: "CEO, Lumina Corp",
  },
  {
    quote:
      "The most professional team I've ever worked with. They managed a 5,000 person concert with the grace of a private dinner party.",
    name: "Elena Rossi",
    role: "Creative Director",
  },
  {
    quote:
      "Excellence is an understatement. From the first sketch to the final breakdown, City Heights was flawless.",
    name: "Marcus Chen",
    role: "Philanthropist",
  },
];

export const HOMEPAGE_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Vision",
    description:
      "We begin by understanding your DNA — your tastes, your objectives, and your unspoken desires. This is where the concept takes root.",
  },
  {
    step: 2,
    title: "The Blueprint",
    description:
      "Detailed logistics meet creative brilliance. We map out every interaction, visual element, and technical requirement.",
  },
  {
    step: 3,
    title: "Flawless Execution",
    description:
      "Our on-site team manages the production like a symphony conductor, ensuring every cue is hit with absolute precision.",
  },
];

// ─── Services page data ──────────────────────────────────
export const EVENT_CATEGORIES = [
  "Corporate Events",
  "Weddings",
  "Concerts",
  "Festivals",
];

export const CORE_OFFERINGS: {
  title: string;
  description: string;
  features: string[];
}[] = [
  {
    title: "Venue Sourcing & Curation",
    description:
      "We provide access to the city's most exclusive and hidden gems. From rooftop terraces to underground industrial spaces, we find the perfect canvas for your vision.",
    features: [
      "Exclusive Partnerships",
      "Technical Feasibility Surveys",
      "VIP Access & Permitting",
    ],
  },
  {
    title: "Artist Management",
    description:
      "Elevate your event with world-class talent. Our roster includes global DJs, live performers, and celebrity hosts who know how to command a room.",
    features: [
      "Global Talent Procurement",
      "Rider & Technical Management",
      "Full Backstage Logistics",
    ],
  },
];

export const SERVICE_PROCESS: ProcessStep[] = [
  { step: 1, title: "Consultation", description: "Deep dive into your brand or vision to understand the desired impact and strategic goals." },
  { step: 2, title: "Concept", description: "Creative brainstorming and technical design blueprints drafted for your final approval." },
  { step: 3, title: "Execution", description: "Flawless on-site management lead by our specialized event strike teams and technicians." },
  { step: 4, title: "Post-Event", description: "Detailed debrief, high-res media delivery, and comprehensive performance analytics reporting." },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Essential",
    price: "$5k",
    features: [
      "Venue Sourcing",
      "Basic AV Setup",
      "Event Day Coordination",
      "Social Media Toolkit",
    ],
  },
  {
    name: "Premium",
    price: "$15k",
    highlight: true,
    features: [
      "Custom Concept Design",
      "High-End Artist Booking",
      "Premium Catering Partner",
      "Multi-cam Media Coverage",
    ],
  },
  {
    name: "Elite",
    price: "Custom",
    features: [
      "Private Jet Coordination",
      "International Talent Tours",
      "Full Brand Immersion",
      "24/7 Concierge Support",
    ],
  },
];

// ─── Events page data ────────────────────────────────────
export const FEATURED_EVENT: EventItem = {
  title: "The Midnight Garden Gala",
  tagline:
    "Step into a world where botanical beauty meets neon sophistication. An all-night affair featuring world-renowned DJs, bespoke cocktails, and immersive performance art.",
  date: "March 28, 2026",
  location: "The Glasshouse, London",
  category: "Gala",
};

export const UPCOMING_EVENTS: EventItem[] = [
  {
    title: "Neon Velvet Night",
    tagline: "A fusion of vintage luxury and futuristic neon aesthetics in the heart of the city.",
    date: "April 15, 2026",
    location: "SkyDeck, Dubai",
    category: "Nightlife",
  },
  {
    title: "Golden Horizon",
    tagline: "The annual gathering for electronic music enthusiasts under the harvest moon.",
    date: "May 22, 2026",
    location: "Sunset Bay, Ibiza",
    category: "Festival",
  },
  {
    title: "Purple Reign",
    tagline: "Mystery, masks, and royal decadence. Anonymity is your greatest asset tonight.",
    date: "June 10, 2026",
    location: "The Vault, NYC",
    category: "Masquerade",
  },
];

// ─── Blog page data ──────────────────────────────────────
export const FEATURED_ARTICLE: BlogPost = {
  title: "The Art of the Afterparty: Trends for 2026",
  excerpt:
    "Discover the evolution of luxury nightlife and how we're shaping the future of exclusive celebrations through immersive design and global artist curation.",
  category: "Industry News",
  slug: "art-of-afterparty-2026",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Planning the Perfect Gala: Expert Coordination",
    excerpt: "The logistical blueprint behind some of the world's most prestigious annual gatherings.",
    category: "Event Design",
    slug: "planning-perfect-gala",
  },
  {
    title: "Ibiza Reimagined: Where the Elite Spend Their Summer",
    excerpt: "Tracing the shift from superclubs to hyper-exclusive private villas and beach retreats.",
    category: "Industry News",
    slug: "ibiza-reimagined",
  },
  {
    title: "The Corporate Retreat: Reimagining Team Building",
    excerpt: "Blending business with luxury to foster creativity and connection.",
    category: "Event Design",
    slug: "corporate-retreat-reimagined",
  },
];

export const BLOG_CATEGORIES = [
  "All Posts",
  "Industry News",
  "Event Design",
  "Artist Spotlights",
];

export const EVENT_TIPS = [
  {
    title: "Choosing the Right Lighting",
    description: "Master the mood with layering techniques and smart kinetic fixtures.",
  },
  {
    title: "Top 5 Artist Booking Mistakes",
    description: "Avoid common pitfalls in contract negotiation and rider fulfillment.",
  },
];
