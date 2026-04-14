"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, UserPlus, Zap, Moon } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Sounds Like You",
    description:
      "Trained on your gym's specific info — classes, pricing, hours, policies. Members can not tell it is not your staff.",
  },
  {
    icon: UserPlus,
    title: "Captures Every Lead",
    description:
      "Collects name, email, phone from every prospect. Sends you instant notifications. No lead slips through.",
  },
  {
    icon: Zap,
    title: "Live in 48 Hours",
    description:
      "We handle everything. Send us your info, we build and deploy. You are live in two days, not two months.",
  },
  {
    icon: Moon,
    title: "Never Sleeps",
    description:
      "Works nights, weekends, and holidays. Answers the same question for the 50th time without getting annoyed.",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
          Meet Your New 24/7 Employee
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-4">
          An AI chatbot trained on your gym. Answers questions, captures leads,
          books tours. Always on.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              <Card className="bg-dark-card border-border-dark p-6 rounded-lg h-full">
                <feature.icon className="text-primary" size={24} />
                <h3 className="font-heading text-lg font-semibold text-white mt-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm mt-2">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
