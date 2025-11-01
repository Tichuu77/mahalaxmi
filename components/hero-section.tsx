"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Load Swiper CSS
    const swiperCSS = document.createElement('link')
    swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
    swiperCSS.rel = 'stylesheet'
    document.head.appendChild(swiperCSS)

    // Load Swiper JS
    const swiperScript = document.createElement('script')
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
    swiperScript.async = true
    document.body.appendChild(swiperScript)

    swiperScript.onload = () => {
      // Initialize Swiper
      if (window.Swiper) {
        new window.Swiper('.hero-swiper', {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          speed: 1000,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      }
    }

    return () => {
      if (document.head.contains(swiperCSS)) {
        document.head.removeChild(swiperCSS)
      }
      if (document.body.contains(swiperScript)) {
        document.body.removeChild(swiperScript)
      }
    }
  }, [])

  const slides = [
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074415_banner_68c9154f2664a.webp",
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074800_banner_68c9163022c77.webp",
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074800_banner_68c91630250f5.webp",
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074821_banner_68c91645d8eeb.webp",
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074821_banner_68c91645da8ff.webp",
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074821_banner_68c91645dc3b2.webp",
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074850_banner_68c9166273485.webp",
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074850_banner_68c916627557e.webp",
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074850_banner_68c9166276e8f.webp",
    "https://mahalaxmidevelopers.com/frontend/images/banner_images/2025-09-16_074913_banner_68c916796e52c.webp",
  ]

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <div className="hero-swiper swiper w-full h-full">
          <div className="swiper-wrapper">
            {slides.map((slide, idx) => (
              <div key={idx} className="swiper-slide">
                <img
                  src={slide}
                  alt={`Mahalaxmi Developers ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="swiper-button-next text-white"></div>
          <div className="swiper-button-prev text-white"></div>
          
          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
        {/* Main Heading */}
        <div className="space-y-4 mb-8 max-w-4xl">
          <h1
            className={`text-2xl md:text-4xl font-bold text-orange-500 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Build Your Dream Home With Mahalaxmi Developers In Nagpur.
          </h1>
        </div>

        <div className="space-y-4 mb-8 max-w-4xl">
          <h1
            className={`text-2xl md:text-4xl font-bold text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Residential & Commercial Plots Heart Of City Nagpur.
          </h1>
        </div>

        <div className="py-1 px-4 md:px-6 bg-orange-500 mb-3">
          <h3 className="text-xs md:text-lg text-white font-light">
            NMRDA SANCTIONS RL REAL APPROVAL PROJECTS
          </h3>
        </div>

        <p className="text-white text-xl md:text-2xl font-extralight mb-3">
          Location- Besa, Beltarodi, Shankarpur, Wrdha Road, Jamtha, Dongargoan, Mohagoan & Hingna.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <Button
            onClick={() => handleScrollToSection("contact")}
            className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-3 md:px-8 md:py-6 text-sm md:text-lg cursor-pointer"
          >
            Contact Us
          </Button>
          <Button
            onClick={() => handleScrollToSection("our-projects")}
            className="bg-orange-500 hover:bg-orange-700 px-4 py-3 md:px-8 md:py-6 text-sm md:text-lg cursor-pointer"
          >
            Explore Projects
          </Button>
        </div>

        <div className="bg-orange-500 py-3 px-6 rounded">
          <h3 className="text-white text-sm md:text-base">
            Best For Investment @ 18 lakh only on Wardha Road
          </h3>
        </div>
      </div>
    </section>
  )
}

// TypeScript declaration for Swiper
declare global {
  interface Window {
    Swiper: any;
  }
}