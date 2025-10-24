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
      <AboutSection />
      <StatsSection />
      <StoriesSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
