"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube, Dribbble, Bean as Behance, Download, MessageCircle } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export function ProfileSidebar() {
  return (
    <div className="profile-card rounded-3xl p-5 max-w-sm mx-auto lg:max-w-none">
      <div className="flex items-center justify-end mb-3">
        <ModeToggle />
      </div>
      {/* Profile Image */}
      <div className="relative h-89 rounded-3xl overflow-hidden mb-5 border border-white/10">
        <Image
          src="/profile.png"
          alt="Pankaj Singh - Modern Developer"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Content */}
      <div className="text-center space-y-5">
        {/* Available Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border/60 text-sm bg-white/5 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-[color:var(--brand)]"></div>
          Available for work
        </div>

        {/* Name */}
        <h2 className="text-2xl font-semibold font-space-grotesk text-foreground">Pankaj Singh</h2>

        {/* Social Links */}
        <div className="flex justify-center gap-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Dribbble className="w-5 h-5" />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Behance className="w-5 h-5" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="rounded-lg h-10 px-6 text-sm font-medium flex items-center gap-1 bg-white text-neutral-800 border border-neutral-200 shadow-sm hover:bg-neutral-100 transition"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Download className="w-5 h-5 mr-1" />
            Download CV
          </a>
          <Button
            className="btn-primary rounded-lg h-10 px-6 text-sm font-medium flex items-center gap-1"
            onClick={() => window.open('tel:+919942193614', '_self')}
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  )
}
