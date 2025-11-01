"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

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

  const galleryImages = [
    { id: 1, src: "/gallery1.jpg", alt: "Morning View" },
    { id: 2, src: "/gallery2.jpg", alt: "Well Maintained Square" },
    { id: 3, src: "/gallery3.jpg", alt: "Good Entrance" },
    { id: 4, src: "/gallery4.jpg", alt: "Tree covered" },
    { id: 5, src: "/gallery5.jpg", alt: "Night View" },
    { id: 6, src: "/gallery6.jpg", alt: "Cozy Living Space" },
    { id: 7, src: "/gallery7.jpg", alt: "Designer Interiors" },
    { id: 8, src: "/gallery8.jpg", alt: "Premium Amenities" },
    { id: 9, src: "/gallery9.jpg", alt: "Swimming Pool" },
    { id: 10, src: "/gallery10.jpg", alt: "Evening View" },
    { id: 11, src: "/gallery11.jpg", alt: "Playground" },
    { id: 12, src: "/gallery12.jpg", alt: "Top View" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const nextModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "ArrowRight") nextModalImage()
        if (e.key === "ArrowLeft") prevModalImage()
        if (e.key === "Escape") setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-orange-100 rounded-full">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-700 font-bold text-xs sm:text-sm uppercase tracking-wider">Our Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              Masterpieces
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Take a visual journey through our stunning projects and see why families choose us
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mb-8">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div key={image.id} className="min-w-full relative group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                      onClick={() => setSelectedImage(index)}
                    />
                    <div className="absolute inset-0   to-transparent flex items-end p-4">
                      <div className="text-white">
                        <p className="font-bold text-lg">{image.alt}</p>
                        <p className="text-xs text-white/80">Tap to view full size</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-orange-600" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div
          className={`hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-400 ${
                index === 0 || index === 5 ? "lg:col-span-2 lg:row-span-2" : ""
              } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index === 0 || index === 5 ? "h-96" : "h-48"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <Maximize2 className="w-10 h-10 text-white mb-2 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-orange-500/20 backdrop-blur-md rounded-lg p-4 text-white border border-orange-400/30">
              <p className="font-bold text-lg">{galleryImages[selectedImage].alt}</p>
              <p className="text-sm text-white/80">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-orange-500/80 hover:bg-orange-600 backdrop-blur-md text-white rounded-full p-3 transition-all hover:scale-110 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-500/80 hover:bg-orange-600 backdrop-blur-md text-white rounded-full p-3 transition-all hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500/80 hover:bg-orange-600 backdrop-blur-md text-white rounded-full p-3 transition-all hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}