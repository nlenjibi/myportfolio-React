"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Mail, CheckCircle2 } from "lucide-react"

interface ContactMessage {
  id: number
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  created_at: string
}

export function ContactManager() {
  const [messages, setMessages] = useState<ContactMessage[]>([
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Project Inquiry",
      message: "I'd like to discuss a potential project...",
      read: false,
      created_at: "2024-01-15",
    },
  ])

  const handleMarkRead = (id: number) => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg)))
  }

  const handleDelete = (id: number) => {
    setMessages(messages.filter((msg) => msg.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Contact Messages</h2>
        <p className="text-muted-foreground">View and manage contact form submissions</p>
      </div>

      <div className="grid gap-3">
        {messages.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Mail size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No messages yet</p>
            </CardContent>
          </Card>
        ) : (
          messages.map((message) => (
            <Card key={message.id} className={message.read ? "opacity-60" : ""}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{message.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{message.email}</p>
                  </div>
                  <div className="flex gap-2">
                    {!message.read && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleMarkRead(message.id)}
                        title="Mark as read"
                      >
                        <CheckCircle2 size={16} />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(message.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">{message.subject}</p>
                <p className="text-sm text-muted-foreground mb-3">{message.message}</p>
                <p className="text-xs text-muted-foreground">Received: {message.created_at}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
