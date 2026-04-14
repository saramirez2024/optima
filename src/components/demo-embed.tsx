"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DemoEmbed() {
  const [iframeError, setIframeError] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white">
          See It In Action
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-4">
          This is a real conversation with Optima, running live on a gym website
          right now.
        </p>

        <div className="mt-12">
          {!iframeError ? (
            <iframe
              src="[YOUR_FAN_CLUB_DEMO_URL]"
              className="w-full rounded-xl border border-border-dark h-[400px] md:h-[500px]"
              title="Optima chatbot demo"
              loading="lazy"
              onError={() => setIframeError(true)}
            />
          ) : (
            <Card className="bg-dark-card border-border-dark rounded-xl p-8 text-center">
              <div className="h-64 bg-dark rounded-lg flex items-center justify-center text-text-muted">
                Chatbot demo preview
              </div>
              <a
                href="[YOUR_FAN_CLUB_DEMO_URL]"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "mt-6 border-border-dark text-text-secondary hover:text-white")}
              >
                View Live Demo
              </a>
            </Card>
          )}
        </div>

        <p className="text-sm text-text-muted mt-4 text-center">
          Live demo from our Fan Club gym deployment
        </p>
      </div>
    </section>
  );
}
