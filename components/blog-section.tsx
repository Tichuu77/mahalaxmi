"use client"

import { useState } from "react"

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [showMore, setShowMore] = useState(false)

  const articles = [
    {
      id: 1,
      title: "The Importance of Property Valuation: Getting the Best Deal for Your Home",
      category: "investment",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "/property-valuation.jpg",
      excerpt:
        "Learn how proper valuation can help you make informed decisions and secure the best investment returns.",
    },
    {
      id: 2,
      title: "How To Choose The Right Location For Your Dream Home",
      category: "lifestyle",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      image: "location-guide.jpg",
      excerpt: "Discover the key factors to consider when selecting the perfect location for your new home.",
    },
    {
      id: 3,
      title: "Smart Investment Strategies in Real Estate Market",
      category: "investment",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      image: "/investment-strategy.jpg",
      excerpt: "Explore proven strategies to maximize your real estate investment returns in today's market.",
    },
    {
      id: 4,
      title: "Modern Amenities That Add Value to Your Property",
      category: "lifestyle",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      image: "/modern-amenities.jpg",
      excerpt: "Understand which modern amenities can significantly increase your property's market value.",
    },
    {
      id: 5,
      title: "Understanding Home Loan Options and Interest Rates",
      category: "investment",
      date: "Nov 20, 2024",
      readTime: "7 min read",
      image: "/property-valuation.jpg",
      excerpt: "A comprehensive guide to different home loan options and how to choose the best one for your needs.",
    },
    {
      id: 6,
      title: "Interior Design Trends for Modern Homes in 2024",
      category: "lifestyle",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      image: "/modern-amenities.jpg",
      excerpt: "Explore the latest interior design trends that are transforming modern homes this year.",
    },
    {
      id: 7,
      title: "Tax Benefits of Real Estate Investment",
      category: "investment",
      date: "Nov 10, 2024",
      readTime: "6 min read",
      image: "/investment-strategy.jpg",
      excerpt: "Learn about the various tax benefits and deductions available for real estate investors.",
    },
    {
      id: 8,
      title: "Creating Your Perfect Home Office Space",
      category: "lifestyle",
      date: "Nov 5, 2024",
      readTime: "4 min read",
      image: "/location-guide.jpg",
      excerpt: "Tips and tricks for designing a productive and comfortable home office in your new property.",
    },
  ]

  const categories = [
    { id: "all", label: "All" },
    { id: "investment", label: "Investment" },
    { id: "lifestyle", label: "Lifestyle" },
  ]

  const filteredArticles =
    activeCategory === "all" ? articles : articles.filter((article) => article.category === activeCategory)

  const displayedArticles = showMore ? filteredArticles : filteredArticles.slice(0, 4)

  return (
    <section id="blog" className="py-10 sm:py-14 md:py-24 px-3 sm:px-6 md:px-8 bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1.5 bg-orange-100 rounded-full">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-700 font-bold text-xs sm:text-sm uppercase tracking-wider">Latest Updates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 sm:mb-4">
            News & <span className="text-orange-600">Articles</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest insights and trends in real estate
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setShowMore(false)
              }}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
          {displayedArticles.map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-500 group cursor-pointer hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative overflow-hidden h-36 sm:h-44 md:h-40">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-lg">
                  {article.category === "investment" ? "💰" : "🏡"} {article.category}
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="font-semibold sm:font-bold text-slate-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 mb-2 sm:mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-500 pt-2 sm:pt-3 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 text-orange-600 font-medium">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-5 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg sm:rounded-xl font-medium sm:font-semibold hover:from-orange-600 hover:to-orange-700 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-lg"
          >
            {showMore ? "Show Less Articles" : "Read More Articles"}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}