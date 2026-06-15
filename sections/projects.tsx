import { Reveal } from "@/components/reveal"
import { SectionHeading, SectionLabel } from "@/components/section-heading"
import { Tag } from "@/components/tag"
import { projects } from "@/lib/content"

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="scroll-mt-24 py-12 lg:py-16"
    >
      <SectionLabel>Projects</SectionLabel>
      <SectionHeading>Projects</SectionHeading>

      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <Reveal as="li" key={project.title}>
            <article className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {project.points.map((point) => (
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
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
