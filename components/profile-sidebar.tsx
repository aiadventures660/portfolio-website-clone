import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube, Dribbble, Bean as Behance, Download, MessageCircle } from "lucide-react"

export function ProfileSidebar() {
  return (
    <div className="profile-card rounded-3xl p-5 max-w-sm mx-auto lg:max-w-none">
      {/* Profile Image */}
      <div className="relative aspect-square rounded-3xl overflow-hidden mb-5 border border-white/10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cl6KEKFpRiepoMTAZYRysjuDM.jpg-Wm0X5JdlGzJCsqtic9B5tYZjkpBHR4.jpeg"
          alt="Pankaj Singh"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Content */}
      <div className="text-center space-y-5">
        {/* Available Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/12 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Available for work
        </div>

        {/* Name */}
        <h2 className="text-2xl font-semibold font-space-grotesk">Pankaj Singh</h2>

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
        <div className="flex gap-2">
          <Button variant="secondary" className="flex-1 btn-secondary rounded-lg">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <Button className="flex-1 btn-primary rounded-lg hover:bg-green-400">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  )
}
