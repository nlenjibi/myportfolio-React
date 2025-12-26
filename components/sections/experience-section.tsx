import { Briefcase, ExternalLink } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "TechCorp Inc.",
      position: "Senior Frontend Engineer",
      period: "2024 — Present",
      location: "San Francisco, CA",
      description:
        "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Storybook"],
      url: "https://techcorp.com",
      current: true,
    },
    {
      company: "Startup Labs",
      position: "Full Stack Developer",
      period: "2021 — 2024",
      location: "Remote",
      description:
        "Developed and maintained multiple client projects from concept to deployment. Led frontend architecture decisions and mentored junior developers on best practices and modern development workflows.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      url: "https://startuplabs.com",
      current: false,
    },
    {
      company: "Digital Agency Co.",
      position: "Frontend Developer",
      period: "2019 — 2021",
      location: "New York, NY",
      description:
        "Created responsive web applications for diverse clients in various industries. Collaborated with designers to translate mockups into pixel-perfect, accessible interfaces.",
      technologies: ["JavaScript", "Vue.js", "SASS", "Webpack"],
      url: "https://digitalagency.com",
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-wider font-semibold">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">Work History</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg h-fit">
                  <Briefcase size={24} className="text-primary" />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        {exp.current && (
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Current</span>
                        )}
                      </div>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>

                  <p className="text-sm text-muted-foreground">{exp.location}</p>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-muted text-foreground px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
