"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { PRICING_TIERS } from "@/lib/constants";

/* ─── Local data ─── */

const categories = [
  { title: "Corporate Events", image: "/images/cat-corporate.png", alt: "Corporate awards ceremony" },
  { title: "Weddings", image: "/images/cat-wedding.png", alt: "Beach wedding at sunset" },
  { title: "Concerts", image: "/images/cat-concert.png", alt: "Concert with laser show" },
  { title: "Festivals", image: "/images/cat-festival.png", alt: "Aerial view of music festival" },
];

const portfolio = [
  { title: "Luxury Wedding", location: "Dubai", image: "/images/port-dubai.png", caption: "An opulent celebration under the stars beside the city skyline." },
  { title: "Tech Summit", location: "Singapore", image: "/images/port-singapore.png", caption: "A futuristic conference for 500 global leaders in innovation." },
  { title: "Private Gala", location: "London", image: "/images/port-london.png", caption: "Black-tie dinner inside a historic Mayfair mansion." },
  { title: "Music Festival", location: "Ibiza", image: "/images/port-ibiza.png", caption: "Sunset beach stage with 3,000 guests and world-class DJs." },
];

const offerings = [
  {
    title: "Venue Sourcing & Curation",
    description: "We scout, negotiate, and secure the world's most exclusive venues — from hidden rooftops to private islands. Every space is chosen to match the energy and ambition of your event.",
    bullets: ["Exclusive Partnerships", "Technical Feasibility Surveys", "VIP Access & Permitting"],
    image: "/images/offering-venue.png",
    alt: "Underground venue being prepared",
  },
  {
    title: "Artist Management",
    description: "From headliner procurement to full backstage logistics, we handle every detail of talent management so your lineup hits every note.",
    bullets: ["Global Talent Procurement", "Rider & Technical Management", "Full Backstage Logistics"],
    image: "/images/offering-artist.png",
    alt: "DJ performing at private event",
  },
];

const processSteps = [
  { num: "01", title: "Consultation", description: "Deep dive into the client vision and event goals. We learn your DNA before we write a single brief." },
  { num: "02", title: "Concept", description: "Creative brainstorming meets technical planning. Mood boards, floor plans, and run-of-show documents take shape." },
  { num: "03", title: "Execution", description: "Professional on-site production and event management. Our crew runs the show while you enjoy it." },
  { num: "04", title: "Post Event", description: "Media delivery, analytics, and reporting. We capture everything so the memories live on." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/services-hero.png"
          alt="Massive luxury outdoor festival stage at night"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.4em] text-white/35 mb-6 font-[family-name:var(--font-poppins)]">
              What We Do
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tighter leading-[0.9]">
              Crafting Extraordinary
              <br />
              Moments
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="mt-8 text-lg text-white/45 max-w-xl mx-auto leading-relaxed">
              From intimate gatherings to world-stage productions. We design experiences people never forget.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.45}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-10 py-6 bg-white text-black hover:bg-white/90 rounded-full group"
              >
                <Link href="#categories">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-10 py-6 border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-sm"
              >
                <Link href="/contact">Plan Your Event</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — EVENT CATEGORIES
          ══════════════════════════════════════════════════ */}
      <section id="categories" className="py-28 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-[family-name:var(--font-poppins)]">
                Event Categories
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight leading-[1.05]">
                Every Format,
                <br />
                One Standard
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight">
                      {cat.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors">
                      View events
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — SIGNATURE EVENTS / PORTFOLIO
          ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-[family-name:var(--font-poppins)]">
                Signature Events
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight">
                Our Portfolio
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolio.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[16/10]">
                  <Image
                    src={event.image}
                    alt={`${event.title} in ${event.location}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-2 text-xs text-white/50 mb-2">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-white/40 max-w-md opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {event.caption}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — CORE OFFERINGS (editorial split)
          ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="max-w-xl mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-[family-name:var(--font-poppins)]">
                Core Offerings
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight leading-[1.05]">
                What Sets
                <br />
                Us Apart
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-24">
            {offerings.map((item, i) => (
              <AnimatedSection key={item.title}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] md:[direction:ltr]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text */}
                  <div className="md:[direction:ltr]">
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight mb-6">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-lg leading-relaxed mb-8">
                      {item.description}
                    </p>
                    <ul className="space-y-4">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-white/60">
                          <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-white/50" />
                          </div>
                          <span className="text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — OUR PROCESS (numbered timeline)
          ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-[family-name:var(--font-poppins)]">
                The City Heights Way
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight">
                Our Process
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.12}>
                <div className="relative group px-8 py-14 border-l border-white/[0.06] first:border-l-0 md:first:border-l hover:bg-white/[0.02] transition-colors duration-500">
                  <span className="text-7xl font-bold text-white/[0.04] font-[family-name:var(--font-poppins)] absolute top-4 right-6 select-none group-hover:text-white/[0.08] transition-colors duration-500">
                    {step.num}
                  </span>
                  <div className="relative">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/20 mb-3">
                      Step {step.num}
                    </p>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] text-white mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/30 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — EVENT PACKAGES
          ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-[family-name:var(--font-poppins)]">
                Packages
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight">
                Event Packages
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.12}>
                <Card
                  className={`h-full border transition-all duration-500 hover:-translate-y-1 ${
                    tier.highlight
                      ? "bg-white/[0.06] border-white/[0.15] shadow-lg shadow-white/[0.03]"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                  }`}
                >
                  <CardHeader className="pb-4 p-8">
                    {tier.highlight && (
                      <Badge variant="secondary" className="w-fit mb-4 bg-white/10 text-white text-[10px] uppercase tracking-widest border-0">
                        Most Popular
                      </Badge>
                    )}
                    <CardTitle className="text-white font-[family-name:var(--font-poppins)] text-xl tracking-tight">
                      {tier.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white font-[family-name:var(--font-poppins)]">
                        {tier.price}
                      </span>
                      {tier.price !== "Custom" && (
                        <span className="text-sm text-white/30 ml-2">/ event</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-white/40">
                          <Check className="h-4 w-4 text-white/25 mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full rounded-full ${
                        tier.highlight
                          ? "bg-white text-black hover:bg-white/90"
                          : "bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/[0.08]"
                      }`}
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — FINAL CTA
          ══════════════════════════════════════════════════ */}
      <section className="py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight leading-[1.1]">
              Ready to Ignite
              <br />
              the Night?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-6 text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
              Join the ranks of the city&apos;s most prestigious event hosts.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Button
              asChild
              size="lg"
              className="mt-10 text-base px-12 py-6 bg-white text-black hover:bg-white/90 rounded-full group"
            >
              <Link href="/contact">
                Start Planning
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
