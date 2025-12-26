import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { EducationSection } from "@/components/sections/education-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { InterestsSection } from "@/components/sections/interests-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <EducationSection />
        <ExperienceSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <InterestsSection />
        <ContactSection />
      </main>
    </div>
  )
}
