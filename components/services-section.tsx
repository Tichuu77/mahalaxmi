"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, FileText, DollarSign, Scale } from "lucide-react"

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: CheckCircle,
      title: "Clear Title",
      description:
        "Guaranteed clear and verified property titles with complete legal documentation",
    },
    {
      icon: DollarSign,
      title: "Loan Facility",
      description:
        "Hassle-free loan assistance with our trusted financial partners",
    },
    {
      icon: FileText,
      title: "Document Support",
      description:
        "Complete documentation support from registration to handover",
    },
    {
      icon: Scale,
      title: "Legal Help",
      description:
        "Expert legal guidance and support throughout the entire process",
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            Why Choose <span className="text-orange-400">Us</span>
          </h2>
          <p className="hidden sm:block text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive services designed to make your real estate journey
            smooth and secure
          </p>
        </div>

        {/* ✅ Split grid: 2 columns on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 md:p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-700 hover:border-orange-500 hover:bg-slate-800 transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-1 sm:mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description (hidden on mobile, visible from sm+) */}
                <p className="hidden sm:block text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
