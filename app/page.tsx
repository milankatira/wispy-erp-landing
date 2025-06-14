import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CloudSolutionsSection from "@/components/cloud-solutions-section"
import CloudERPSection from "@/components/cloud-erp-section"
import PartnersSection from "@/components/partners-section"
import ApproachSection from "@/components/approach-section"
import ServicesSection from "@/components/services-section"
import ScaleSection from "@/components/scale-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <HeroSection />
      <CloudSolutionsSection />
      <CloudERPSection />
      <PartnersSection />
      <ApproachSection />
      <ServicesSection />
      <ScaleSection />
      <Footer />
    </main>
  )
}
