import { ProfileSidebar } from "@/components/profile-sidebar"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 p-10 lg:p-16">
          {/* Profile Sidebar */}
          <div className="lg:w-80 lg:sticky lg:top-16 lg:self-start">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 space-y-20">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <SkillsSection />
            <ContactSection />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
