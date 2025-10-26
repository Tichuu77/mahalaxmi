"use client"

export default function InvestmentHighlightsSection() {
  const highlights = [
    {
      stat: "10+ Million",
      label: "Sq. Ft. Developed",
      icon: "📐",
    },
    {
      stat: "8x More",
      label: "Value Appreciation",
      icon: "📈",
    },
    {
      stat: "1+ Million",
      label: "Happy Customers",
      icon: "😊",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-4">{highlight.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{highlight.stat}</div>
              <p className="text-emerald-100 text-lg">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
