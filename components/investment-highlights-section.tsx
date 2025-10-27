"use client"

export default function InvestmentHighlightsSection() {
  const highlights = [
    { stat: "10+ Million", label: "Sq. Ft. Developed", icon: "📐" },
    { stat: "8× More", label: "Value Appreciation", icon: "📈" },
    { stat: "1+ Million", label: "Happy Customers", icon: "😊" },
  ]

  return (
    <section className="py-6 sm:py-10 md:py-20 px-3 sm:px-6 md:px-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
      <div className="max-w-6xl mx-auto">
        {/* ✅ 3 columns even on mobile */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-6 md:gap-12 text-center">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-2 sm:py-4"
            >
              <div className="text-xl sm:text-3xl md:text-5xl mb-1 sm:mb-3">
                {highlight.icon}
              </div>
              <div className="text-xs sm:text-2xl md:text-5xl font-bold mb-0.5 sm:mb-2">
                {highlight.stat}
              </div>
              <p className="hidden sm:block text-emerald-100 text-[10px] sm:text-lg">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
