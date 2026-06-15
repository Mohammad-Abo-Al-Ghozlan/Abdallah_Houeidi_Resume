import { Reveal } from "@/components/reveal"
import { SectionHeading, SectionLabel } from "@/components/section-heading"
import { summary, education } from "@/lib/content"

export function About() {
  return (
    <section id="about" aria-label="About" className="scroll-mt-24 py-12 lg:py-16">
      <SectionLabel>About</SectionLabel>
      <SectionHeading>About</SectionHeading>

      <Reveal className="flex flex-col gap-6">
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {summary}
        </p>

        <div className="mt-2">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
            Education
          </h3>
          <ul className="flex flex-col gap-4">
            {education.map((edu) => (
              <li
                key={edu.school}
                className="rounded-lg border border-border bg-card p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium text-foreground">{edu.school}</p>
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {edu.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.credential}
                  {edu.location ? ` · ${edu.location}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
