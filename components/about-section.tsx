"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Award, TrendingUp, Users } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [countUp, setCountUp] = useState({ customers: 0, happiness: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          animateCounters()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const customerTarget = 15000
    const happinessTarget = 95

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCountUp({
        customers: Math.floor(customerTarget * progress),
        happiness: Math.floor(happinessTarget * progress),
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCountUp({ customers: customerTarget, happiness: happinessTarget })
      }
    }, duration / steps)
  }

  const features = [
    { icon: Award, text: "20+ Years of Excellence" },
    { icon: TrendingUp, text: "880 Acres Developed" },
    { icon: Users, text: "Expert Team of 50+" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-emerald-100 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-700 font-bold text-xs sm:text-sm uppercase tracking-wider">About Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
              Transforming Dreams into{" "}
              <span className="text-emerald-600 relative inline-block">
                Reality
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" fill="none">
                  <path d="M0 4C20 2 40 6 60 4C80 2 90 6 100 4" stroke="#10b981" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              With over two decades of excellence, Mahalaxmi Group has established itself as a trusted name in real
              estate development. We believe in creating not just buildings, but communities where families thrive and
              dreams flourish.
            </p>

            {/* Features with Icons */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 sm:gap-4 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-semibold text-sm sm:text-base">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  {countUp.customers.toLocaleString()}+
                </div>
                <div className="text-emerald-100 text-xs sm:text-sm mt-1 sm:mt-2 font-semibold">Satisfied Customers</div>
              </div>
              <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">{countUp.happiness}%</div>
                <div className="text-blue-100 text-xs sm:text-sm mt-1 sm:mt-2 font-semibold">Happy Families</div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white gap-2 px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base font-bold w-full sm:w-auto">
              Our Portfolio
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          {/* Right Images */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative">
              {/* Large Image */}
              <div
                className={`col-span-2 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/aboutUs1.jpg"
                    alt="Project showcase"
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Small Images */}
              <div
                className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/aboutUs2.jpg"
                    alt="Project detail"
                    className="w-full h-36 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div
                className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/aboutUs3.jpg"
                    alt="Community view"
                    className="w-full h-36 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Floating Badge */}
              <div
                className={`absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold text-xs sm:text-sm whitespace-nowrap">67+ Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}