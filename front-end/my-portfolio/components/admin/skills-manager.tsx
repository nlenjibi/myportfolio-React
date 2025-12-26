"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { api } from "@/lib/api-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface Skill {
  id: number
  name: string
  category: string
  proficiency: number
}

export function SkillsManager() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    proficiency: 50,
  })

  const [editingId, setEditingId] = useState<number | null>(null)

  useEffect(() => {
    api.getSkills()
      .then((data) => {
        if (Array.isArray(data)) {
          setSkills(data)
        } else if (data && Array.isArray(data.results)) {
          setSkills(data.results)
        } else {
          setSkills([])
        }
      })
      .catch(() => setSkills([]))
      .finally(() => setLoading(false))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      // Update skill
      const updated = await api.updateSkill(editingId, formData)
      setSkills(skills.map((skill) => (skill.id === editingId ? updated : skill)))
      setEditingId(null)
    } else {
      // Create skill
      const created = await api.createSkill(formData)
      setSkills([...skills, created])
    }
    setFormData({ name: "", category: "", proficiency: 50 })
  }

  const handleEdit = (skill: Skill) => {
    setFormData({
      name: skill.name,
      category: skill.category,
      proficiency: skill.proficiency,
    })
    setEditingId(skill.id)
  }

  const handleDelete = async (id: number) => {
    await api.deleteSkill(id)
    setSkills(skills.filter((skill) => skill.id !== id))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <p className="text-muted-foreground">Manage your technical skills and proficiency levels</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Skill" : "Add New Skill"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Skill Name
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category
                </label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g., Frontend, Backend, Tools"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="proficiency" className="text-sm font-medium">
                  Proficiency: {formData.proficiency}%
                </label>
                <Input
                  id="proficiency"
                  name="proficiency"
                  type="range"
                  min="0"
                  max="100"
                  value={formData.proficiency}
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
                      setFormData({ name: "", category: "", proficiency: 50 })
                    }}
                  >
                    Cancel
                  </Button>
                )}
                <Button type="submit" className="flex-1 gap-2">
                  <Plus size={16} />
                  {editingId ? "Update Skill" : "Add Skill"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Skills ({skills.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(skill)}>
                      <Pencil size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(skill.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
