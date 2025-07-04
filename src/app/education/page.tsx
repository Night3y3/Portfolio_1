"use client"

import { useState } from "react"
import Heading from "@/components/Heading"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import dynamic from "next/dynamic"

const DemoXadeLinksCS = dynamic(() => import("@/components/DemoXadeLinks"), {
  ssr: false,
})

const WorkPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const experiences = [
    {
      date: "September 2021 - 2025",
      title: "College",
      subtitle: "Bachelor of Technology",
      location: "Kolkata",
      description:
        "I am currently studying Bachelor of Technology specialized in Artificial Intelligence and Machine Learning.",
      type: "education",
      status: "Completed",
    },
    {
      date: "May 2024 - Aug 2024",
      title: "Xade Finance",
      subtitle: "SDE Intern",
      location: "Dubai, Remote",
      customComponent: <DemoXadeLinksCS />,
      type: "work",
      status: "Completed",
    },
    {
      date: "Sept 2024 - Nov 2024",
      title: "Caravel Labs",
      subtitle: "Consulting Engineer Intern",
      location: "Washington, Remote",
      description: "Worked with the China Government on a legacy product used in over 500 schools.",
      type: "work",
      status: "Completed",
    },
    {
      date: "Feb 2025 - June 2025",
      title: "Inddev",
      subtitle: "Full Stack Intern",
      location: "Gurgaon, Remote",
      description: "Worked on a B2C app to connect astrologers with users via chat, phone call, and video call.",
      type: "work",
      status: "Completed",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Current":
        return "bg-green-100 text-green-800 border-green-200"
      case "Completed":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Upcoming":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 animate-in fade-in-0 slide-in-from-left-5 duration-500">
        <Badge className="gap-2 px-4 py-2">
          <Briefcase className="h-5 w-5" />
          Work & Education
        </Badge>
      </div>

      <div className="animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-200">
        <Heading>My Journey</Heading>
        <p className="font-poppins text-lg text-muted-foreground mt-2 max-w-2xl">
          From education to professional experience, here&apos;s my career timeline showcasing growth and achievements.
        </p>
      </div>

      {/* Timeline */}
      <div className="w-full mt-8 animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-400">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 group-hover:border-purple-600">
                  <div className="absolute inset-1 bg-blue-600 rounded-full group-hover:bg-purple-600 transition-colors duration-300"></div>
                </div>

                {/* Content card */}
                <div className="ml-16 relative">
                  <div
                    className={`bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${hoveredIndex === index ? "bg-white/70 shadow-lg" : ""
                      }`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-muted-foreground font-poppins">{exp.date}</span>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                              exp.status,
                            )}`}
                          >
                            {exp.status}
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold font-rubik text-primary leading-tight">{exp.title}</h3>
                        <p className="text-lg text-muted-foreground font-medium">{exp.subtitle}</p>

                        <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-base text-muted-foreground font-poppins leading-relaxed mb-4">
                        {exp.description}
                      </p>
                    )}

                    {/* Custom component */}
                    {exp.customComponent && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg border">{exp.customComponent}</div>
                    )}

                    {/* Hover effect background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 transition-opacity duration-300 -z-10 ${hoveredIndex === index ? "opacity-100" : ""
                        }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-600">
        <div className="bg-white/30 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
          <div className="text-2xl font-bold text-blue-600 font-rubik">4</div>
          <div className="text-sm text-muted-foreground font-poppins">Total Experiences</div>
        </div>
        <div className="bg-white/30 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
          <div className="text-2xl font-bold text-green-600 font-rubik">3</div>
          <div className="text-sm text-muted-foreground font-poppins">Internships</div>
        </div>
        <div className="bg-white/30 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
          <div className="text-2xl font-bold text-purple-600 font-rubik">2025</div>
          <div className="text-sm text-muted-foreground font-poppins">Graduation Year</div>
        </div>
      </div>
    </div>
  )
}

export default WorkPage
