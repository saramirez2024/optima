"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(target);
      setDone(true);
      return;
    }

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {done ? "-Hour" : ""}
    </span>
  );
}

const metrics = [
  {
    animated: true,
    target: 48,
    label: "Deployment",
    sublabel: "From first call to live on your site",
    color: "text-primary",
  },
  {
    value: "24/7",
    label: "Lead Capture",
    sublabel: "Your chatbot never sleeps",
    color: "text-white",
  },
  {
    value: "Zero",
    label: "Missed Inquiries",
    sublabel: "Every question gets answered instantly",
    color: "text-white",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-border-dark">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className={`font-heading text-3xl md:text-4xl font-bold ${m.color}`}>
              {"animated" in m && m.animated ? (
                <AnimatedCounter target={m.target!} />
              ) : (
                m.value
              )}
            </div>
            <div className="text-sm text-text-muted uppercase tracking-wider mt-2">
              {m.label}
            </div>
            <div className="text-xs text-text-muted mt-1">{m.sublabel}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
