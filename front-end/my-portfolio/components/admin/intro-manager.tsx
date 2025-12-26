"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { api } from "@/lib/api-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    profile_image: "",
    resume_url: "",
    github_url: "",
    linkedin_url: "",
    twitter_url: "",
  })
  const [introId, setIntroId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getIntro()
      .then((data) => {
        let arr = [];
        if (Array.isArray(data) && data.length > 0) {
          arr = data;
        } else if (data && Array.isArray(data.results) && data.results.length > 0) {
          arr = data.results;
        }
        if (arr.length > 0) {
          setFormData(arr[0]);
          setIntroId(arr[0].id);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (introId) {
      await api.updateIntro(introId, formData);
    } else {
      const created = await api.createIntro(formData);
      setIntroId(created.id);
    }
    alert("Intro section updated successfully!");
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
        <h2 className="text-3xl font-bold mb-2">Intro / Hero Section</h2>
        <p className="text-muted-foreground">Manage your portfolio introduction and hero section</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Intro</CardTitle>
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
                <label htmlFor="tagline" className="text-sm font-medium">
                  Tagline
                </label>
                <Input id="tagline" name="tagline" value={formData.tagline} onChange={handleChange} required />
              </div>
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

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="profile_image" className="text-sm font-medium">
                  Profile Image URL
                </label>
                <Input
                  id="profile_image"
                  name="profile_image"
                  value={formData.profile_image}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="resume_url" className="text-sm font-medium">
                  Resume URL
                </label>
                <Input
                  id="resume_url"
                  name="resume_url"
                  value={formData.resume_url}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="github_url" className="text-sm font-medium">
                  GitHub URL
                </label>
                <Input id="github_url" name="github_url" value={formData.github_url} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <label htmlFor="linkedin_url" className="text-sm font-medium">
                  LinkedIn URL
                </label>
                <Input id="linkedin_url" name="linkedin_url" value={formData.linkedin_url} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <label htmlFor="twitter_url" className="text-sm font-medium">
                  Twitter URL
                </label>
                <Input id="twitter_url" name="twitter_url" value={formData.twitter_url} onChange={handleChange} />
              </div>
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
