"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import StoriesSection from "@/components/stories-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import OurProjects from "@/components/our-projects"
import AmenitiesSection from "@/components/amenities"
import ProjectHighlightsSection from "@/components/project-highlights"
import InvestmentHighlightsSection from "@/components/investment-highlights-section"
import UserGuideSection from "@/components/user-guied-section"
import BlogSection from "@/components/blog-section"
import CallButton from "@/components/call-button"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <ContactSection />
      <StatsSection />
      <OurProjects />
      {/* <StoriesSection /> */}
      <ServicesSection />
      <AmenitiesSection/>
      <AboutSection />
      <ProjectHighlightsSection/>
      <InvestmentHighlightsSection/>
      <UserGuideSection  />
      <TestimonialsSection />
      <GallerySection />
      <BlogSection/>
      <CallButton/>
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
