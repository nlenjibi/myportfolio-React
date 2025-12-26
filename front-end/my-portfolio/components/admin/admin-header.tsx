"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"

export function AdminHeader() {
  const { user, logout } = useAuth()

  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-card">
      <div>
        <h1 className="text-xl font-semibold">Portfolio Management</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <User size={16} className="text-muted-foreground" />
          <span className="text-muted-foreground">{user?.username || "Admin"}</span>
        </div>
        <Button variant="ghost" size="sm" onClick={logout} className="gap-2">
          <LogOut size={16} />
          Logout
        </Button>
      </div>
    </header>
  )
}
