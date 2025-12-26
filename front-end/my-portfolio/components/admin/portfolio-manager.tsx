"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  project_url: string
  github_url: string
  technologies: string
  category: string
  featured: boolean
}

export function PortfolioManager() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform",
      image: "",
      project_url: "https://example.com",
      github_url: "https://github.com",
      technologies: "Next.js, TypeScript, Stripe",
      category: "Web App",
      featured: true,
    },
  ])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    project_url: "",
    github_url: "",
    technologies: "",
    category: "",
    featured: false,
  })

  const [editingId, setEditingId] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      setProjects(projects.map((project) => (project.id === editingId ? { ...project, ...formData } : project)))
      setEditingId(null)
    } else {
      setProjects([...projects, { id: Date.now(), ...formData }])
    }

    setFormData({
      title: "",
      description: "",
      image: "",
      project_url: "",
      github_url: "",
      technologies: "",
      category: "",
      featured: false,
    })
  }

  const handleEdit = (project: Project) => {
    setFormData(project)
    setEditingId(project.id)
  }

  const handleDelete = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id))
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
        <h2 className="text-3xl font-bold mb-2">Portfolio Projects</h2>
        <p className="text-muted-foreground">Manage your portfolio items and projects</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit Project" : "Add Project"}</CardTitle>
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
                rows={3}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category
                </label>
                <Input id="category" name="category" value={formData.category} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium">
                  Image URL
                </label>
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="project_url" className="text-sm font-medium">
                  Project URL
                </label>
                <Input
                  id="project_url"
                  name="project_url"
                  value={formData.project_url}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="github_url" className="text-sm font-medium">
                  GitHub URL
                </label>
                <Input
                  id="github_url"
                  name="github_url"
                  value={formData.github_url}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>
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

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="rounded"
              />
              <label htmlFor="featured" className="text-sm font-medium">
                Featured Project
              </label>
            </div>

            <div className="flex gap-3">
              {editingId && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEditingId(null)
                    setFormData({
                      title: "",
                      description: "",
                      image: "",
                      project_url: "",
                      github_url: "",
                      technologies: "",
                      category: "",
                      featured: false,
                    })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit" className="flex-1 gap-2">
                <Plus size={16} />
                {editingId ? "Update Project" : "Add Project"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Projects ({projects.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{project.title}</h3>
                      {project.featured && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Featured</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(project)}>
                      <Pencil size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(project.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
                <p className="text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
