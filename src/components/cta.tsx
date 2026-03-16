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
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            {description}
          </p>
        )}
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="group text-base px-8"
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
