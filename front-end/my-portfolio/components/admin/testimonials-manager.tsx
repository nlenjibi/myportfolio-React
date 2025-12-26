"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
}

export function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      content: "Working with John was an absolute pleasure.",
      rating: 5,
    },
  ])

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    content: "",
    rating: 5,
  })

  const [editingId, setEditingId] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      setTestimonials(testimonials.map((item) => (item.id === editingId ? { ...item, ...formData } : item)))
      setEditingId(null)
    } else {
      setTestimonials([...testimonials, { id: Date.now(), ...formData }])
    }

    setFormData({ name: "", position: "", company: "", content: "", rating: 5 })
  }

  const handleEdit = (item: Testimonial) => {
    setFormData(item)
    setEditingId(item.id)
  }

  const handleDelete = (id: number) => {
    setTestimonials(testimonials.filter((item) => item.id !== id))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
        <p className="text-muted-foreground">Manage client testimonials and reviews</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit Testimonial" : "Add Testimonial"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="position" className="text-sm font-medium">
                  Position
                </label>
                <Input id="position" name="position" value={formData.position} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company
              </label>
              <Input id="company" name="company" value={formData.company} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">
                Testimonial
              </label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="rating" className="text-sm font-medium">
                Rating: {formData.rating} / 5
              </label>
              <Input
                id="rating"
                name="rating"
                type="range"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-3">
              {editingId && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEditingId(null)
                    setFormData({ name: "", position: "", company: "", content: "", rating: 5 })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit" className="flex-1 gap-2">
                <Plus size={16} />
                {editingId ? "Update Testimonial" : "Add Testimonial"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Testimonials ({testimonials.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {testimonials.map((item) => (
              <div key={item.id} className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.position} at {item.company}
                    </p>
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
                <p className="text-sm">{item.content}</p>
                <p className="text-sm text-muted-foreground mt-2">Rating: {item.rating}/5</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
