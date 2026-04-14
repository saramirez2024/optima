"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient orb */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] opacity-20 blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={
          mousePos.x === 0 && mousePos.y === 0
            ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
            : { top: mousePos.y - 175, left: mousePos.x - 175 }
        }
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center px-4 pt-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white"
        >
          Your Gym&apos;s Smartest{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
            Employee
          </span>{" "}
          Works 24/7
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mt-6"
        >
          AI-powered chatbot that answers member questions, captures leads, and
          never calls in sick. Deployed on your gym&apos;s website in 48 hours.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a
            href="[YOUR_CALENDLY_URL]"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 bg-primary text-white btn-glow")}
          >
            Book a Demo
          </a>
          <a
            href="[YOUR_FAN_CLUB_DEMO_URL]"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8 border-border-dark text-text-secondary hover:text-white hover:border-text-secondary")}
          >
            See Live Example
          </a>
        </motion.div>

        {/* Static chat mockup */}
        <motion.div
          variants={item}
          className="mt-12 max-w-sm mx-auto bg-dark-card rounded-xl border border-border-dark p-4"
        >
          <div className="space-y-3">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-primary text-white rounded-lg text-sm px-3 py-2 max-w-[80%]">
                What are your membership prices?
              </div>
            </div>
            {/* Bot message */}
            <div className="flex justify-start">
              <div className="bg-dark border border-border-dark text-text-secondary rounded-lg text-sm px-3 py-2 max-w-[80%]">
                Great question! We offer three plans starting at $29/month. Want
                me to help you pick the right one?
              </div>
            </div>
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-primary text-white rounded-lg text-sm px-3 py-2 max-w-[80%]">
                Yes please!
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
