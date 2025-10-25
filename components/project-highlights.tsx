"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Building, Landmark } from "lucide-react"

export default function ProjectHighlightsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

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
      className="py-20 px-4 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Project Highlights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Discover Our <span className="text-blue-600">Project Highlights</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore the key features that make our project a perfect investment
            opportunity — combining prime location, strong infrastructure, and
            hassle-free financing options.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className={`relative group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-5">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
