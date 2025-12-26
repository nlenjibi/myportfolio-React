"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  User,
  Info,
  Code,
  FileText,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Wrench,
  MessageSquare,
  Heart,
  Mail,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Intro", href: "/admin/dashboard/intro", icon: User },
  { label: "About", href: "/admin/dashboard/about", icon: Info },
  { label: "Skills", href: "/admin/dashboard/skills", icon: Code },
  { label: "Resume", href: "/admin/dashboard/resume", icon: FileText },
  { label: "Education", href: "/admin/dashboard/education", icon: GraduationCap },
  { label: "Experience", href: "/admin/dashboard/experience", icon: Briefcase },
  { label: "Portfolio", href: "/admin/dashboard/portfolio", icon: FolderOpen },
  { label: "Services", href: "/admin/dashboard/services", icon: Wrench },
  { label: "Testimonials", href: "/admin/dashboard/testimonials", icon: MessageSquare },
  { label: "Interests", href: "/admin/dashboard/interests", icon: Heart },
  { label: "Contact", href: "/admin/dashboard/contact", icon: Mail },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <p className="text-sm text-muted-foreground">Portfolio Manager</p>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm bg-muted hover:bg-muted/80 transition-colors"
        >
          View Site
        </Link>
      </div>
    </aside>
  )
}
