"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Clock, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    // Simulate submission
    setTimeout(() => {
      const mailtoLink = `mailto:akashtikhat50@gmail.com?subject=${encodeURIComponent(
        formData.subject,
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
      )}`

      window.location.href = mailtoLink
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setIsSubmitting(false)

      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 500)
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "akashtikhat50@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8668569759" },
    { icon: MapPin, label: "Location", value: "Nagpur, Maharashtra" },
  ]

  const trustIndicators = [
    { icon: Clock, label: "24hrs Response" },
    { icon: Shield, label: "100% Secure" },
    { icon: Users, label: "15K+ Clients" },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Get in Touch</h2>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-slate-600 text-sm font-medium">{info.label}</div>
                      <div className="text-slate-900 font-semibold">{info.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              {trustIndicators.map((indicator, idx) => {
                const Icon = indicator.icon
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-slate-700 font-medium">{indicator.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white/50 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg"
            >
              {/* Name */}
              <div className="mb-6">
                <label className="block text-slate-700 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-slate-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-slate-700 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-slate-700 font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-slate-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all resize-none"
                  required
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium">
                  Thank you! Your message has been sent.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
                  Please fill in all required fields.
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
