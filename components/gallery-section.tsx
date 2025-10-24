"use client"

import { useState } from "react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/7-768x512.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/7-1024x683.jpg",
      alt: "Gallery image 1",
    },
    {
      id: 2,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/Untitled-design-12-768x512.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/Untitled-design-12-1024x683.jpg",
      alt: "Gallery image 2",
    },
    {
      id: 3,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/1-2-768x512.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/1-2-1024x683.jpg",
      alt: "Gallery image 3",
    },
    {
      id: 4,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/6-1-768x512.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/6-1-1024x683.jpg",
      alt: "Gallery image 4",
    },
    {
      id: 5,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/5-1-768x512.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/5-1-1024x683.jpg",
      alt: "Gallery image 5",
    },
    {
      id: 6,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/4-1-768x512.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/4-1-1024x683.jpg",
      alt: "Gallery image 6",
    },
    {
      id: 7,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/3-2-768x512.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/3-2-1024x683.jpg",
      alt: "Gallery image 7",
    },
    {
      id: 8,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/2-2-768x512.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/10/2-2-1024x683.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 9,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/11/CAM_23-WATER-ZUMBA-768x563.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/11/CAM_23-WATER-ZUMBA-1024x751.jpg",
      alt: "Gallery image 9",
    },
    {
      id: 10,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/11/CAM_39-CLUB-BACK-TOP-768x473.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/11/CAM_39-CLUB-BACK-TOP-1024x631.jpg",
      alt: "Gallery image 10",
    },
    {
      id: 11,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/11/Cam_38_FF-768x461.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/11/Cam_38_FF-1024x614.jpg",
      alt: "Gallery image 11",
    },
    {
      id: 12,
      src: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/11/Cam_10_temple_bird-768x410.jpg",
      fullSrc: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2024/11/Cam_10_temple_bird-1024x546.jpg",
      alt: "Gallery image 12",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 || index === 1 ? "lg:col-span-1" : ""
              }`}
              onClick={() => setSelectedImage(image.fullSrc)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Full size gallery image"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
