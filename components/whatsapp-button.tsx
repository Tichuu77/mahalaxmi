"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://wa.me/918668569759"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-2 h-2 bg-slate-900 transform rotate-45" />
        </div>
      )}

      {/* Button */}
      <div className="relative">
        {/* Ping Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-ping opacity-75" />

        {/* Main Button */}
        <button className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group-hover:rotate-12">
          <MessageCircle className="w-8 h-8 text-white fill-white" />
        </button>
      </div>
    </a>
  )
}
