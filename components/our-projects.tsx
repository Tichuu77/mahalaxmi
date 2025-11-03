"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, MessageCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OurProjects() {
  const [activeTab, setActiveTab] = useState("ongoing")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

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

  const projects = {
     ongoing: [
      {
        id: 2,
        title: "Mahalaxmi Nagar-31",
        image: "/ongoingProject8.webp",
        description : `Located at Besa-Pipla, Mahalaxmi Nagar – 31 offers premium plots in Nagpur Besa, perfectly suited for residential and commercial development. These NMRDA sanctioned plots with RL come with modern amenities, excellent connectivity, and easy bank loan options—making them an ideal choice for your dream home.`,
        location: `MOUZA -   PIPLA`
      },
        {
        id: 3,
        title: "Mahalaxmi Nagar-39",
        image: "/ongoingProject5.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 39. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA -   CHICHOLI`
      },
      {
        id: 4,
        title: "Mahalaxmi Nagar-41",
        image: "/ongoingProject3.webp",
        description : `Located near Samrudhi Mahamarg on Mihan Road, Mahalaxmi Nagar – 41 offers premium NIT/NMRDA sanctioned plots with RL. Ideal for residential and commercial use, these plots come with modern amenities and easy bank financing. A prime location in Nagpur for smart investment.`,
        location: `MOUZA -  GOMGAON`
      },
      {
        id: 5,
        title: "Mahalaxmi Nagar - 42",
        image: "/ongoingProject2.webp",
        description : `Mahalaxmi Nagar – 42, near Jamtha on Wardha Road, offers well-connected plots perfect for homes or businesses. Approved by NMRDA and equipped with RL, this project comes with excellent amenities and easy bank finance options.
Best for investment to buy plots in Nagpur.`,
        location: `MOUZA -  JAMTHA`
      },
       {
        id: 6,
        title: "Mahalaxmi Nagar - 43",
        image: "/ongoingProject10.webp",
        description : `Set in the promising location of Shankarpur, Mahalaxmi Nagar – 43 provides fully sanctioned plots With NIT and NMRDA approval with bank financing. Buy plots in Nagpur and grab the best deals.`,
        location: `MOUZA -  SHANKARPUR`
      },
       {
        id: 7,
        title: "Mahalaxmi Nagar - 45",
        image: "/ongoingProject11.webp",
        description : `Mahalaxmi Nagar – 45, located in the prime area of MIHAN, Nagpur, offers premium residential and commercial plots in one of the fastest-growing hubs of Central India. With unmatched connectivity to the airport, IT parks, and major highways, this project is ideal for both living and investment. Approved by NMRDA and equipped with RL, it comes with excellent amenities and hassle-free bank finance options.`,
        location: `MOUZA -  SHANKARPUR`
      },
       {
        id: 11,
        title: "Mahalaxmi Nagar - 47",
        image: "/ongoingProject12.jpg",
         description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 47. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - NANDA, KORADI ROAD`
      },
    ],
    completed: [
      {
        id: 12,
        title: "Mahalaxmi Nagar - 37",
        image: "/completedProject1.webp",
        description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 37. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - KOTEWADA`
       
      },
      {
        id: 13,
        title: "Mahalaxmi Nagar - 35",
        image: "/completedProject2.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 35. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - KOTEWADA`
      },
      {
        id: 14,
        title: "Mahalaxmi Nagar - 34",
        image: "/completedProject3.webp",
         description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 34. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - BAHADURA`
      },
    ],
   
    upcoming: []
  }

  const tabs = [
    { id: "ongoing", label: "Ongoing Projects" },
    { id: "completed", label: "Completed Projects" },
    { id: "upcoming", label: "Upcoming Projects" }
  ]

  const handleInquiry = (projectTitle: string) => {
    const message = encodeURIComponent(`Enquiry for more details`)
    window.open(`https://wa.me/+918766887828?text=${message}`, "_blank")
  }

  return (
    <section id="our-projects" ref={sectionRef} className="py-10 sm:py-16 px-3 sm:px-6 bg-gradient-to-b from-white via-orange-50/20 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1.5 bg-orange-100 rounded-full">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-700 font-bold text-xs sm:text-sm uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2 sm:mb-3">
            Our <span className="text-orange-600">Projects</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Discover our exceptional residential developments across Nagpur
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-600 border-2 border-slate-200 hover:border-orange-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects[activeTab as keyof typeof projects].map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { projectRefs.current[index] = el }}
              className={`group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border-2 border-transparent hover:border-orange-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 sm:h-56 md:h-64 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
                  {activeTab === "completed"
                    ? "Completed"
                    : activeTab === "ongoing"
                    ? "Ongoing"
                    : "Coming Soon"}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>

                <details className="mb-4 sm:mb-6 group/details">
                  <summary className="cursor-pointer font-medium text-slate-800 py-2 list-none border-2 border-orange-200 flex items-center bg-orange-50 px-3 sm:px-4 rounded-lg hover:bg-orange-100 hover:border-orange-300 transition-colors duration-300 text-sm sm:text-base">
                    <span className="flex-1">Project Details</span>
                    <ChevronRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-open/details:rotate-90 text-orange-600" />
                  </summary>
                  <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed px-2">
                    {project.description}
                  </p>
                </details>

                <div className="mb-4 sm:mb-6 flex items-start gap-2 p-2.5 sm:p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium">{project.location}</span>
                </div>

                <Button
                  onClick={() => handleInquiry(project.title)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Inquire Now</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for Upcoming */}
        {activeTab === "upcoming" && projects.upcoming.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Exciting Projects Coming Soon!</h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
              Stay tuned for our upcoming developments. Great things are on the horizon!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}