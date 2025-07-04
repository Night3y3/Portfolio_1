"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import {
    Lightbulb,
    Code2,
    Database,
    Palette,
    Zap,
    Globe,
    GitBranch,
    CreditCard,
    Figma,
    Server,
    Braces,
    FileCode,
    Layers,
    Shield,
    Workflow,
    Smartphone,
} from "lucide-react"
import { IconAutomation, IconBrandAws, IconBrandAzure, IconBrandJavascript, IconBrandPython } from "@tabler/icons-react"

interface Skill {
    name: string
    icon: React.ComponentType<{ className?: string }>
    category: "language" | "framework" | "tool" | "database"
    color: string
}

const skills: Skill[] = [
    // Programming Languages
    { name: "TypeScript", icon: IconBrandJavascript, category: "language", color: "text-blue-600" },
    { name: "C#", icon: Braces, category: "language", color: "text-purple-600" },
    { name: "Java", icon: FileCode, category: "language", color: "text-orange-600" },
    { name: "Python", icon: IconBrandPython, category: "language", color: "text-green-600" },
    { name: "Go", icon: Code2, category: "language", color: "text-blue-500" },

    // Frameworks & Libraries
    { name: "React", icon: Layers, category: "framework", color: "text-cyan-600" },
    { name: "Next.js", icon: Globe, category: "framework", color: "text-gray-800" },
    { name: "Node.js", icon: Server, category: "framework", color: "text-green-600" },
    { name: "Tailwind CSS", icon: Palette, category: "framework", color: "text-teal-600" },
    { name: "React Native", icon: Smartphone, category: "framework", color: "text-blue-500" },
    { name: "Expo", icon: Smartphone, category: "framework", color: "text-yellow-500" },

    // Tools & Services
    { name: "GitHub", icon: GitBranch, category: "tool", color: "text-gray-700" },
    { name: "Figma", icon: Figma, category: "tool", color: "text-pink-600" },
    { name: "Zustand", icon: Workflow, category: "tool", color: "text-orange-500" },
    { name: "GSAP", icon: Zap, category: "tool", color: "text-green-500" },
    { name: "Clerk", icon: Shield, category: "tool", color: "text-indigo-600" },
    { name: "AWS", icon: IconBrandAws, category: "tool", color: "text-purple-500" },
    { name: "Azure", icon: IconBrandAzure, category: "tool", color: "text-blue-700" },
    { name: "Terraform", icon: IconAutomation, category: "tool", color: "text-yellow-600" },

    // Databases
    { name: "MongoDB", icon: Database, category: "database", color: "text-green-700" },
    { name: "Supabase", icon: Database, category: "database", color: "text-emerald-600" },
    { name: "PostgreSQL", icon: Database, category: "database", color: "text-blue-700" },
    { name: "CosmosDB", icon: IconBrandAzure, category: "database", color: "text-yellow-700" },
    { name: "Blob Storage", icon: IconBrandAzure, category: "database", color: "text-orange-700" },
]

export default function SkillsGlobe() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Calculate position on sphere
    const getPosition = (index: number, total: number) => {
        const phi = Math.acos(-1 + (2 * index) / total)
        const theta = Math.sqrt(total * Math.PI) * phi

        const radius = isMobile ? 100 : 160
        const x = radius * Math.cos(theta) * Math.sin(phi)
        const y = radius * Math.sin(theta) * Math.sin(phi)
        const z = radius * Math.cos(phi)

        return { x, y, z }
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 px-4">
            {/* Header */}
            <div className="text-center mb-12 max-w-4xl">
                <Badge className="gap-2 mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                    <Lightbulb className="h-4 w-4" />
                    My Technical Skills
                </Badge>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-rubik font-semibold text-primary mb-6 leading-tight">
                    Interactive Skills
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        Globe
                    </span>
                </h1>

                <p className="text-lg md:text-xl font-poppins text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Explore my technical expertise in an interactive 3D environment. Hover over each skill to learn more about my
                    experience.
                </p>
            </div>

            {/* Globe Container */}
            <div className="relative w-full max-w-5xl h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center mb-12">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />

                {/* Globe */}
                <div className="relative preserve-3d">
                    {/* Rotating container */}
                    <div className="animate-spin-slow preserve-3d relative">
                        {skills.map((skill, index) => {
                            const position = getPosition(index, skills.length)
                            const Icon = skill.icon
                            const isHovered = hoveredSkill === skill.name

                            return (
                                <div
                                    key={skill.name}
                                    className="absolute preserve-3d group"
                                    style={{
                                        transform: `translate3d(${position.x}px, ${position.y}px, ${position.z}px)`,
                                    }}
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    onClick={() => setHoveredSkill(isHovered ? null : skill.name)}
                                >
                                    {/* Skill Icon */}
                                    <div
                                        className={`
                    relative p-3 md:p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 shadow-lg
                    ${isHovered
                                                ? "bg-white/90 border-primary/40 scale-125 shadow-2xl shadow-primary/20"
                                                : "bg-white/70 border-gray-200 hover:bg-white/80 hover:scale-110 hover:shadow-xl"
                                            }
                  `}
                                    >
                                        <Icon className={`h-5 w-5 md:h-7 md:w-7 ${skill.color} transition-all duration-300`} />

                                        {/* Tooltip */}
                                        {isHovered && (
                                            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                                                <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium font-poppins whitespace-nowrap shadow-lg border">
                                                    {skill.name}
                                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Floating particles effect */}
                                    {isHovered && (
                                        <div className="absolute inset-0 pointer-events-none">
                                            {[...Array(4)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-1 h-1 bg-primary/60 rounded-full animate-ping"
                                                    style={{
                                                        top: `${Math.random() * 100}%`,
                                                        left: `${Math.random() * 100}%`,
                                                        animationDelay: `${i * 0.15}s`,
                                                        animationDuration: "1.5s",
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Center indicator */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
                </div>
            </div>

            {/* Skills Categories */}
            <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                    {
                        category: "language",
                        label: "Languages",
                        color: "border-yellow-200 bg-yellow-50 text-yellow-800",
                        icon: FileCode,
                    },
                    {
                        category: "framework",
                        label: "Frameworks",
                        color: "border-blue-200 bg-blue-50 text-blue-800",
                        icon: Layers,
                    },
                    {
                        category: "tool",
                        label: "Tools",
                        color: "border-green-200 bg-green-50 text-green-800",
                        icon: Zap,
                    },
                    {
                        category: "database",
                        label: "Databases",
                        color: "border-purple-200 bg-purple-50 text-purple-800",
                        icon: Database,
                    },
                ].map(({ category, label, color, icon: CategoryIcon }) => (
                    <div
                        key={category}
                        className={`p-4 rounded-xl border-2 ${color} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <CategoryIcon className="h-4 w-4" />
                            <div className="font-medium font-rubik">{label}</div>
                        </div>
                        <div className="text-xs opacity-75 font-poppins">
                            {skills.filter((skill) => skill.category === category).length} skills
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground font-poppins">
                    Click or hover on any skill to learn more • Globe rotates automatically
                </p>
            </div>
        </div>
    )
}
