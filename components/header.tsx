"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    const threshold = 80
    lastScrollY.current = window.scrollY || 0

    const onScroll = () => {
      const currentY = window.scrollY || 0
      const delta = currentY - lastScrollY.current

      if (prefersReducedMotion) {
        setHidden(false)
        lastScrollY.current = currentY
        return
      }

      // Always show near the top.
      if (currentY <= threshold) {
        setHidden(false)
        lastScrollY.current = currentY
        return
      }

      // Ignore tiny scroll jitter.
      if (Math.abs(delta) < 6) return

      // Hide on scroll down, show on scroll up.
      setHidden(delta > 0)
      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 will-change-transform transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 lg:px-16 pt-6">
        <div className="rounded-2xl border border-border/60 bg-white/50 dark:bg-white/5 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4">
            <div className="flex items-center justify-between gap-4">
              <a href="#about" className="leading-tight">
                <div className="text-base font-semibold font-space-grotesk text-foreground">Pankaj Singh</div>
                <div className="text-xs text-muted-foreground">Developer • Designer</div>
              </a>
              <div className="sm:hidden">
                <ModeToggle />
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
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

            <div className="hidden sm:flex items-center gap-3">
              <ModeToggle />
              <Button asChild className="btn-primary rounded-lg h-10 px-4 font-medium">
                <a href="#contact">
                  Hire me <ArrowUpRight className="ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
