"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the AI know about my specific gym?",
    a: "We train it on your gym's information — classes, pricing, hours, policies, FAQs. You send us the details, we handle the setup. The bot sounds like it works at your front desk because it knows everything your front desk knows.",
  },
  {
    q: "Can I customize what the chatbot says?",
    a: "Absolutely. You review every response before launch. If you want it to say 'heck yeah' instead of 'yes, absolutely' — we make that happen. It is your brand, your voice.",
  },
  {
    q: "How long until I am live?",
    a: "48 hours from our kickoff call. We build your chatbot and landing page, you review, we deploy. Most gyms are live within two business days.",
  },
  {
    q: "What if I do not like it?",
    a: "No contracts. Cancel anytime. If you are not seeing value after the first month, you walk away. We are betting you will not want to.",
  },
  {
    q: "Can I see how many leads the chatbot captures?",
    a: "Yes. You get a dashboard showing every conversation, every lead captured, and every notification sent. Launch plan includes basic analytics; Growth plan includes advanced reporting.",
  },
  {
    q: "What if my gym uses Mindbody or Zen Planner?",
    a: "Growth plan includes custom integrations with major gym management software. We can connect your chatbot to Mindbody, Zen Planner, and other platforms so leads flow directly into your existing system.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Month-to-month after your one-time setup fee. Cancel anytime, no penalties, no questions.",
  },
  {
    q: "How much does the AI cost to run each month?",
    a: "Your monthly fee covers everything — hosting, AI processing, updates, support. There are no hidden costs or usage-based charges. $200/month for Launch, $350/month for Growth.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white">
          Common Questions
        </h2>
        <p className="text-lg text-text-secondary text-center mt-4">
          Everything you need to know about Optima.
        </p>

        <Accordion className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-dark-card border border-border-dark rounded-lg px-4"
            >
              <AccordionItem className="border-none">
                <AccordionTrigger className="text-white font-medium text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
