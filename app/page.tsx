import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import MarketProof from "@/components/MarketProof";
import DataValidation from "@/components/DataValidation";
import Provenance from "@/components/Provenance";
import UseCases from "@/components/UseCases";
import TrustProcess from "@/components/TrustProcess";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import SocialShare from "@/components/SocialShare";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <MarketProof />
      <DataValidation />
      <Provenance />
      <UseCases />
      <TrustProcess />
      <FAQ />
      <ContactForm />
      <SocialShare />
      <Footer />
      <StickyCTA />
    </main>
  );
}

