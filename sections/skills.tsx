import { Reveal } from "@/components/reveal"
import { SectionHeading, SectionLabel } from "@/components/section-heading"
import { Tag } from "@/components/tag"
import { skillGroups } from "@/lib/content"

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-24 py-12 lg:py-16">
      <SectionLabel>Skills</SectionLabel>
      <SectionHeading>Skills</SectionHeading>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Reveal as="div" key={group.label}>
            <div className="h-full rounded-lg border border-border bg-card p-5">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
