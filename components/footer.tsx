import Image from "next/image"
import { ArrowUpRight, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-10 lg:px-16 py-12">
        <div className="rounded-3xl p-6 lg:p-8 border border-border/60 bg-white/50 dark:bg-white/5 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Identity */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-border/60">
                <Image
                  src="/profile-image.png"
                  alt="Pankaj Kr Singh - Modern Developer"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="text-lg font-semibold font-space-grotesk text-foreground">Pankaj Singh</div>
                <div className="text-sm text-muted-foreground">App Developer • UI/UX Designer</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <Button asChild className="btn-primary rounded-lg h-11 px-5 font-medium">
                <a href="#contact">
                  Let’s work together <ArrowUpRight className="ml-1" />
                </a>
              </Button>
              <Button asChild variant="secondary" className="btn-secondary rounded-lg h-11 px-5">
                <a href="mailto:nrpgroup.pvt@gmail.com">
                  <Mail className="mr-2" /> Email
                </a>
              </Button>
              <Button asChild variant="secondary" className="btn-secondary rounded-lg h-11 px-5">
                <a href="tel:+919942193614">
                  <Phone className="mr-2" /> Call
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-8 h-px bg-border/60" />

          <div className="mt-6 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Quick links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a className="text-muted-foreground hover:text-foreground transition-colors" href="#about">
                About
              </a>
              <a className="text-muted-foreground hover:text-foreground transition-colors" href="#experience">
                Experience
              </a>
              <a className="text-muted-foreground hover:text-foreground transition-colors" href="#projects">
                Projects
              </a>
              <a className="text-muted-foreground hover:text-foreground transition-colors" href="#education">
                Education
              </a>
              <a className="text-muted-foreground hover:text-foreground transition-colors" href="#skills">
                Skills
              </a>
              <a className="text-muted-foreground hover:text-foreground transition-colors" href="#contact">
                Contact
              </a>
            </nav>

            {/* Meta */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} • Built with Next.js
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
