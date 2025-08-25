import { Rocket, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "HelloBot",
    category: "SaaS & Startup",
    pages: "8 Pages",
    image: "/hellobot-saas-dashboard.png",
    link: "https://hellobot.framer.website/",
  },
  {
    title: "Flexisoft",
    category: "SaaS & Startup",
    pages: "6 Pages",
    image: "/flexisoft-software-dashboard.png",
    link: "https://flexisoft.framer.website/",
  },
  {
    title: "Excludia",
    category: "Digital Agency",
    pages: "8 Pages",
    image: "/excludia-digital-agency-website.png",
    link: "https://excludia.framer.website/",
  },
  {
    title: "CryptoraHub",
    category: "Crypto & Web3",
    pages: "7 Pages",
    image: "/crypto-trading-platform-dark.png",
    link: "https://cryptorahub.framer.website/",
  },
]

export function ProjectsSection() {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Rocket className="w-6 h-6 text-white" />
        <h2 className="text-2xl font-semibold font-space-grotesk text-white">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="project-card rounded-xl p-4 block hover:bg-gray-900/50 transition-colors group"
          >
            {/* Project Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            {/* Project Info */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white font-space-grotesk">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{project.category}</span>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <span>{project.pages}</span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 group-hover:bg-gray-700 transition-colors">
                <ExternalLink className="w-6 h-6 text-white arrow-icon" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center pt-8">
        <Button variant="secondary" className="bg-gray-700 text-white hover:bg-gray-600 rounded-lg">
          Load More
        </Button>
      </div>
    </section>
  )
}
