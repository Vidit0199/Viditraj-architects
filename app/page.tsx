import Navbar from "@/components/navbar"
import HeroSection from "@/components/home-page"
import ProjectsSection from "@/components/residential-elevations"
import VisualBanner from "@/components/visual-banner"
import ScrollProgress from "@/components/scroll-progress"
import CurtainLoader from "@/components/curtain-loader"
import Aboutus from "@/components/aboutus"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contactus"
import SustainableUrbanProject from "@/components/sustainable-urban-projects"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CurtainLoader />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <Aboutus />
      <ProjectsSection />
      <SustainableUrbanProject />
      <VisualBanner />
      <ServicesSection />
      <ContactSection />

      <footer className="py-24 px-6 border-t bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-8xl font-serif font-bold tracking-tighter mb-8">Let's build together</h2>
          <p className="font-sans tracking-widest uppercase text-sm opacity-50">© 2025 VIDIT RAJ & ARCHITECTS</p>
        </div>
      </footer>
    </main>
  )
}
