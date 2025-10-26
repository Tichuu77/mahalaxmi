"use client"

export default function UserGuideSection() {
  const steps = [
    {
      number: "01",
      title: "Explore Properties",
      description:
        "Browse through our extensive collection of premium residential and commercial properties in Nagpur.",
      icon: "🏠",
    },
    {
      number: "02",
      title: "Schedule Site Visit",
      description: "Book a personalized site visit with our expert consultants to experience the property firsthand.",
      icon: "📅",
    },
    {
      number: "03",
      title: "Consultation & Financing",
      description: "Get expert advice on financing options and investment benefits from our experienced team.",
      icon: "💼",
    },
    {
      number: "04",
      title: "Complete Purchase",
      description: "Finalize your investment with our transparent and hassle-free documentation process.",
      icon: "✅",
    },
  ]

  return (
    <section id="user-guide" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">User Guide for First-Time Buyers</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Follow these simple steps to find and invest in your dream property with Mahalaxmi Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-[calc(100%+2rem)] h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 -z-10" />
              )}

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-500 opacity-20">{step.number}</div>
                  <div className="text-3xl md:text-4xl">{step.icon}</div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
