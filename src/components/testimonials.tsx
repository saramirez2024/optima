"use client";

import { Star, User } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { value: "--", label: "Leads/Week" },
  { value: "--", label: "Response Time" },
  { value: "--", label: "Hours Saved" },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white">
          What Gym Owners Are Saying
        </h2>

        <Card className="bg-dark-card border-border-dark p-8 rounded-xl text-center mt-12">
          {/* Stars */}
          <div className="flex gap-1 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-yellow-400"
                size={20}
                fill="currentColor"
              />
            ))}
          </div>

          {/* Quote */}
          <p className="italic text-lg text-text-secondary mt-6">
            &ldquo;[Your first client&apos;s story goes here. We are currently
            onboarding our first gym partners and collecting their
            results.]&rdquo;
          </p>

          {/* Attribution */}
          <div className="mt-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center mx-auto">
              <User className="text-primary" size={20} />
            </div>
            <div className="text-white font-semibold mt-3">-- --</div>
            <div className="text-sm text-text-muted">Gym Owner</div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 max-w-md mx-auto">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <p className="text-center mt-8 text-text-secondary text-sm">
          Want to be our first case study?{" "}
          <a
            href="[YOUR_CALENDLY_URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Book a demo
          </a>
        </p>
      </div>
    </section>
  );
}
