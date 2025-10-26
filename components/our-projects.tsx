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
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = {
    completed: [
      {
        id: 1,
        title: "Mahalaxmi Nagar - 29",
        image: "/completedProject1.webp",
        description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 29. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - KOTEWADA`
      },
      {
        id: 2,
        title: "Mahalaxmi Nagar - 30",
        image: "/completedProject2.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 30. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - KOTEWADA`
      },
      {
        id: 3,
        title: "Mahalaxmi Nagar - 31",
        image: "/completedProject3.webp",
        description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 31. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - BAHADURA`
      },
      {
        id: 4,
        title: "Mahalaxmi Nagar - 32",
        image: "/completedProject4.webp",
        description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 32. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA - JAMTHA`
      },
      {
        id: 5,
        title: "Mahalaxmi Nagar - 33",
        image: "/completedProject5.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 33. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
        location: `MOUZA - KOTEWADA`
      },
      {
        id: 6,
        title: "Mahalaxmi Nagar - 34",
        image: "/completedProject6.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 34. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
        location: `MOUZA -  JAMTHA`
      },
      {
        id: 7,
        title: "Mahalaxmi Nagar - 35",
        image: "/completedProject7.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 35. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
        location: `MOUZA -  JAMTHA`
      },
      {
        id: 8,
        title: "Mahalaxmi Nagar - 36",
        image: "/completedProject8.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 36. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
        location: `MOUZA -  JAMTHA`
      },
      {
        id: 9,
        title: "Mahalaxmi Nagar - 37",
        image: "/completedProject9.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 37. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
        location: `MOUZA -  GAVSI MANAPUR`
      },
      {
        id: 10,
        title: "Mahalaxmi Nagar - 38",
        image: "/completedProject10.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 38. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
        location: `MOUZA -   SHANKARPUR`
      },
      {
        id: 11,
        title: "Mahalaxmi Nagar - 39",
        image: "/completedProject11.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 39. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
        location: `MOUZA -   DONGARGAON`
      },
      {
        id: 12,
        title: "Mahalaxmi Nagar - 40",
        image: "/completedProject12.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 40. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank`,
        location: `MOUZA -   JAMTHA`
      }
    ],
    ongoing: [
      {
        id: 13,
        title: "Tattva Apas",
        image: "/ongoingProject1.webp",
        description: `A SUPREME LIVING EXPERIENCE IN THE HEART OF THE CITY`,
        location: `MOUZA - BELTARODI`
      },
      {
        id: 14,
        title: "Mahalaxmi Nagar - 41",
        image: "/ongoingProject2.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 41. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA -  JAMTHA`
      },
      {
        id: 15,
        title: "Mahalaxmi Nagar - 42",
        image: "/ongoingProject3.webp",
        description : `Mahalaxmi Developers launched the project Mahalaxmi Nagar 42. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
        location: `MOUZA -  GOMGAON`
      }
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
    <section id="our-projects" ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Projects
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-emerald-600 text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab as keyof typeof projects].map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { projectRefs.current[index] = el }}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  activeTab === "completed" ? "bg-green-500 text-white" :
                  activeTab === "ongoing" ? "bg-blue-500 text-white" :
                  "bg-amber-500 text-white"
                }`}>
                  {activeTab === "completed" ? "Completed" :
                   activeTab === "ongoing" ? "Ongoing" :
                   "Coming Soon"}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {project.title}
                </h3>

                {/* Project Description */}
                <details className="mb-6">
                  <summary className="cursor-pointer font-medium text-slate-800 py-2 list-none border border-slate-200 flex items-center bg-green-50 px-4 rounded-lg hover:bg-green-100 transition-colors duration-300">
                    {`Project Details`}
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-slate-600 whitespace-pre-line">
                    {project.description}
                  </p>
                </details>

                {/* Project Location */}
                <div className="mb-6 flex items-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="ml-2 text-slate-600">{project.location}</span>
                </div>

                {/* Inquiry Button */}
                <Button
                  onClick={() => handleInquiry(project.title)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Inquire Now</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
