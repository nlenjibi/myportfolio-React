"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Briefcase, FolderOpen, MessageSquare, Mail, GraduationCap, Wrench, Heart } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    { label: "Skills", value: "12", icon: Code, color: "text-primary" },
    { label: "Experience", value: "3", icon: Briefcase, color: "text-accent" },
    { label: "Projects", value: "4", icon: FolderOpen, color: "text-primary" },
    { label: "Testimonials", value: "3", icon: MessageSquare, color: "text-accent" },
    { label: "Services", value: "6", icon: Wrench, color: "text-primary" },
    { label: "Interests", value: "6", icon: Heart, color: "text-accent" },
    { label: "Education", value: "2", icon: GraduationCap, color: "text-primary" },
    { label: "Messages", value: "0", icon: Mail, color: "text-accent" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
        <p className="text-muted-foreground">Overview of your portfolio content</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <Icon size={18} className={stat.color} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
            <h3 className="font-semibold mb-1">Update Intro</h3>
            <p className="text-sm text-muted-foreground">Modify your profile and hero section</p>
          </div>
          <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
            <h3 className="font-semibold mb-1">Add Project</h3>
            <p className="text-sm text-muted-foreground">Showcase a new portfolio item</p>
          </div>
          <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
            <h3 className="font-semibold mb-1">Manage Skills</h3>
            <p className="text-sm text-muted-foreground">Add or update your skillset</p>
          </div>
          <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
            <h3 className="font-semibold mb-1">View Messages</h3>
            <p className="text-sm text-muted-foreground">Check contact form submissions</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
