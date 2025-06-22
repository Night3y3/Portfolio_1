"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SendEmail } from "./SendEmail"
import { motion } from "framer-motion"
import { redirect } from "next/navigation"


interface Particle {
  x: number
  y: number
  emoji: string
  size: number
  velocity: { x: number; y: number }
  rotation: number
  rotationSpeed: number
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isFormValid, setIsFormValid] = useState(false)
  const [isExploding, setIsExploding] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])

  const namePlaceholders = [
    "Steve Jobs",
    "John Doe",
    "Satoshi Nakamoto",
    "Elon Musk",
    "Mark Zuckerberg",
  ];

  const emailPlaceholders = [
    "steve.jobs@apple.com",
    "john.doe@example.com",
    "satoshi.nakamoto@bitcoin.com",
    "elon.musk@x.com",
    "mark.zuckerberg@meta.com"
  ];

  const messagePlaceholders = [
    "Hello, I would like to work with you on a project.",
    "I have a project idea that I would like to discuss with you.",
    "I would like to invite you to a conference.",
    "I would like to invite you to a meeting.",
    "I would like to invite you to a party."
  ];

  const emojis = ['🎉', '🎊', '🥳', '🍾', '🎈', '🎇', '✨', '💥']

  useEffect(() => {
    if (isExploding) {
      const canvas = canvasRef.current
      const button = buttonRef.current
      if (!canvas || !button) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const updateCanvasSize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      updateCanvasSize()
      window.addEventListener('resize', updateCanvasSize)

      const buttonRect = button.getBoundingClientRect()
      const centerX = buttonRect.left + buttonRect.width / 2
      const centerY = buttonRect.top + buttonRect.height / 2

      for (let i = 0; i < 50; i++) {
        const angle = Math.random() * Math.PI * 2
        const velocity = 5 + Math.random() * 5
        particles.current.push({
          x: centerX,
          y: centerY,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          size: 20 + Math.random() * 20,
          velocity: {
            x: Math.cos(angle) * velocity,
            y: Math.sin(angle) * velocity,
          },
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
        })
      }

      const animate = () => {
        if (!ctx) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.current = particles.current.filter((particle) => {
          particle.x += particle.velocity.x
          particle.y += particle.velocity.y
          particle.velocity.y += 0.1 // gravity
          particle.rotation += particle.rotationSpeed

          if (particle.y < canvas.height) {
            ctx.save()
            ctx.translate(particle.x, particle.y)
            ctx.rotate(particle.rotation)
            ctx.font = `${particle.size}px Arial`
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(particle.emoji, 0, 0)
            ctx.restore()
            return true
          }
          return false
        })

        if (particles.current.length > 0) {
          requestAnimationFrame(animate)
        } else {
          setIsExploding(false)
        }
      }

      animate()

      return () => {
        window.removeEventListener('resize', updateCanvasSize)
      }
    }
  }, [isExploding])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isFormValid && !isSubmitting) {
      setIsSubmitting(true)
      setIsExploding(true)
      particles.current = []
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);
      await SendEmail(formDataObj)
      // Handle redirect or success message after submission here
      redirect("/")
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  useEffect(() => {
    setIsFormValid(formData.name !== "" && formData.email !== "" && formData.message !== "")
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Card className="w-full max-w-md mx-auto">
        <form onSubmit={handleClick}>
          <CardHeader>
            <motion.div variants={childVariants}>
              <CardTitle className="icon_underline text-2xl font-bold mb-2">Send me a mail</CardTitle>
              <CardDescription>
                Once the form is submitted, you will be redirected to the home page.
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent>
            <motion.div variants={childVariants} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full cursor-none"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full cursor-none"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  name="message"
                  required
                  className="w-full min-h-[120px] resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-none"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </motion.div>
          </CardContent>
          <CardFooter>
            <div className="w-full flex justify-center">
              <motion.button
                type="submit"
                ref={buttonRef}
                className="text-md transform-gpu rounded-lg bg-red-500 font-semibold text-white px-4 py-2 disabled:opacity-50 disabled:cursor-none cursor-none"
                whileTap={{ scale: 0.95 }}
                disabled={!isFormValid || isSubmitting}
              >
                Send Message 🎉
              </motion.button>
              {isExploding && (
                <canvas
                  ref={canvasRef}
                  className="pointer-events-none fixed inset-0"
                  style={{ zIndex: 9999 }}
                />
              )}
            </div>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  )
}
