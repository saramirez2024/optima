"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Code, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Book a Demo Call",
    description:
      "15-minute call. We learn about your gym — classes, pricing, hours, vibe. You tell us what questions members ask most.",
  },
  {
    number: "02",
    icon: Code,
    title: "We Build Everything",
    description:
      "We train your AI chatbot, build your landing page, and set up lead capture. You review it. We handle all the tech.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live & Get Leads",
    description:
      "Your chatbot goes live on your site. Leads start flowing to your inbox. You get notified instantly for every new prospect.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white">
          Live in 48 Hours. Seriously.
        </h2>
        <p className="text-lg text-text-secondary text-center mt-4">
          From your first call to capturing leads — three steps, two days.
        </p>

        <div ref={ref} className="relative mt-12">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px border-t border-dashed border-border-dark -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              >
                <Card className="bg-dark-card border-border-dark p-8 rounded-lg relative z-10 h-full">
                  <span className="font-heading text-5xl font-bold text-primary opacity-30">
                    {step.number}
                  </span>
                  <step.icon className="text-primary mt-4" size={28} />
                  <h3 className="font-heading text-xl font-semibold text-white mt-4">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
