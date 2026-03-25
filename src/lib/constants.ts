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
export const SITE_NAME = "City Heights Events";
export const SITE_TAGLINE = "Your dreams, our creation";
export const SITE_DESCRIPTION =
  "Premium event planning and celebration management by Jabes Amirtharaj, based in Chennai.";
export const SITE_URL = "http://www.cityheights.com";
export const SITE_EMAIL = "cityheights1@gmail.com";
export const SITE_PHONE = "+91 98842 20242";
export const SITE_WHATSAPP = "+91 98842 20242";
export const EST_YEAR = "2012";
export const FOUNDER_NAME = "Jabez Amirtharaj";

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
  { city: "Nungambakkam", detail: "No. 10, Jagannathan Street, Chennai" },
  { city: "Kolathur", detail: "Water Canal Road, Chennai" },
];

// ─── Social links ────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/city_heights_groups/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/City-Heights-Events/100064761493413/",
  },
];

// ─── Homepage data ───────────────────────────────────────
export const EXPERTISE_SERVICES: Service[] = [
  {
    icon: "PartyPopper",
    title: "Private Parties",
    description:
      "Intimate gatherings crafted with exquisite attention to every detail, from birthday bashes to anniversary celebrations.",
  },
  {
    icon: "Building2",
    title: "Corporate Events",
    description:
      "Professional conferences, product launches, and corporate galas that leave lasting impressions on your stakeholders.",
  },
  {
    icon: "Music",
    title: "Concerts & Festivals",
    description:
      "Large-scale productions with world-class sound, lighting, and artist curation across Chennai's top venues.",
  },
  {
    icon: "Heart",
    title: "Weddings",
    description:
      "Once-in-a-lifetime celebrations designed to be unforgettable, blending tradition with contemporary elegance.",
  },
];

export const CASE_STUDY = {
  title: "The Royal Heritage Reception",
  description:
    "A grand reception at ITC Grand Chola that brought together 800 guests for a night of opulence. From the hand-curated floral decor to the choreographed lighting sequences, every detail was orchestrated to create a seamless, unforgettable evening.",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "City Heights turned our wedding reception into a fairy tale. The decor, the lighting, and the coordination were absolutely flawless. Jabes and his team exceeded every expectation.",
    name: "Priya & Arun",
    role: "Wedding Reception, Chennai",
  },
  {
    quote:
      "We trusted City Heights with our annual corporate gala and they delivered beyond what we imagined. The professionalism and attention to detail were simply outstanding.",
    name: "Suresh Ramanathan",
    role: "Managing Director, TechNova Solutions",
  },
  {
    quote:
      "From concept to execution, Jabes and his team managed our product launch event flawlessly. The venue setup and the artist performances kept our guests engaged all evening.",
    name: "Kavitha Sundaram",
    role: "Head of Marketing, Apex Industries",
  },
];

export const HOMEPAGE_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Vision",
    description:
      "We begin by understanding your preferences, your objectives, and the experience you want to create. This is where the concept takes root.",
  },
  {
    step: 2,
    title: "The Blueprint",
    description:
      "Detailed logistics meet creative brilliance. We map out every interaction, visual element, venue setup, and technical requirement.",
  },
  {
    step: 3,
    title: "Flawless Execution",
    description:
      "Our on-site team manages the production like a symphony conductor, ensuring every moment is delivered with precision.",
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
      "We provide access to Chennai's most sought-after venues. From luxury hotel ballrooms to open-air beachside locations, we find the perfect setting for your vision.",
    features: [
      "Exclusive Venue Partnerships",
      "Technical Feasibility Surveys",
      "Permitting & Logistics",
    ],
  },
  {
    title: "Artist & Entertainment Management",
    description:
      "Elevate your event with the right entertainment. From live bands and DJs to celebrity hosts and traditional performers, we handle the entire booking and coordination process.",
    features: [
      "Talent Procurement & Booking",
      "Technical & Sound Management",
      "Full Backstage Coordination",
    ],
  },
];

export const SERVICE_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation",
    description:
      "Deep dive into your vision and event goals. We understand your requirements before drafting a single plan.",
  },
  {
    step: 2,
    title: "Concept",
    description:
      "Creative brainstorming and technical design blueprints drafted for your review and approval.",
  },
  {
    step: 3,
    title: "Execution",
    description:
      "Flawless on-site management led by our experienced event crew and technicians.",
  },
  {
    step: 4,
    title: "Post-Event",
    description:
      "Detailed debrief, high-resolution media delivery, and comprehensive event performance review.",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Essential",
    price: "\u20B950k",
    features: [
      "Venue Sourcing",
      "Basic AV Setup",
      "Event Day Coordination",
      "Photo & Video Coverage",
    ],
  },
  {
    name: "Premium",
    price: "\u20B92L",
    highlight: true,
    features: [
      "Custom Concept Design",
      "Artist & Entertainment Booking",
      "Premium Catering Partner",
      "Multi-cam Media Coverage",
    ],
  },
  {
    name: "Elite",
    price: "Custom",
    features: [
      "End-to-End Production",
      "Celebrity Performances",
      "Full Brand Immersion",
      "Dedicated Event Manager",
    ],
  },
];

// ─── Events page data ────────────────────────────────────
export const FEATURED_EVENT: EventItem = {
  title: "The Grand Sangeet Night",
  tagline:
    "An enchanting evening of music, dance, and celebration. Featuring live performances, curated cocktails, and immersive decor at one of Chennai's most iconic venues.",
  date: "April 12, 2026",
  location: "ITC Grand Chola, Chennai",
  category: "Wedding",
};

export const UPCOMING_EVENTS: EventItem[] = [
  {
    title: "Neon Nights Chennai",
    tagline:
      "A fusion of contemporary music and stunning neon aesthetics at Chennai's premier nightlife venue.",
    date: "April 26, 2026",
    location: "The Leela Palace, Chennai",
    category: "Nightlife",
  },
  {
    title: "Summer Music Fest",
    tagline:
      "Chennai's biggest open-air music festival featuring top indie and electronic artists.",
    date: "May 17, 2026",
    location: "YMCA Grounds, Nandanam",
    category: "Festival",
  },
  {
    title: "Corporate Excellence Awards",
    tagline:
      "An annual gathering recognising outstanding corporate achievements in the Tamil Nadu business community.",
    date: "June 8, 2026",
    location: "Taj Coromandel, Chennai",
    category: "Corporate",
  },
];

// ─── Blog page data ──────────────────────────────────────
export const FEATURED_ARTICLE: BlogPost = {
  title: "Event Planning Trends Shaping Chennai in 2026",
  excerpt:
    "Discover how Chennai's event scene is evolving with immersive decor, sustainable practices, and technology-driven experiences that are redefining celebrations.",
  category: "Industry News",
  slug: "event-trends-chennai-2026",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How to Plan the Perfect Wedding Reception in Chennai",
    excerpt:
      "A step-by-step guide to choosing venues, coordinating vendors, and creating an unforgettable wedding reception in the heart of South India.",
    category: "Event Design",
    slug: "perfect-wedding-reception-chennai",
  },
  {
    title: "Top 10 Event Venues in Chennai You Need to Know",
    excerpt:
      "From heritage mansions to waterfront convention centres, here are the best venues for hosting world-class events in Chennai.",
    category: "Industry News",
    slug: "top-event-venues-chennai",
  },
  {
    title: "Corporate Events That Leave a Lasting Impression",
    excerpt:
      "How leading Chennai companies are transforming their annual meets and product launches into immersive brand experiences.",
    category: "Event Design",
    slug: "corporate-events-lasting-impression",
  },
];

export const BLOG_CATEGORIES = [
  "All Posts",
  "Industry News",
  "Event Design",
  "Tips & Guides",
];

export const EVENT_TIPS = [
  {
    title: "Choosing the Right Venue in Chennai",
    description:
      "From capacity to ambience, learn what to look for when selecting the perfect event venue in Chennai.",
  },
  {
    title: "5 Common Event Planning Mistakes to Avoid",
    description:
      "Practical advice from our experience managing hundreds of events across Chennai and Tamil Nadu.",
  },
];
