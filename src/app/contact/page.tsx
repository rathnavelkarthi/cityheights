"use client";

import {
  Mail,
  Phone,
  ArrowRight,
  Send,
  MapPin,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/animated-section";
import { OFFICES, SITE_EMAIL, SITE_WHATSAPP } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/contact-hero.png"
          alt="Luxury event consultation"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-[family-name:var(--font-poppins)]">
              Connect
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tighter leading-[0.85] mb-8">
              Start Your
              <br />
              Legacy
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
              From initial sketch to final applause. Our global teams are ready to transform your vision into an iconic reality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — THE SPLIT (OFFICES & FORM)
          ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left: Global Presence */}
            <AnimatedSection>
              <div className="space-y-16">
                <div>
                  <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight mb-6">
                    Global Offices
                  </h2>
                  <p className="text-white/40 leading-relaxed max-w-md">
                    Strategically located in the world&apos;s celebration capitals to provide seamless on-site production and logistics.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {OFFICES.map((office) => (
                    <div key={office.city} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center italic text-white/20 text-xs font-serif">
                          CC
                        </div>
                        <h3 className="text-lg font-bold text-white font-[family-name:var(--font-poppins)]">
                          {office.city}
                        </h3>
                      </div>
                      <p className="text-sm text-white/40 pl-11">{office.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-10 border-t border-white/5 space-y-6">
                  <div className="flex items-center gap-6">
                     <a href={`mailto:${SITE_EMAIL}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                        <Mail className="h-5 w-5 text-white/20" />
                        <span className="text-sm">{SITE_EMAIL}</span>
                     </a>
                     <a href={`tel:${SITE_WHATSAPP}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                        <Phone className="h-5 w-5 text-white/20" />
                        <span className="text-sm">{SITE_WHATSAPP}</span>
                     </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white hover:text-black transition-all">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white hover:text-black transition-all">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white hover:text-black transition-all">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Inquiry Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-neutral-900 border border-white/5 p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Globe className="h-32 w-32 text-white" />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight mb-4">
                    Event Inquiry
                  </h2>
                  <p className="text-white/30 text-sm mb-10">
                    Brief us on your milestone. We review every vision within 24 hours.
                  </p>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/20 ml-4 font-medium">First Name</label>
                        <Input className="rounded-full bg-white/5 border-white/10 text-white h-14 px-6 focus:border-white/30" placeholder="Julian" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/20 ml-4 font-medium">Last Name</label>
                        <Input className="rounded-full bg-white/5 border-white/10 text-white h-14 px-6 focus:border-white/30" placeholder="Thorne" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/20 ml-4 font-medium">Email Address</label>
                      <Input type="email" className="rounded-full bg-white/5 border-white/10 text-white h-14 px-6 focus:border-white/30" placeholder="julian@example.com" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/20 ml-4 font-medium">Event Type</label>
                        <Input className="rounded-full bg-white/5 border-white/10 text-white h-14 px-6 focus:border-white/30" placeholder="Private Gala" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/20 ml-4 font-medium">Preferred Date</label>
                        <Input type="date" className="rounded-full bg-white/5 border-white/10 text-white h-14 px-6 focus:border-white/30" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/20 ml-4 font-medium">The Vision</label>
                      <Textarea 
                        className="rounded-[2rem] bg-white/5 border-white/10 text-white p-6 focus:border-white/30 min-h-[150px]" 
                        placeholder="Tell us what makes this event legendary..." 
                      />
                    </div>

                    <Button className="w-full rounded-full bg-white text-black hover:bg-white/90 h-16 font-bold text-base group">
                      Send Inquiry
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — MAP / WATERMARK
          ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
             <div className="inline-flex items-center gap-4 text-white/20 mb-8">
                <MapPin className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.5em]">Global Operations Enabled</span>
             </div>
             <div className="relative h-[400px] w-full bg-neutral-950 rounded-[3rem] border border-white/5 overflow-hidden group">
                {/* Visual placeholder for map with premium styling */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-8xl md:text-[12rem] font-bold text-white/[0.02] font-[family-name:var(--font-poppins)] select-none">
                      CITY HEIGHTS
                   </div>
                </div>
                {/* Floating indicators for cities */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/40 animate-ping" />
                <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-white/40 animate-ping delay-700" />
                <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-white/40 animate-ping delay-1000" />
                
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <p className="text-white/40 text-lg max-w-xl font-light italic leading-relaxed">
                      &ldquo;We don&apos;t just manage events. We engineer memories that define eras for the world&apos;s most influential hosts.&rdquo;
                   </p>
                </div>
             </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
