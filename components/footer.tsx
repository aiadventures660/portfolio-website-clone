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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2842%29-YC8qEQrRfMvYbVAsTxuDYpDGr2uMa4.png"
                alt="Pankaj Singh"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            {/* Signature */}
            <div className="text-gray-400 font-script text-lg">John Anderson</div>
          </div>

          {/* Built with Framer */}
          <div className="text-gray-500 text-sm">Built with ❤️</div>
        </div>
      </div>
    </footer>
  )
}
