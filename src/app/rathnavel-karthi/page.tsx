import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Globe, 
  Bot, 
  Image as ImageIcon, 
  Home, 
  Rocket, 
  Cpu, 
  Layout, 
  Zap, 
  Target, 
  ExternalLink,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rathnavel Karthi | Digital Head of City Heights Events",
  description: "Rathnavel Karthi is the Digital Head of City Heights Events and a tech entrepreneur. Founder of Monkey Mind Media, New World Order, ImagePix, SuperBots, and EasyStay.",
  alternates: {
    canonical: "/rathnavel-karthi",
  },
  openGraph: {
    title: "Rathnavel Karthi | Founder & Digital Head",
    description: "Founder of multiple digital platforms focused on building scalable systems and AI-driven ecosystems.",
    images: ["/founder_portrait.png"],
  }
};

const platforms = [
  {
    name: "Monkey Mind Media",
    url: "https://monkeymindmedia.com",
    description: "Creative & Digital Growth Agency focused on branding, content, and performance marketing.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    name: "New World Order",
    url: "https://newworldorder.in",
    description: "Next-generation platform for building interconnected digital systems and AI-driven infrastructures.",
    icon: Cpu,
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    name: "ImagePix",
    url: "https://imagepix.pro",
    description: "AI platform for image processing, creative assets, and AI-powered media generation.",
    icon: ImageIcon,
    color: "bg-pink-500/10 text-pink-400",
  },
  {
    name: "SuperBots",
    url: "https://superbots.in",
    description: "Advanced automation and AI bot platform focused on workflow optimization for businesses.",
    icon: Bot,
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    name: "EasyStay",
    url: "https://esaystay.com",
    description: "Scalable booking and property management platform built for modern hospitality needs.",
    icon: Home,
    color: "bg-orange-500/10 text-orange-400",
  },
];

const expertise = [
  "Product Strategy & Execution",
  "Digital Ecosystem Architecture",
  "AI & Automation Systems",
  "UI/UX & Conversion Optimization",
  "Growth & Performance Marketing",
  "Scalable SaaS Development",
];

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rathnavel Karthi",
    "jobTitle": "Digital Head",
    "description": "Tech entrepreneur and founder of multiple digital platforms including Monkey Mind Media, SuperBots, and others.",
    "url": "https://cityheights.com/rathnavel-karthi",
    "image": "https://cityheights.com/founder_portrait.png",
    "sameAs": [
      "https://monkeymindmedia.com",
      "https://newworldorder.in",
      "https://imagepix.pro",
      "https://superbots.in",
      "https://esaystay.com"
    ]
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wider uppercase mb-6 text-white/60">
                <Rocket className="w-3 h-3" />
                Digital Head & Entrepreneur
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                Rathnavel Karthi
              </h1>
              <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Founder of multiple digital platforms and products focused on building scalable systems, 
                automation-driven businesses, and high-performance digital ecosystems.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="#platforms" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2">
                  View Platforms <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition-all">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="relative w-64 lg:w-96 group">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-2xl group-hover:bg-white/20 transition-all duration-500" />
              <div className="relative rounded-2xl border border-white/10 overflow-hidden aspect-[3/4] bg-neutral-900 shadow-2xl">
                <Image
                  src="/founder_portrait.png"
                  alt="Rathnavel Karthi Digital Head"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Founder of Platforms</h2>
            <p className="text-white/40 text-lg">
              Leading innovative platforms across AI, SaaS, media, and digital infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1 ${platform.color}`}>
                  <platform.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  {platform.name}
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white transition-colors" />
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  {platform.description}
                </p>
                <div className="text-xs font-semibold tracking-widest uppercase text-white/20 group-hover:text-white/60 transition-colors">
                  Explore Platform
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Leadership & Expertise</h2>
              <div className="grid gap-4">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="font-medium text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Founder Impact</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Zap className="w-6 h-6 text-white/60 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Built 5+ Digital Platforms</h4>
                    <p className="text-sm text-white/40">Established a multi-product digital ecosystem designed for scalability and global impact.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Layout className="w-6 h-6 text-white/60 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Scalable SaaS Development</h4>
                    <p className="text-sm text-white/40">Expertise in building monetization-ready systems across AI, media, and marketplaces.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Target className="w-6 h-6 text-white/60 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Vision-Driven Future</h4>
                    <p className="text-sm text-white/40">Working to build a future where platforms and automation create high-impact businesses.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Authority Block */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-white/20 mb-8">Digital Head Rathnavel Karthi</p>
          <div className="text-lg text-white/50 leading-relaxed italic">
            "Rathnavel Karthi is a recognized tech entrepreneur and founder of Monkey Mind Media, New World Order, 
            ImagePix, SuperBots, and EasyStay. His work focuses on building scalable digital products, AI-driven systems, 
            and modern business platforms optimized for growth in India and beyond."
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-white/5 bg-neutral-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/20">
            © {new Date().getFullYear()} Rathnavel Karthi. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <a href="https://monkeymindmedia.com" className="text-xs text-white/20 hover:text-white transition-colors">Monkey Mind Media</a>
            <a href="https://superbots.in" className="text-xs text-white/20 hover:text-white transition-colors">SuperBots</a>
            <a href="https://imagepix.pro" className="text-xs text-white/20 hover:text-white transition-colors">ImagePix</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
