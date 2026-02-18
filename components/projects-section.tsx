import { Rocket, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
    {
      title: "BrandForge AI",
      category: "Android App",
      pages: "Play Store",
      image: "/icplaystore.png",
      link: "https://play.google.com/store/apps/details?id=com.nameforgeai.brand",
    },
    {
      title: "ReelGrabber",
      category: "Web App",
      pages: "Website",
      image: "/reelgraber.png",
      link: "https://reelgrabber.app/",
    },
    {
      title: "Bio Generator",
      category: "Web App",
      pages: "Website",
      image: "/bio.png",
      link: "https://biogenerator.info/",
    },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Rocket className="w-6 h-6 text-foreground" />
        <h2 className="text-2xl font-semibold font-space-grotesk text-foreground">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="project-card rounded-xl p-4 block transition-colors group">
            {/* Project Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative bg-[#181c2f] flex items-center justify-center">
              {project.title === "BrandForge AI" ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain w-full h-full"
                />
              ) : (
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              )}
            </div>

            {/* Project Info */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-foreground font-space-grotesk">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{project.category}</span>
                  <div className="w-1 h-1 bg-muted-foreground/40 rounded-full"></div>
                  <span>{project.pages}</span>
                </div>
              </div>
              {/* Only show external link for non-BrandForge projects */}
              {project.title !== "BrandForge AI" && project.title !== "ReelGrabber" && project.title !== "Bio Generator" && (
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md group-hover:bg-white/10 transition-colors">
                  <ExternalLink className="w-6 h-6 text-white arrow-icon" />
                </div>
              )}
            </div>

            {/* Install Button for BrandForge AI */}
            {project.title === "BrandForge AI" && (
              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block rounded-2xl py-3 font-semibold text-neutral-800 bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 transition-all text-center border border-white/30"
                  style={{ boxShadow: '0 8px 24px 0 rgba(0,0,0,0.10)' }}
                >
                  Install
                </a>
              </div>
            )}

            {/* View Button for ReelGrabber */}
            {project.title === "ReelGrabber" && (
              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block rounded-2xl py-3 font-semibold text-neutral-800 bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 transition-all text-center border border-white/30"
                  style={{ boxShadow: '0 8px 24px 0 rgba(0,0,0,0.10)' }}
                >
                  View
                </a>
              </div>
            )}
            {project.title === "Bio Generator" && (
              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block rounded-2xl py-3 font-semibold text-neutral-800 bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 transition-all text-center border border-white/30"
                  style={{ boxShadow: '0 8px 24px 0 rgba(0,0,0,0.10)' }}
                >
                  View
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center pt-8">
        <Button variant="secondary" className="btn-secondary rounded-lg">
          Load More
        </Button>
      </div>
    </section>
  )
}
