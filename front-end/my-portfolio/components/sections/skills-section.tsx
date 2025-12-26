export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", proficiency: 95 },
        { name: "TypeScript", proficiency: 90 },
        { name: "Next.js", proficiency: 92 },
        { name: "Tailwind CSS", proficiency: 88 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Python", proficiency: 80 },
        { name: "Django", proficiency: 82 },
        { name: "PostgreSQL", proficiency: 78 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", proficiency: 90 },
        { name: "Docker", proficiency: 75 },
        { name: "Figma", proficiency: 85 },
        { name: "VS Code", proficiency: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-wider font-semibold">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">Technical Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-xl font-semibold border-b border-border pb-3">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
