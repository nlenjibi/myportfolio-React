import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <p className="text-sm text-primary uppercase tracking-wider font-semibold">Resume</p>
          <h2 className="text-4xl md:text-5xl font-bold">Download My Resume</h2>
        </div>

        <div className="flex flex-col items-center gap-6 p-8 bg-card rounded-2xl border border-border">
          <div className="p-4 bg-primary/10 rounded-full">
            <FileText size={48} className="text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Full Resume Available</h3>
            <p className="text-muted-foreground max-w-md">
              Download my complete resume to learn more about my experience, education, and skills.
            </p>
          </div>
          <Button size="lg" className="gap-2">
            <Download size={16} />
            Download Resume (PDF)
          </Button>
        </div>
      </div>
    </section>
  )
}
