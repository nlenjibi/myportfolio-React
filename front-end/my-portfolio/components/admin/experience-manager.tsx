"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface Experience {
  id: number
  company: string
  position: string
  location: string
  start_date: string
  end_date: string
  current: boolean
  description: string
  technologies: string
}

export function ExperienceManager() {
  const [items, setItems] = useState<Experience[]>([
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Frontend Engineer",
      location: "San Francisco, CA",
      start_date: "2024-01",
      end_date: "",
      current: true,
      description: "Build and maintain critical frontend components",
      technologies: "React, TypeScript, Next.js",
    },
  ])

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    location: "",
    start_date: "",
    end_date: "",
    current: false,
    description: "",
    technologies: "",
  })

  const [editingId, setEditingId] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      setItems(items.map((item) => (item.id === editingId ? { ...item, ...formData } : item)))
      setEditingId(null)
    } else {
      setItems([...items, { id: Date.now(), ...formData }])
    }

    setFormData({
      company: "",
      position: "",
      location: "",
      start_date: "",
      end_date: "",
      current: false,
      description: "",
      technologies: "",
    })
  }

  const handleEdit = (item: Experience) => {
    setFormData(item)
    setEditingId(item.id)
  }

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
        <p className="text-muted-foreground">Manage your work history and experience</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit Experience" : "Add Experience"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input id="company" name="company" value={formData.company} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="position" className="text-sm font-medium">
                  Position
                </label>
                <Input id="position" name="position" value={formData.position} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">
                Location
              </label>
              <Input id="location" name="location" value={formData.location} onChange={handleChange} />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="start_date" className="text-sm font-medium">
                  Start Date
                </label>
                <Input
                  id="start_date"
                  name="start_date"
                  type="month"
                  value={formData.start_date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="end_date" className="text-sm font-medium">
                  End Date
                </label>
                <Input
                  id="end_date"
                  name="end_date"
                  type="month"
                  value={formData.end_date}
                  onChange={handleChange}
                  disabled={formData.current}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="current"
                name="current"
                checked={formData.current}
                onChange={handleChange}
                className="rounded"
              />
              <label htmlFor="current" className="text-sm font-medium">
                Currently working here
              </label>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="technologies" className="text-sm font-medium">
                Technologies (comma-separated)
              </label>
              <Input
                id="technologies"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="React, Node.js, PostgreSQL"
              />
            </div>

            <div className="flex gap-3">
              {editingId && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEditingId(null)
                    setFormData({
                      company: "",
                      position: "",
                      location: "",
                      start_date: "",
                      end_date: "",
                      current: false,
                      description: "",
                      technologies: "",
                    })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit" className="flex-1 gap-2">
                <Plus size={16} />
                {editingId ? "Update Experience" : "Add Experience"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Experience List ({items.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{item.position}</h3>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
                      <Pencil size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.location}</p>
                <p className="text-sm text-muted-foreground">
                  {item.start_date} - {item.current ? "Present" : item.end_date}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
