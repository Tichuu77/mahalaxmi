"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const testimonials = [
    {
      id: 1,
      content:
        "Investing in a by Maha Laxmi Developers transparent process made effortless experience. The best decision I ever made. The local transparent process made it an effortless experience.",
      name: "Rajkumar Gharjale",
      location: "Nagpur",
      image: "/testonomials1.webp",
      rating: 5,
    },
    {
      id: 2,
      content:
        "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi Developers exceeded my expectations. Highly recommended!",
      name: "Priya Shah",
      location: "Mumbai",
      image: "/testonomials2.jpg",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Investing in residential plots with Mahalaxmi Developers was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me peace of mind.",
      name: "Karan Akojwar",
      location: "Pune",
      image: "/testonomials3.jpg",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoPlay(false)
  }

  return (
    <section id="testimonials" className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-white" style={{ backgroundImage: 'linear-gradient(to bottom, #ffffff, #30534A0A)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            What Our <span style={{ color: '#30534A' }}>Clients Say?</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">Hear from our satisfied customers</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Slide Wrapper */}
          <div className="relative min-h-[420px] sm:min-h-[460px] md:min-h-[500px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg h-full flex flex-col justify-between border" style={{ borderColor: '#30534A20' }}>
                  {/* Stars */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5" style={{ fill: '#C9862B', color: '#C9862B' }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-slate-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2"
                      style={{ borderColor: '#30534A' }}
                    />
                    <div>
                      <p className="font-semibold text-slate-900 text-base sm:text-lg">{testimonial.name}</p>
                      <p className="text-sm sm:text-base font-medium" style={{ color: '#C9862B' }}>{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:-left-10 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 text-white"
            style={{ backgroundColor: '#30534A' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1e3b34')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#30534A')}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:-right-10 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 text-white"
            style={{ backgroundColor: '#30534A' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1e3b34')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#30534A')}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 cursor-pointer`}
                style={{
                  backgroundColor: idx === currentSlide ? '#30534A' : '#cbd5e1',
                  width: idx === currentSlide ? '24px' : '10px',
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 sm:mt-6 text-slate-600 text-sm sm:text-base">
            <span className="font-semibold text-slate-900">{currentSlide + 1}</span> / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  )
}