"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Droplets, Waves, Zap, Trees, Dribbble, Users, Building, Fence, Baby, CircleDot, Flower2 } from "lucide-react"

export default function AmenitiesSection() {
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

  const amenities = [
    {
      id: 1,
      title: "Internal Cement Concrete Road",
      description: "A paved road within the premises connecting all major parts",
      icon: Home,
      color: "from-emerald-400 to-emerald-600"
    },
    {
      id: 2,
      title: "Garden",
      description: "Landscaped green space with plantation for better experience",
      icon: Trees,
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "Sewage Treatment Plant",
      description: "Eco-friendly waste management system",
      icon: Droplets,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 4,
      title: "Sewage Line",
      description: "Underground waste disposal system in layout",
      icon: Waves,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      id: 5,
      title: "Storm Water Drainage",
      description: "Efficient water management system",
      icon: Waves,
      color: "from-sky-400 to-sky-600"
    },
    {
      id: 6,
      title: "Cricket Pitch",
      description: "A dedicated pitch area for cricket sport",
      icon: CircleDot,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 7,
      title: "Electric Network",
      description: "Electricity distribution infrastructure",
      icon: Zap,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 8,
      title: "Open Space Public Utility",
      description: "Open-use area for all residents",
      icon: Users,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 9,
      title: "Compound Wall",
      description: "Fenced boundary for safety",
      icon: Fence,
      color: "from-slate-400 to-slate-600"
    },
    {
      id: 10,
      title: "Kids Park",
      description: "A playground for children",
      icon: Baby,
      color: "from-pink-400 to-pink-600"
    },
    {
      id: 11,
      title: "Basketball Court",
      description: "Court for outdoor sports",
      icon: Dribbble,
      color: "from-red-400 to-red-600"
    },
    {
      id: 12,
      title: "Meditation Centre",
      description: "Space for contemplation",
      icon: Flower2,
      color: "from-indigo-400 to-indigo-600"
    }
  ]

  return (
    <section id="amenities" ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Premium Amenities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Amenities that Enhance Your Lifestyle
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Experience a perfect balance of comfort and convenience with world-class amenities designed to elevate your everyday living.
            At <strong className="text-emerald-600">Mahalaxmi Developers</strong>, every detail is crafted to enhance your lifestyle and well-being.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={amenity.id}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-100 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 0.08}s`
                }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${amenity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with Gradient Background */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${amenity.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Animated Ring */}
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${amenity.color} rounded-2xl opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {amenity.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${amenity.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
