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
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Building2,
      number: "67",
      label: "Projects Complete",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Leaf,
      number: "880",
      label: "Acres Completed",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      number: "95%",
      label: "Customer Satisfaction",
      color: "from-amber-500 to-amber-600",
    },
  ]

  return (
    <section id="stats" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Icon Background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>

                {/* Label */}
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
