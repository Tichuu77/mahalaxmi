"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // Load Cloudinary Video Player script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.js'
    script.async = true
    document.body.appendChild(script)

    // Load Cloudinary Video Player CSS
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    script.onload = () => {
      // Initialize Cloudinary player
      if (window.cloudinary && videoRef.current) {
        const player = window.cloudinary.videoPlayer('cloudinary-player', {
          cloud_name: 'dxujnm2sl',
          publicId: 'Mahalaxmi_1_1_v6khvx',
          controls: false,
          autoplay: true,
          loop: true,
          muted: true,
          fluid: false,
          playsinline: true,
          bigPlayButton: false,
          showLogo: false,
          preload: 'auto',
        })
      }
    }

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  const stats = [
    { number: "15,000+", label: "Satisfied Customers" },
    { number: "67", label: "Projects Completed" },
    { number: "880", label: "Acres Developed" },
  ]

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }

  return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      {/* Background Video - Cloudinary */}
      <div className="absolute inset-0">
        <div ref={videoRef} className="w-full h-full">
          <video
            id="cloudinary-player"
            className="cld-video-player"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-white text-[6px] md:text-sm font-medium">Premium Real Estate in Nagpur</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 mb-8 max-w-4xl">
          {["Design the future of living with Mahalaxmi Developers Nagpur,", "Our Location- Besa, beltarodi, shankarpur, jamtha, koradi, gumgaon, kothewada, mohgaon umred road"].map((line, idx) => (
            <h1
              key={idx}
              className={`text-[15px] md:text-4xl font-bold text-white transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
            >
              {line}
            </h1>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <Button
            onClick={() => handleScrollToSection("contact")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 md:px-8 md:py-6 text-xm md:text-lg rounded-full cursor-pointer"
          >
            Contact Us
          </Button>
          <Button
            onClick={() => handleScrollToSection("our-projects")}
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-4 py-3 md:px-8 md:py-6 text-xm md:text-lg rounded-full gap-2 bg-transparent cursor-pointer"
          >
            Explore Projects
          </Button>
        </div>

        {/* Stats Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 transition-all  hidden  md:grid duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl font-bold text-emerald-400">{stat.number}</div>
              <div className="text-white/80 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollDown}
          className={`absolute bottom-8 transition-all duration-700 cursor-pointer hover:scale-110 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-emerald-400" />
          </div>
        </button>
      </div>
    </section>
  )
}

// TypeScript declaration for Cloudinary
declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (elementId: string, options: any) => any;
    };
  }
}