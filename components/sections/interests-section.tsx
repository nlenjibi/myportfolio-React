import { Camera, Music, Plane, Book, Bike, Coffee } from "lucide-react"

export function InterestsSection() {
  const interests = [
    {
      title: "Photography",
      description: "Capturing moments and exploring visual storytelling through the lens.",
      icon: Camera,
    },
    {
      title: "Music Production",
      description: "Creating electronic music and experimenting with sound design.",
      icon: Music,
    },
    {
      title: "Travel",
      description: "Exploring new cultures, cuisines, and experiencing different perspectives.",
      icon: Plane,
    },
    {
      title: "Reading",
      description: "Deep diving into science fiction, philosophy, and technology books.",
      icon: Book,
    },
    {
      title: "Cycling",
      description: "Long-distance cycling and exploring scenic routes on weekends.",
      icon: Bike,
    },
    {
      title: "Coffee",
      description: "Specialty coffee enthusiast and amateur home barista.",
      icon: Coffee,
    },
  ]

  return (
    <section id="interests" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-wider font-semibold">Interests</p>
          <h2 className="text-4xl md:text-5xl font-bold">Beyond the Code</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            When I'm not coding, you'll find me pursuing these passions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all space-y-3"
              >
                <div className="p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{interest.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{interest.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
