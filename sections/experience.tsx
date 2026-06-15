import { Reveal } from "@/components/reveal"
import { SectionHeading, SectionLabel } from "@/components/section-heading"
import { experience } from "@/lib/content"

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="scroll-mt-24 py-12 lg:py-16"
    >
      <SectionLabel>Experience</SectionLabel>
      <SectionHeading>Experience</SectionHeading>

      <ul className="flex flex-col gap-8">
        {experience.map((job) => (
          <Reveal as="li" key={`${job.company}-${job.role}`}>
            <div className="group rounded-lg border border-transparent p-5 transition-colors hover:border-border hover:bg-card">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {job.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {job.role}
                <span className="text-primary"> · {job.company}</span>
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-6 text-pretty leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-primary"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
