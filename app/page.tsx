import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { MABSection } from "@/components/mab-section"
import { Navbar } from "@/components/navbar"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <MABSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}