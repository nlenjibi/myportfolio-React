import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      institution: "Stanford University",
      degree: "Master of Science",
      field: "Computer Science",
      period: "2018 - 2020",
      description: "Specialized in Human-Computer Interaction and Web Technologies",
      grade: "GPA: 3.9/4.0",
    },
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2014 - 2018",
      description: "Focus on Software Engineering and Algorithm Design",
      grade: "GPA: 3.8/4.0",
    },
  ]

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-wider font-semibold">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold">Academic Background</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg h-fit">
                  <GraduationCap size={24} className="text-primary" />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-muted-foreground">
                        {edu.degree} in {edu.field}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
                  </div>

                  <p className="text-muted-foreground">{edu.description}</p>

                  <p className="text-sm font-medium text-primary">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
