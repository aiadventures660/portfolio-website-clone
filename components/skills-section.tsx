import { Layers } from "lucide-react"
import Image from "next/image"

const skills = [
  {
    name: "Figma",
    category: "Design Tool",
    icon: "/figma-logo.png",
  },
  {
    name: "Framer",
    category: "No Code Development",
    icon: "/framer-logo.png",
  },
  {
    name: "Lemon Squeezy",
    category: "Payment",
    icon: "/lemon-squeezy-logo.png",
  },
  {
    name: "Notion",
    category: "Notion",
    icon: "/notion-logo.png",
  },
  {
    name: "Illustrators",
    category: "Illustrators",
    icon: "/adobe-illustrator-logo.png",
  },
  {
    name: "SS Icons",
    category: "Icon Library",
    icon: "/icon-library-logo.png",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Layers className="w-6 h-6 text-foreground" />
        <h2 className="text-2xl font-semibold font-space-grotesk text-foreground">Stakes</h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card rounded-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0">
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground font-space-grotesk">{skill.name}</h3>
              <p className="text-muted-foreground text-sm">{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
