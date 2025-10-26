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
    { id: "all", label: "All Articles" },
    { id: "investment", label: "Investment Tips" },
    { id: "lifestyle", label: "Lifestyle" },
  ]

  const filteredArticles =
    activeCategory === "all" ? articles : articles.filter((article) => article.category === activeCategory)

  const displayedArticles = showMore ? filteredArticles : filteredArticles.slice(0, 4)

  return (
    <section id="blog" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">News & Articles</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest insights and trends in real estate
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setShowMore(false)
              }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-emerald-500 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-500 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48 md:h-40">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {article.category === "investment" ? "💰" : "🏡"} {article.category}
                </div>
              </div>

              <div className="p-4 md:p-5">
                <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            {showMore ? "Show Less Articles" : "Read More Articles"}
          </button>
        </div>
      </div>
    </section>
  )
}
