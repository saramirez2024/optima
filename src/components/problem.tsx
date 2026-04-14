"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, TrendingDown, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "After-Hours Silence",
    description:
      "A prospect visits your site at 10 PM, ready to sign up. No one answers. By morning, they have joined the gym down the street.",
  },
  {
    icon: Users,
    title: "Front Desk Bottleneck",
    description:
      "Your staff is checking people in, answering phones, and handling complaints. New member questions get half-answers or no answers.",
  },
  {
    icon: TrendingDown,
    title: "Leads Go Cold in Minutes",
    description:
      "Research shows response time is everything. Wait an hour and your conversion rate drops by 80%. Wait a day and that lead is gone.",
  },
  {
    icon: FileText,
    title: "No System for Follow-Up",
    description:
      "Sticky notes, forgotten voicemails, a spreadsheet someone started and nobody updates. Leads slip through the cracks daily.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
          Your Front Desk Closes at 9 PM. Your Competition Doesn&apos;t.
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-4">
          Every unanswered question is a lost membership. Every missed
          after-hours inquiry is revenue walking out the door.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              <Card className="bg-dark-card border-border-dark p-6 rounded-lg h-full">
                <problem.icon className="text-primary" size={24} />
                <h3 className="font-heading text-lg font-semibold text-white mt-4">
                  {problem.title}
                </h3>
                <p className="text-text-secondary text-sm mt-2">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
