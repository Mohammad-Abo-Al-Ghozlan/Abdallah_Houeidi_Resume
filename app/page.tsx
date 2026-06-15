import { Sidebar } from "@/components/sidebar"
import { About } from "@/sections/about"
import { Experience } from "@/sections/experience"
import { Projects } from "@/sections/projects"
import { Skills } from "@/sections/skills"
import { Certifications } from "@/sections/certifications"
import { Contact } from "@/sections/contact"
import { profile } from "@/lib/content"

export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 sm:px-10">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Sidebar />

        <main className="py-16 lg:py-0">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />

          <footer className="border-t border-border py-10">
            <p className="text-sm text-muted-foreground">
              Designed &amp; built by {profile.name}. Built with Next.js,
              TypeScript, Tailwind CSS, and Framer Motion.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
