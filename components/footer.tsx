import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 py-8">
      <div className="max-w-7xl mx-auto px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Profile Image */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
              <Image
                src="/modern-dev-profile.png"
                alt="Pankaj Singh - Modern Developer"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            {/* Signature */}
            <div className="text-gray-400 font-script text-lg">Pankaj Singh</div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <a 
              href="tel:+919942193614" 
              className="text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              +91 9942193614
            </a>
            <div className="text-gray-500 text-sm">Built with ❤️</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
