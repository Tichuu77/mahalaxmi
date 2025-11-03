"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Droplets, Waves, Zap, Trees, Dribbble, Users, Building, Fence, Baby, CircleDot, Flower2 } from "lucide-react"

export default function AmenitiesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 2,
      title: "Garden",
      description: "Landscaped green space with plantation for better experience",
      icon: Trees,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 3,
      title: "Sewage Treatment Plant",
      description: "Eco-friendly waste management system",
      icon: Droplets,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 4,
      title: "Sewage Line",
      description: "Underground waste disposal system in layout",
      icon: Waves,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 5,
      title: "Storm Water Drainage",
      description: "Efficient water management system",
      icon: Waves,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 6,
      title: "Cricket Pitch",
      description: "A dedicated pitch area for cricket sport",
      icon: CircleDot,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 7,
      title: "Electric Network",
      description: "Electricity distribution infrastructure",
      icon: Zap,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 8,
      title: "Open Space Public Utility",
      description: "Open-use area for all residents",
      icon: Users,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 9,
      title: "Compound Wall",
      description: "Fenced boundary for safety",
      icon: Fence,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 10,
      title: "Kids Park",
      description: "A playground for children",
      icon: Baby,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 11,
      title: "Basketball Court",
      description: "Court for outdoor sports",
      icon: Dribbble,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 12,
      title: "Meditation Centre",
      description: "Space for contemplation",
      icon: Flower2,
      color: "from-orange-500 to-orange-700"
    }
  ]

  return (
    <section id="amenities" ref={sectionRef} className="relative py-12 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header - More Compact on Mobile */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
            <div className="relative">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-orange-500 rounded-full animate-ping" />
            </div>
            <span className="text-orange-600 font-semibold text-xs uppercase tracking-wider">Premium Amenities</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-6 px-4">
            Amenities that
            <span className="block mt-1 md:mt-2 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent">
              Enhance Your Lifestyle
            </span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Experience comfort and convenience with world-class amenities at <strong className="text-orange-600">Mahalaxmi Developers</strong>.
          </p>
        </div>

        {/* Amenities Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            const isHovered = hoveredId === amenity.id
            
            return (
              <div
                key={amenity.id}
                onMouseEnter={() => setHoveredId(amenity.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 md:hover:-translate-y-4 border border-white/50 overflow-hidden cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 0.06}s`
                }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${amenity.color} opacity-0 group-hover:opacity-10 transition-all duration-700`} />
                
                {/* Decorative Corner Elements - Hidden on mobile */}
                <div className="hidden md:block absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="hidden md:block absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/50 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Section - Smaller on Mobile */}
                <div className="relative mb-3 sm:mb-4 md:mb-6">
                  <div className="relative inline-block">
                    {/* Main Icon Container */}
                    <div className={`relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${amenity.color} rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg md:shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 z-10`}>
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
                    </div>
                    
                    {/* Outer Animated Rings - Hidden on mobile */}
                    <div className={`hidden md:block absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${amenity.color} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700`} />
                    <div className={`hidden md:block absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${amenity.color} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000 delay-100`} />
                  </div>
                  
                  {/* Floating Number Badge - Smaller on mobile */}
                  {/* <div className={`absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br ${amenity.color} rounded-full flex items-center justify-center text-white font-bold text-[9px] sm:text-[10px] md:text-xs shadow-lg transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
                    {String(amenity.id).padStart(2, '0')}
                  </div> */}
                </div>

                {/* Content - More Compact on Mobile */}
                <div className="relative">
                  <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 md:mb-3 group-hover:text-orange-600 transition-colors duration-500 leading-tight line-clamp-2">
                    {amenity.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-snug md:leading-relaxed group-hover:text-slate-700 transition-colors duration-300 line-clamp-2 md:line-clamp-none">
                    {amenity.description}
                  </p>
                </div>

                {/* Bottom Accent Line with Glow */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className={`h-1 md:h-1.5 bg-gradient-to-r ${amenity.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                  <div className={`hidden md:block h-1 bg-gradient-to-r ${amenity.color} blur-sm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-60`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section - More Compact on Mobile */}
        <div className={`mt-8 sm:mt-12 md:mt-24 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/50">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-slate-900 font-bold text-sm sm:text-base md:text-lg">Ready to Experience Luxury?</p>
                <p className="text-slate-600 text-xs sm:text-sm">Schedule a site visit today</p>
              </div>
            </div>
            <a href="https://wa.me/+918766887828">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap hover:cursor-pointer text-sm sm:text-base">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}