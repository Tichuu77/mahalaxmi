"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "15,000+", label: "Satisfied Customers" },
    { number: "95%", label: "Happy Families" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Transforming Dreams into Reality
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              With over two decades of excellence, Mahalaxmi Group has established itself as a trusted name in real
              estate development. We believe in creating not just buildings, but communities where families thrive and
              dreams flourish.
            </p>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                  <div className="text-2xl font-bold text-emerald-600">{stat.number}</div>
                  <div className="text-slate-600 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 px-6 py-6 rounded-full">
              Our Portfolio
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Images */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src="/aboutUs1.jpg"
                  alt="Project showcase"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Small Images */}
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src="/aboutUs2.jpg"
                  alt="Project detail"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src="/aboutUs3.jpg"
                  alt="Community view"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="mt-6 inline-block px-6 py-3 bg-emerald-600 text-white rounded-full shadow-lg animate-bounce">
              <span className="font-semibold">67+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
