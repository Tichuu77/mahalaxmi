"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "About", id: "about" },
    { label: "Stories", id: "stories" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ]

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/mahalaxmi-logo.png"
              alt="Mahalaxmi Group Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+918668569759">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 cursor-pointer">
                <Phone className="w-4 h-4" />
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:+918668569759" className="block px-4 py-2">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2 cursor-pointer">
                <Phone className="w-4 h-4" />
                Get in Touch
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
