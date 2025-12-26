"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface Education {
  id: number
  institution: string
  degree: string
  field_of_study: string
  start_date: string
  end_date: string
  current: boolean
  description: string
}

export function EducationManager() {
  const [items, setItems] = useState<Education[]>([
    {
      id: 1,
      institution: "Stanford University",
      degree: "Master of Science",
      field_of_study: "Computer Science",
      start_date: "2018",
      end_date: "2020",
      current: false,
      description: "Specialized in Human-Computer Interaction",
    },
  ])

  const [formData, setFormData] = useState({
    institution: "",
    degree: "",
    field_of_study: "",
    start_date: "",
    end_date: "",
    current: false,
    description: "",
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
      institution: "",
      degree: "",
      field_of_study: "",
      start_date: "",
      end_date: "",
      current: false,
      description: "",
    })
  }

  const handleEdit = (item: Education) => {
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
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <p className="text-muted-foreground">Manage your educational background</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit Education" : "Add Education"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="institution" className="text-sm font-medium">
                  Institution
                </label>
                <Input
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="degree" className="text-sm font-medium">
                  Degree
                </label>
                <Input id="degree" name="degree" value={formData.degree} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="field_of_study" className="text-sm font-medium">
                Field of Study
              </label>
              <Input
                id="field_of_study"
                name="field_of_study"
                value={formData.field_of_study}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="start_date" className="text-sm font-medium">
                  Start Date
                </label>
                <Input
                  id="start_date"
                  name="start_date"
                  type="date"
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
                  type="date"
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
                Currently studying here
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
                rows={3}
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
                      institution: "",
                      degree: "",
                      field_of_study: "",
                      start_date: "",
                      end_date: "",
                      current: false,
                      description: "",
                    })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit" className="flex-1 gap-2">
                <Plus size={16} />
                {editingId ? "Update Education" : "Add Education"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Education List ({items.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{item.degree}</h3>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
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
                <p className="text-sm">{item.field_of_study}</p>
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
