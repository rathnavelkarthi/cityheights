import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title,
  description,
  buttonText = "Get Started",
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-white/40 mb-8 max-w-xl mx-auto">
            {description}
          </p>
        )}
        <Button
          asChild
          size="lg"
          className="group text-base px-8 rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
        >
          <Link href={buttonHref}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
