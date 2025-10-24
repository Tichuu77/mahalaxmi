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
        "Investing in a by Maha Laxmi Developers transparent process made effortless experience. the best decision I ever made. The local transparent process made it an effortless experience.",
      name: "Rajkumar Gharjale",
      location: "Nagpur",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/1-9.png",
      rating: 5,
    },
    {
      id: 2,
      content:
        "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect Maha Laxmi Developers of exceeded my expectations. Highly recommended!",
      name: "Priya Shah",
      location: "Mumbai",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/3-4.png",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Investing in residential plots with Mahalaxmi Developers was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me complete peace of mind.",
      name: "Karan Akojwar",
      location: "Pune",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/4-2.png",
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
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            What Our <span className="text-emerald-600">Clients Say?</span>
          </h2>
          <p className="text-slate-600 text-lg">Hear from our satisfied customers</p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slides */}
          <div className="relative h-auto min-h-96 rounded-2xl overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl h-full flex flex-col justify-between">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">"{testimonial.content}"</p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
                    />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                      <p className="text-emerald-600 font-medium">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? "bg-emerald-600 w-8" : "bg-slate-300 hover:bg-slate-400 w-3"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-slate-600">
            <span className="font-semibold text-slate-900">{currentSlide + 1}</span>
            <span> / {testimonials.length}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
