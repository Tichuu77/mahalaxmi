"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Building2, Leaf, Award } from "lucide-react"

export default function StatsSection() {
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
    {
      icon: Users,
      number: "15,000+",
      label: "Satisfied Customers",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Building2,
      number: "67",
      label: "Projects Complete",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Leaf,
      number: "880",
      label: "Acres Completed",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Award,
      number: "95%",
      label: "Customer Satisfaction",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section id="stats" ref={sectionRef} className="py-6 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* 2 columns on mobile, 4 on desktop with minimal gaps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className={`group p-3 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 border border-orange-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Icon Background - Very compact on mobile */}
                <div
                  className={`w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-md sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 sm:mb-4 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Number - Compact on mobile */}
                <div className="text-lg sm:text-3xl md:text-4xl font-bold text-slate-900 mb-0.5 sm:mb-2 leading-tight">{stat.number}</div>

                {/* Label - Very small on mobile */}
                <div className="text-[10px] sm:text-sm md:text-base text-slate-600 font-medium leading-tight">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}