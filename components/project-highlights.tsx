"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Building, Landmark } from "lucide-react"

export default function ProjectHighlightsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      id: 1,
      title: "Prime Location",
      description: "Nearest to AIIMS Hospital, Mihan and Samrudhhi Mahamarg",
      icon: MapPin,
      color: "from-sky-400 to-blue-600"
    },
    {
      id: 2,
      title: "Ready-to-Construct",
      description: "With Developed Infrastructure",
      icon: Building,
      color: "from-emerald-400 to-green-600"
    },
    {
      id: 3,
      title: "Loan Facility",
      description: "Easy Bank Loan & Spot Registration Assistance",
      icon: Landmark,
      color: "from-amber-400 to-orange-600"
    }
  ]

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="py-6 sm:py-10 md:py-20 px-3 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto text-center mb-6 sm:mb-10 md:mb-16">
        <div className="inline-flex items-center gap-1.5 mb-2 sm:mb-4">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-blue-600 font-semibold text-[10px] sm:text-sm uppercase tracking-wider">
            Project Highlights
          </span>
        </div>
        <h2 className="text-lg sm:text-3xl md:text-5xl font-bold text-slate-900 mb-2 sm:mb-4">
          Discover Our <span className="text-blue-600">Highlights</span>
        </h2>
        <p className="hidden sm:block text-slate-600 text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Key features that make our project a perfect investment opportunity.
        </p>
      </div>

      {/* ✅ All 3 cards in one row on mobile */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-8">
        {highlights.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className={`relative group bg-white rounded-lg md:rounded-xl p-2.5 sm:p-4 md:p-8 shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 mb-1 sm:mb-3`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-[10px] sm:text-sm md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="hidden sm:block text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
