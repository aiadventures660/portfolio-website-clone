import { Briefcase, Palette, Figma, Monitor } from "lucide-react"

const experiences = [
  {
    title: "Framer & UI/UX Designer",
    company: "Circlum Tech",
    period: "2023 - Present",
    description:
      "Designing interactive prototypes with Framer, focusing on seamless user experiences and scalable solutions through user feedback and collaboration.",
    icon: Figma,
  },
  {
    title: "UI/UX Designer",
    company: "CoreOS",
    period: "2021 - 2023",
    description:
      "Created intuitive web and mobile designs, conducted user research, and collaborated with developers to ensure consistent and functional design delivery.",
    icon: Monitor,
  },
  {
    title: "Graphics Designer",
    company: "Pixel Square",
    period: "2020 - 2021",
    description:
      "Designed marketing assets, UI components, and brand visuals, enhancing digital campaigns and overall visual identity through creative collaboration.",
    icon: Palette,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Briefcase className="w-6 h-6 text-foreground" />
        <h2 className="text-2xl font-semibold font-space-grotesk text-foreground">Experience</h2>
      </div>

      {/* Experience List */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card rounded-xl p-6 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4 flex-1">
                <exp.icon className="w-6 h-6 text-[color:var(--brand)] flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground font-space-grotesk">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 px-3 py-1 rounded text-sm text-white backdrop-blur-md">
                {exp.period}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/60"></div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
