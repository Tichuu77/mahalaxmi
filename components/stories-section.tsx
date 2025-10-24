"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function StoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stories = [
    {
      id: 1,
      title: "MAHALAXMI NAGAR - 42",
      subtitle: "Project Overview",
      videoId: "jNQXAC9IVRw",
    },
    {
      id: 2,
      title: "MAHALAXMI NAGAR - 41",
      subtitle: "Construction Progress",
      videoId: "9bZkp7q19f0",
    },
    {
      id: 3,
      title: "MAHALAXMI NAGAR - 40",
      subtitle: "Interior Design Showcase",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "MAHALAXMI GROUP",
      subtitle: "Company Story",
      videoId: "kJQP7kiw9Fk",
    },
  ]

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length)
    setPlayingVideo(null)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length)
    setPlayingVideo(null)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setPlayingVideo(null)
  }

  return (
    <section
      id="stories"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Watch Our Stories</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore our projects and company journey through compelling video stories
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
            {/* Video Slides */}
            {stories.map((story, idx) => (
              <div
                key={story.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  idx === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                {playingVideo === idx ? (
                  <iframe
                    key={`video-${idx}-${playingVideo}`}
                    src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1&mute=0&controls=1&fs=1`}
                    title={story.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full group">
                    <img
                      src={`https://img.youtube.com/vi/${story.videoId}/maxresdefault.jpg`}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                    {/* Play Button */}
                    <button
                      onClick={() => setPlayingVideo(idx)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </button>

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{story.title}</h3>
                      <p className="text-emerald-300 text-lg">{story.subtitle}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-slate-900" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? "bg-emerald-600 w-8" : "bg-slate-300 hover:bg-slate-400 w-3"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-slate-600">
            <span className="font-semibold text-slate-900">{currentSlide + 1}</span>
            <span> / {stories.length}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
