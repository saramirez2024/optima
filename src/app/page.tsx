import Nav from "@/components/nav";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import DemoEmbed from "@/components/demo-embed";
import HowItWorks from "@/components/how-it-works";
import ROICalculator from "@/components/roi-calculator";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <DemoEmbed />
        <HowItWorks />
        <ROICalculator />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
