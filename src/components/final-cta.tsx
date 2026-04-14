import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 bg-dark-card">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Stop Losing Leads After Hours
        </h2>
        <p className="text-lg md:text-xl text-text-secondary mt-4">
          Your gym&apos;s smartest employee is one call away. Live in 48 hours.
          No contracts.
        </p>
        <a
          href="[YOUR_CALENDLY_URL]"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 bg-primary text-white font-semibold btn-glow mt-8")}
        >
          Book a Demo
        </a>
        <p className="text-sm text-text-muted mt-4">
          Or email us at{" "}
          <a
            href="mailto:[YOUR_EMAIL]"
            className="text-primary hover:underline"
          >
            [YOUR_EMAIL]
          </a>
        </p>
      </div>
    </section>
  );
}
