"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, FileText, DollarSign, Scale } from "lucide-react"

export default function ServicesSection() {
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

  const services = [
    {
      icon: CheckCircle,
      title: "Clear Title Property",
      description: "Guaranteed clear and verified property titles with complete legal documentation",
    },
    {
      icon: DollarSign,
      title: "Loan Facility",
      description: "Hassle-free loan assistance with our trusted financial partners",
    },
    {
      icon: FileText,
      title: "Document Assistance",
      description: "Complete documentation support from registration to handover",
    },
    {
      icon: Scale,
      title: "Legal Help",
      description: "Expert legal guidance and support throughout the entire process",
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive services designed to make your real estate journey smooth and secure
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
