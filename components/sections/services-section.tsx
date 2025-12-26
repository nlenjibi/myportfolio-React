import { Code, Palette, Smartphone, Database, Cloud, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies and best practices.",
      icon: Code,
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide excellent user experience.",
      icon: Palette,
    },
    {
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native and modern mobile frameworks.",
      icon: Smartphone,
    },
    {
      title: "Backend Development",
      description: "Designing and implementing scalable backend systems with RESTful APIs and databases.",
      icon: Database,
    },
    {
      title: "Cloud Services",
      description: "Deploying and managing applications on cloud platforms like AWS, Azure, and Vercel.",
      icon: Cloud,
    },
    {
      title: "Performance Optimization",
      description: "Optimizing application performance for faster load times and better user experience.",
      icon: Zap,
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-wider font-semibold">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold">What I Offer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all space-y-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
