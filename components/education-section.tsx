import { GraduationCap } from "lucide-react"

const education = [
  {
    title: "UI/UX Design Certification",
    institution: "Interaction Design Foundation, Online",
    period: "2018 - 2019",
    description:
      "Gained hands-on experience in UX research, prototyping, wireframing, and usability testing, focusing on designing seamless, user-friendly digital experiences.",
  },
  {
    title: "Bachelor of Design in Interaction Design",
    institution: "National University of Singapore, Singapore",
    period: "2015 - 2017",
    description:
      "Completed a comprehensive program focused on designing user-centered digital products, integrating aesthetics and functionality through practical interaction design principles.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-foreground" />
        <h2 className="text-2xl font-semibold font-space-grotesk text-foreground">Education</h2>
      </div>

      {/* Education List */}
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="education-card rounded-xl p-5 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground font-space-grotesk">{edu.title}</h3>
                <p className="text-muted-foreground text-sm">{edu.institution}</p>
              </div>
              <div className="bg-white/5 border border-white/10 px-3 py-1 rounded text-sm text-foreground backdrop-blur-md">
                {edu.period}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/60"></div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
