"use client"

import { useState } from "react"
import Aboutfooter from "@/components/Aboutfooter"
import Heading from "@/components/Heading"
import { Badge } from "@/components/ui/badge"
import { Circle, Heart, User2, MapPin, Calendar, Award, Coffee } from "lucide-react"

const AboutPage = () => {
  const [hoveredHobby, setHoveredHobby] = useState<number | null>(null)

  const items = [
    { hobby: "Coding", icon: "🧑🏻‍💻", description: "Building amazing web applications" },
    { hobby: "Exploring latest techs", icon: "⚙️", description: "Always learning new technologies" },
    { hobby: "Listening to music", icon: "🎧", description: "Vibing to different genres" },
    { hobby: "Gym", icon: "💪🏻", description: "Staying fit and healthy" },
  ]

  const stats = [
    { label: "Years Experience", value: "3+", icon: Calendar },
    { label: "Projects Completed", value: "50+", icon: Award },
    { label: "Cups of Coffee", value: "∞", icon: Coffee },
  ]

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
      {/* Header Badge */}
      <Badge className="gap-2 animate-in fade-in-0 slide-in-from-left-5 duration-500">
        <User2 className="h-5 w-5" />
        About me
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-6 animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-200">
        <Heading>
          Full-Stack <br /> Developer, Based In India.
        </Heading>

        <div className="relative">
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg leading-relaxed">
            I am a Full-Stack Developer from{" "}
            <span className="inline-flex items-center gap-1 font-semibold text-blue-600">
              <MapPin className="h-4 w-4" />
              Kolkata, WB, India
            </span>
            . I am having more than 3 years of experience in Software Development. Previously worked as a intern in 3
            startups and currently working as a SDE at House of Ed Tech. My current achievement lies in winning{" "}
            <span className="font-semibold text-green-600">5ireChain Track in Hack this Fall 3.0</span>. I always try to
            follow the industry standards while engaging with any projects. Plus to mention that i am also a fast
            learner 😃.
          </p>

          {/* Decorative element */}
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-xl -z-10" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full grid grid-cols-3 gap-4 my-6 animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-400">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg group"
          >
            <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
            <div className="text-2xl font-rubik font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground font-poppins">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* About Footer */}
      <div className="w-full flex flex-row justify-between max-lg:flex-col animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-500">
        <Aboutfooter />
      </div>

      {/* Hobbies Section */}
      <div className="block w-full animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-600">
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl mb-6">
          <Heart className="h-8 w-8 text-red-500" /> Hobbies
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((val, indx) => (
            <div
              key={indx}
              className="group relative bg-white/30 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:bg-white/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredHobby(indx)}
              onMouseLeave={() => setHoveredHobby(null)}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{val.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-lg font-medium text-primary">
                    <Circle className="h-3 w-3 text-blue-600" />
                    {val.hobby}
                  </div>
                  <p className="text-sm text-muted-foreground font-poppins mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {val.description}
                  </p>
                </div>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
