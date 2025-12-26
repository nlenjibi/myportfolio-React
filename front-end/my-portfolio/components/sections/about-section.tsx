"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api-client"
import { mockAbout } from "@/lib/mock-data"

export function AboutSection() {
  const [about, setAbout] = useState<any>(mockAbout)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await api.getAbout()
        setAbout(data)
        console.log("[v0] About data loaded from API")
      } catch (error) {
        console.log("[v0] Using mock about data (API not available)")
      } finally {
        setLoading(false)
      }
    }

    fetchAbout()
  }, [])

  if (loading) {
    return (
      <section id="about" className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">Loading...</div>
      </section>
    )
  }

  return (
    <section id="about" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={about.image || "/placeholder.svg?height=500&width=500&query=developer workspace"}
              alt="About me"
              className="rounded-2xl object-cover w-full aspect-square"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-primary uppercase tracking-wider font-semibold">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{about.headline}</h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{about.bio}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{about.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{about.location}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{about.phone}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="font-medium text-primary">{about.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
