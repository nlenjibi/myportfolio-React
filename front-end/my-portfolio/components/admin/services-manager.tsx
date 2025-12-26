"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
}

export function ServicesManager() {
  const [services, setServices] = useState<Service[]>([
    { id: 1, title: "Web Development", description: "Building responsive and performant web applications" },
    { id: 2, title: "UI/UX Design", description: "Creating intuitive and beautiful user interfaces" },
  ])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  const [editingId, setEditingId] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      setServices(services.map((service) => (service.id === editingId ? { ...service, ...formData } : service)))
      setEditingId(null)
    } else {
      setServices([...services, { id: Date.now(), ...formData }])
    }

    setFormData({ title: "", description: "" })
  }

  const handleEdit = (service: Service) => {
    setFormData(service)
    setEditingId(service.id)
  }

  const handleDelete = (id: number) => {
    setServices(services.filter((service) => service.id !== id))
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
        <h2 className="text-3xl font-bold mb-2">Services</h2>
        <p className="text-muted-foreground">Manage the services you offer</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Service" : "Add Service"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Title
                </label>
                <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
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

              <div className="flex gap-3">
                {editingId && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setEditingId(null)
                      setFormData({ title: "", description: "" })
                    }}
                  >
                    Cancel
                  </Button>
                )}
                <Button type="submit" className="flex-1 gap-2">
                  <Plus size={16} />
                  {editingId ? "Update Service" : "Add Service"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Services ({services.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service.id} className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{service.title}</h3>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                        <Pencil size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
