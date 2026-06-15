import { Award } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading, SectionLabel } from "@/components/section-heading"
import { certifications, languages } from "@/lib/content"

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="scroll-mt-24 py-12 lg:py-16"
    >
      <SectionLabel>Certifications</SectionLabel>
      <SectionHeading>Certifications</SectionHeading>

      <Reveal className="flex flex-col gap-8">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <Award className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{cert}</span>
            </li>
          ))}
        </ul>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
            Languages
          </h3>
          <ul className="flex flex-col gap-2">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-baseline justify-between gap-4 border-b border-border pb-2"
              >
                <span className="font-medium text-foreground">{lang.name}</span>
                <span className="text-sm text-muted-foreground">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
