"use client"

import { useEffect, useState } from "react"
import { profile, navItems } from "@/lib/content"
import { SocialLinks } from "@/components/social-links"
import { ThemeToggle } from "@/components/theme-toggle"

export function Sidebar() {
  const [active, setActive] = useState<string>(navItems[0].id)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="flex flex-col gap-8 lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:justify-between lg:py-24">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-primary">{profile.role}</p>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
          >
            View work
          </a>
        </div>

        {/* Section navigation (desktop) */}
        <nav aria-label="Section navigation" className="mt-2 hidden lg:block">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-4 py-1"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground/40 group-hover:w-12 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <SocialLinks className="mt-2" />
    </header>
  )
}
