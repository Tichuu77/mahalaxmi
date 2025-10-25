"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function SocialContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/+918766887828",
      icon: "whatsapp",
      gradient: "from-green-400 to-green-600",
      hoverGradient: "hover:from-green-500 hover:to-green-700",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/your_username",
      icon: "instagram",
      gradient: "from-pink-500 to-purple-600",
      hoverGradient: "hover:from-pink-600 hover:to-purple-700",
    },
  ]

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item flex items-center gap-3 cursor-pointer"
            >
              <span className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                {social.name}
              </span>

              <div
                className={`w-14 h-14 bg-gradient-to-br ${social.gradient} ${social.hoverGradient} rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer`}
              >
                {social.icon === "whatsapp" ? (
                  <MessageCircle className="w-7 h-7 text-white fill-white" />
                ) : (
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
              </div>
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group cursor-pointer"
      >
        {!isOpen && (
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-ping opacity-75" />
        )}

        <div
          className={`relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 ${
            isOpen ? "rotate-45 scale-110" : "hover:scale-110 group-hover:rotate-12"
          }`}
        >
          {isOpen ? (
            <div className="w-6 h-0.5 bg-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white fill-white" />
          )}
        </div>
      </button>
    </div>
  )
}
