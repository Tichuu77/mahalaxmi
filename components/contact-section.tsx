"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, Clock, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const message = encodeURIComponent(`Inquire for more details`)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  const trustIndicators = [
    { icon: Clock, label: "24hrs Response" },
    { icon: Shield, label: "100% Secure" },
    { icon: Users, label: "15K+ Clients" },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1.5 bg-orange-100 rounded-full">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-700 font-bold text-xs sm:text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-2 sm:mb-3">
            Let's Start a <span className="text-orange-600">Conversation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We're here to help you find your dream property. Reach out to us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {/* LEFT SIDE */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-3 sm:space-y-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/+918766887828?text=Inquire for more details"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl sm:rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-base sm:text-lg">WhatsApp</div>
                      <div className="text-slate-600 text-xs sm:text-sm">Quick response guaranteed</div>
                    </div>
                  </div>
                  <div className="text-orange-600 group-hover:translate-x-1 transition-transform text-lg sm:text-xl">→</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:girishpatankar7@gmail.com"
                className="block p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl sm:rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-base sm:text-lg">Email</div>
                      <div className="text-slate-600 text-xs sm:text-sm">For detailed inquiries</div>
                    </div>
                  </div>
                  <div className="text-orange-600 group-hover:translate-x-1 transition-transform text-lg sm:text-xl">→</div>
                </div>
              </a>

              {/* Call Card */}
              <a
                href="tel:+918766887828"
                className="block p-4 sm:p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl sm:rounded-2xl border-2 border-orange-300 hover:border-orange-500 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-base sm:text-lg">Call Direct</div>
                      <div className="text-slate-600 text-xs sm:text-sm">Talk to us personally</div>
                    </div>
                  </div>
                  <div className="text-orange-600 group-hover:translate-x-1 transition-transform text-lg sm:text-xl">→</div>
                </div>
              </a>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-100 shadow-md">
              <h3 className="text-slate-900 font-bold text-base sm:text-lg mb-3 sm:mb-4">Why Choose Us?</h3>
              <div className="space-y-2 sm:space-y-3">
                {trustIndicators.map((indicator, idx) => {
                  const Icon = indicator.icon
                  return (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-xs sm:text-base">{indicator.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (CONTACT INFO) */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="p-4 sm:p-8 bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl border border-orange-100 shadow-lg sm:shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send us a Message</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {["name", "email", "phone", "subject"].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-slate-700 font-semibold mb-2 text-sm sm:text-base capitalize">
                      {field} *
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={`Your ${field}`}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-sm sm:text-base hover:border-orange-300"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-slate-700 font-semibold mb-2 text-sm sm:text-base">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none text-sm sm:text-base hover:border-orange-300"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-3 sm:p-4 bg-green-100 text-green-700 rounded-lg text-xs sm:text-sm font-medium border border-green-200">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3 sm:p-4 bg-red-100 text-red-700 rounded-lg text-xs sm:text-sm font-medium border border-red-200">
                    ✗ Please fill in all required fields correctly.
                  </div>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all disabled:opacity-50 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}