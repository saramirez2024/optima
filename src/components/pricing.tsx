"use client";

import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Launch",
    description: "Everything you need to start capturing leads.",
    setup: "$1,200",
    monthly: "$200/mo",
    highlighted: false,
    features: [
      "Custom landing page",
      "AI chatbot trained on your gym",
      "Lead capture with instant notifications",
      "Google Sheets integration",
      "Basic analytics dashboard",
      "48-hour deployment",
      "Email support",
      "Unlimited conversations",
    ],
  },
  {
    name: "Growth",
    description: "For gyms ready to scale their online presence.",
    setup: "$1,800",
    monthly: "$350/mo",
    highlighted: true,
    features: [
      "Everything in Launch, plus:",
      "Monthly content updates",
      "SEO optimization",
      "A/B testing on chatbot responses",
      "Custom integrations (Mindbody, Zen Planner)",
      "Priority phone support",
      "Advanced analytics + reporting",
      "Slack notifications for new leads",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-text-secondary text-center mt-4">
          No contracts. No surprises. Cancel anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`bg-dark-card p-8 rounded-xl relative ${
                tier.highlighted
                  ? "border-primary md:scale-105"
                  : "border-border-dark"
              }`}
            >
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                  Most Popular
                </Badge>
              )}

              <h3 className="font-heading text-2xl font-bold text-white">
                {tier.name}
              </h3>
              <p className="text-text-secondary text-sm mt-2">
                {tier.description}
              </p>

              <div className="mt-6">
                <span className="font-heading text-4xl font-bold text-white">
                  {tier.setup}
                </span>
                <span className="text-sm text-text-muted ml-2">
                  one-time setup
                </span>
              </div>
              <div className="font-heading text-2xl text-text-secondary mt-1">
                {tier.monthly}
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <Check className="text-primary shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="[YOUR_CALENDLY_URL]"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), "w-full bg-primary text-white btn-glow mt-8")}
              >
                Book a Demo
              </a>
            </Card>
          ))}
        </div>

        <p className="text-center mt-8 text-text-secondary text-sm">
          Questions about pricing? Reach out at{" "}
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
