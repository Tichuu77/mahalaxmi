"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, MessageCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OurProjects() {
  const [activeTab, setActiveTab] = useState("completed")
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
    completed: [
      {
        id: 1,
        title: "Mahalaxmi Nagar - 37",
        image: "/completedProject1.webp",
        description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 37. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - KOTEWADA`
       
      },
      {
        id: 2,
        title: "Mahalaxmi Nagar - 35",
        image: "/completedProject2.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 35. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - KOTEWADA`
      },
      {
        id: 3,
        title: "Mahalaxmi Nagar - 34",
        image: "/completedProject3.webp",
         description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 34. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - BAHADURA`
      },
      //  {
      //   id: 4,
      //   title: "Mahalaxmi Nagar - 33",
      //   image: "/completedProject4.webp",
      //   description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 33. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      //   location: `MOUZA - JAMTHA`
      // },
      // {
      //   id: 5,
      //   title: "Mahalaxmi Nagar - 26",
      //   image: "/completedProject5.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 26. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
      //   location: `MOUZA - KOTEWADA`
      // },
      //  {
      //   id: 6,
      //   title: "Mahalaxmi Nagar - 25",
      //   image: "/completedProject6.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 25. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
      //   location: `MOUZA -  JAMTHA`
      // },
      //  {
      //   id: 7,
      //   title: "Mahalaxmi Nagar - 24",
      //   image: "/completedProject7.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 24. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
      //   location: `MOUZA -  JAMTHA`
      // },
      // {
      //   id: 8,
      //   title: "Mahalaxmi Nagar - 23",
      //   image: "/completedProject8.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 23. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
      //   location: `MOUZA -  JAMTHA`
      // },
      //  {
      //   id: 9,
      //   title: "Mahalaxmi Nagar - 22",
      //   image: "/completedProject9.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 22. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
      //   location: `MOUZA -  GAVSI MANAPUR`
      // },
      //  {
      //   id: 10,
      //   title: "Mahalaxmi Nagar - 21",
      //   image: "/completedProject10.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 21. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
      //   location: `MOUZA -   SHANKARPUR`
      // },
      //  {
      //   id: 11,
      //   title: "Mahalaxmi Nagar - 19",
      //   image: "/completedProject11.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 19. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
      //   location: `MOUZA -   DONGARGAON`
      // },
      // {
      //   id: 12,
      //   title: "Mahalaxmi Nagar - 18",
      //   image: "/completedProject12.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 18. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
      //  location: `MOUZA -   JAMTHA`
      // }
    ],
    ongoing: [
      // {
      //   id: 13,
      //   title: "Tattva Apas",
      //   image: "/ongoingProject1.webp",
      //   description: `A SUPREME LIVING EXPERIENCE IN THE HEART OF THE CITY`,
      //   location: `MOUZA - BELTARODI`
      // },
       {
        id: 19,
        title: "Mahalaxmi Nagar-31",
        image: "/ongoingProject8.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 31. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA -   PIPLA`
      },
        {
        id: 17,
        title: "Mahalaxmi Nagar-39",
        image: "/ongoingProject5.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 39. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA -   CHICHOLI`
      },
      {
        id: 15,
        title: "Mahalaxmi Nagar-41",
        image: "/ongoingProject3.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 41. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA -  GOMGAON`
      },
      {
        id: 14,
        title: "Mahalaxmi Nagar - 42",
        image: "/ongoingProject2.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 42. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA -  JAMTHA`
      },
       {
        id: 15,
        title: "Mahalaxmi Nagar - 43",
        image: "/ongoingProject10.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 43. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA -  SHANKARPUR`
      },
       {
        id: 15,
        title: "Mahalaxmi Nagar - 45",
        image: "/ongoingProject11.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 45. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA -  SHANKARPUR`
      },
      // {
      //   id: 16,
      //   title: "Mahalaxmi Nagar-40",
      //   image: "/ongoingProject4.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 40. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      //   location: `MOUZA -  KOTEWADA`
      // },
      //  {
      //   id: 18,
      //   title: "Mahalaxmi Nagar-38",
      //   image: "/ongoingProject6.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 38. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      //   location: `MOUZA -   MHASALA`
      // },
     
      //  {
      //   id: 20,
      //   title: "Mahalaxmi Nagar-30",
      //   image: "/ongoingProject9.webp",
      //   description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 30. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      //   location: `MOUZA -   TAKLI`
      // }
    ],
    upcoming: []
  }

  const tabs = [
    { id: "completed", label: "Completed Projects" },
    { id: "ongoing", label: "Ongoing Projects" },
    { id: "upcoming", label: "Upcoming Projects" }
  ]

  const handleInquiry = (projectTitle: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${projectTitle}. Please provide more details.`)
    window.open(`https://wa.me/+918766887828?text=${message}`, "_blank")
  }

  return (
    <section id="our-projects" ref={sectionRef} className="py-10 sm:py-16 px-3 sm:px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Our Projects
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-emerald-600 text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
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
              className={`group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 sm:h-56 md:h-64 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-600 text-white">
                  {activeTab === "completed"
                    ? "Completed"
                    : activeTab === "ongoing"
                    ? "Ongoing"
                    : "Coming Soon"}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {project.title}
                </h3>

                <details className="mb-4 sm:mb-6">
                  <summary className="cursor-pointer font-medium text-slate-800 py-2 list-none border border-slate-200 flex items-center bg-green-50 px-3 sm:px-4 rounded-lg hover:bg-green-100 transition-colors duration-300 text-sm sm:text-base">
                    Project Details
                    <ChevronRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </details>

                <div className="mb-4 sm:mb-6 flex items-center text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <span className="ml-2 text-slate-600">{project.location}</span>
                </div>

                <Button
                  onClick={() => handleInquiry(project.title)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Inquire Now</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
