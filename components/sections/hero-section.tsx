"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { api } from "@/lib/api-client"
import { mockIntro } from "@/lib/mock-data"

export function HeroSection() {
  const [intro, setIntro] = useState<any>(mockIntro)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const data = await api.getIntro()
        setIntro(data)
        console.log("[v0] Intro data loaded from API")
      } catch (error) {
        console.log("[v0] Using mock intro data (API not available)")
        // Keep mock data that was already set
      } finally {
        setLoading(false)
      }
    }

    fetchIntro()
  }, [])

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="text-muted-foreground">Loading...</div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Welcome</p>
            <h1 className="text-5xl md:text-7xl font-bold text-balance">{intro.name}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">{intro.title}</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{intro.tagline}</p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2">
              <Download size={16} />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            {intro.github && (
              <a
                href={intro.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {intro.linkedin && (
              <a
                href={intro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {intro.twitter && (
              <a
                href={intro.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            )}
            {intro.email && (
              <a
                href={`mailto:${intro.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <img
              src={intro.profile_image || "/placeholder.svg"}
              alt={intro.name}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
