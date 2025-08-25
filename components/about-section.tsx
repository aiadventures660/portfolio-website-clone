"use client"

import { TypingAnimation } from "./typing-animation"

export function AboutSection() {
  return (
    <section id="about" className="space-y-8">
      {/* Greeting */}
      <div className="space-y-5">
        <p className="text-xl font-space-grotesk text-gray-400">👋 Say Hello</p>

        {/* Name and Title */}
        <div className="space-y-2">
          <h1 className="text-4xl lg:text-5xl font-medium font-space-grotesk">I'm Pankaj Singh,</h1>
          <div className="text-4xl lg:text-5xl font-medium font-space-grotesk min-h-[60px] lg:min-h-[72px] flex items-center">
            <TypingAnimation
              words={["App Developer", "Web Developer", "Graphic Designer", "UI/UX Designer"]}
              typingSpeed={150}
              deletingSpeed={100}
              pauseDuration={2000}
              fontSize={48}
              fontWeight="500"
              textColor="#28e98c"
              cursorColor="#28e98c"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium font-space-grotesk">Based in JH03,INDIA.</h1>
        </div>

        {/* Description */}
        <p className="text-white/90 leading-relaxed max-w-3xl">
          I specialize in creating clean, user-friendly digital experiences by blending creativity with functionality.
          With a strong background in interactive design, I focus on crafting designs that not only look great but also
          provide smooth and engaging user interactions, helping ideas come to life seamlessly.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-3xl font-semibold font-space-grotesk text-white mb-2">30+</div>
          <div className="text-gray-400 text-sm">Completed Projects</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-semibold font-space-grotesk text-white mb-2">8+</div>
          <div className="text-gray-400 text-sm">Years of Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-semibold font-space-grotesk text-white mb-2">36+</div>
          <div className="text-gray-400 text-sm">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-semibold font-space-grotesk text-white mb-2">10+</div>
          <div className="text-gray-400 text-sm">Awards Received</div>
        </div>
      </div>
    </section>
  )
}
