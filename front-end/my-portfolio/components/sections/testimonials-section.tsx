import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      content:
        "Working with John was an absolute pleasure. His attention to detail and technical expertise helped us launch our product ahead of schedule. Highly recommended!",
      image: "/professional-woman-portrait.png",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "Innovation Labs",
      content:
        "John transformed our vision into reality with exceptional skill and professionalism. The final product exceeded our expectations in every way.",
      image: "/professional-man-portrait.png",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "CTO",
      company: "Digital Solutions",
      content:
        "His deep understanding of modern web technologies and commitment to quality made our collaboration seamless. Would definitely work together again.",
      image: "/professional-woman-portrait-2.png",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-wider font-semibold">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold">Client Feedback</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-6 space-y-4 hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
