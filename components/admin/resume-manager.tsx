"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { api } from "@/lib/api-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


  const [formData, setFormData] = useState({
    title: "",
    file_url: "",
    description: "",
  })
  const [resumeId, setResumeId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getResume()
      .then((data) => {
        let resumeArr = [];
        if (Array.isArray(data) && data.length > 0) {
          resumeArr = data;
        } else if (data && Array.isArray(data.results) && data.results.length > 0) {
          resumeArr = data.results;
        }
        if (resumeArr.length > 0) {
          setFormData(resumeArr[0]);
          setResumeId(resumeArr[0].id);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (resumeId) {
      await api.updateResume(resumeId, formData);
    } else {
      const created = await api.createResume(formData);
      setResumeId(created.id);
    }
    alert("Resume updated successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Resume</h2>
        <p className="text-muted-foreground">Manage your resume file and information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resume Information</CardTitle>
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
              <label htmlFor="file_url" className="text-sm font-medium">
                Resume File URL
              </label>
              <Input
                id="file_url"
                name="file_url"
                value={formData.file_url}
                onChange={handleChange}
                placeholder="https://..."
                required
              />
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

            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
