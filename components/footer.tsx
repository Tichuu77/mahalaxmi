"use client"

import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-16 h-10 sm:w-20 sm:h-12  rounded-lg flex items-center justify-center shadow-lg">
                <img src="/Mahalaxmi Infra new Logo.png" alt="Logo" className="w-14 h-9 sm:w-18 sm:h-12 object-contain" />
              </div>
              <span className="font-bold text-base sm:text-lg text-white">Mahalaxmi Group</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Building trust and transforming spaces with premium real estate solutions in Nagpur.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "About", id: "about" },
                { label: "Projects", id: "our-projects" },
                { label: "Amenities", id: "amenities" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-orange-400 transition-colors duration-300 cursor-pointer text-sm sm:text-base group flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base sm:text-lg">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <a
                  href="mailto:girishpatankar7@gmail.com"
                  className="hover:text-orange-400 transition-colors cursor-pointer text-sm sm:text-base break-all"
                >
                  girishpatankar7@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <a href="tel:+918766887828" className="hover:text-orange-400 transition-colors cursor-pointer text-sm sm:text-base">
                  +91 8766887828
                </a>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm sm:text-base">Nagpur, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Mahalaxmi Group. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { icon: Phone, link: "tel:+918766887828", label: "Phone" },
                { icon: Mail, link: "mailto:girishpatankar7@gmail.com", label: "Email" }
              ].map((obj, idx) => (
                <a
                  key={idx}
                  href={obj.link}
                  aria-label={obj.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 cursor-pointer hover:scale-110 shadow-md hover:shadow-lg"
                >
                  <obj.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Bottom Text */}
          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-xs sm:text-sm">
              Crafted with <span className="text-orange-500">♥</span> for your dream home
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}