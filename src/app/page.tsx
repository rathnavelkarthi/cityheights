"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { CTA } from "@/components/cta";
import {
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  EXPERTISE_SERVICES,
  CASE_STUDY,
  TESTIMONIALS,
  HOMEPAGE_PROCESS,
  EST_YEAR,
} from "@/lib/constants";

const serviceImages = [
  { src: "/images/service-party.png", alt: "Private party with velvet booths and champagne" },
  { src: "/images/service-corporate.png", alt: "Corporate gala dinner in glass rooftop venue" },
  { src: "/images/service-concert.png", alt: "Music festival with laser light show" },
  { src: "/images/service-wedding.png", alt: "Destination wedding on Mediterranean terrace" },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO — Cinematic full-screen with real photography
          ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero.png"
          alt="Luxury gala event with dramatic lighting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8 font-[family-name:var(--font-poppins)]">
              Luxury Event Management &middot; Est. {EST_YEAR}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tighter leading-[0.9]">
              {SITE_TAGLINE}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              {SITE_DESCRIPTION}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-10 py-6 bg-white text-black hover:bg-white/90 rounded-full group"
              >
                <Link href="/contact">
                  Plan Your Event
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-10 py-6 border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-sm"
              >
                <Link href="/events">View Our Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EXPERTISE — Premium service blocks with large images
          ══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="max-w-xl mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-[family-name:var(--font-poppins)]">
                Our Expertise
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-poppins)] tracking-tight leading-[1.05]">
                Bespoke Event
                <br />
                Management
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EXPERTISE_SERVICES.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]">
                  {/* Service image */}
                  <Image
                    src={serviceImages[i].src}
                    alt={serviceImages[i].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors">
                      Learn more
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
          CASE STUDY — Split layout with large visual storytelling
          ══════════════════════════════════════════════════ */}
      <section className="py-0 bg-neutral-950 text-white">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          {/* Image side */}
          <AnimatedSection className="relative overflow-hidden">
            <div className="relative h-full min-h-[50vh] md:min-h-full">
              <Image
                src="/images/case-study.png"
                alt="The Midnight Garden Gala - aerial view of illuminated botanical event"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-950/30 hidden md:block" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/20 transition-colors group">
                  <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 lg:px-24 py-20 md:py-0">
            <AnimatedSection delay={0.2}>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6 font-[family-name:var(--font-poppins)]">
                Featured Case Study
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] tracking-tight leading-[1.1] mb-8">
                {CASE_STUDY.title}
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10">
                {CASE_STUDY.description}
              </p>
              <div className="flex flex-wrap gap-8 text-sm text-white/30 mb-10">
                <div>
                  <p className="text-2xl font-bold text-white font-[family-name:var(--font-poppins)]">500+</p>
                  <p>Guests</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white font-[family-name:var(--font-poppins)]">12h</p>
                  <p>Duration</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white font-[family-name:var(--font-poppins)]">3</p>
                  <p>Stages</p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-white/15 text-white hover:bg-white/5 rounded-full px-8 group"
              >
                <Link href="#">
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS — Dark luxury aesthetic
          ══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-[family-name:var(--font-poppins)]">
                Client Whispers
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] tracking-tight">
                What They Say
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <Card className="h-full bg-white/[0.03] border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.05] transition-colors duration-500">
                  <CardContent className="p-8 flex flex-col gap-6">
                    <Quote className="h-8 w-8 text-white/10" />
                    <p className="text-white/50 leading-relaxed flex-1 text-[15px]">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="pt-6 border-t border-white/[0.06]">
                      <p className="font-semibold text-sm text-white">{t.name}</p>
                      <p className="text-xs text-white/30 mt-1">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROCESS — Minimal numbered timeline
          ══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-[family-name:var(--font-poppins)]">
                The Alchemy of Planning
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight">
                Our Process
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {HOMEPAGE_PROCESS.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.15}>
                <div className="relative group px-8 py-12 md:py-16 border-l border-white/[0.06] first:border-l-0 md:first:border-l hover:bg-white/[0.02] transition-colors duration-500">
                  {/* Big number */}
                  <span className="text-7xl md:text-8xl font-bold text-white/[0.04] font-[family-name:var(--font-poppins)] absolute top-6 right-8 select-none group-hover:text-white/[0.08] transition-colors duration-500">
                    0{step.step}
                  </span>

                  <div className="relative">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/20 mb-4">
                      Step 0{step.step}
                    </p>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-white mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/35 leading-relaxed max-w-xs">
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
          CTA
          ══════════════════════════════════════════════════ */}
      <CTA
        title="Let's Create Something Legendary"
        description="From private galas to global festivals. Your vision, our obsession."
        buttonText="Start a Conversation"
      />
    </>
  );
}
