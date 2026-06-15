import { Mail, Phone, ArrowUpRight } from "lucide-react"
import { LinkedInIcon } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading, SectionLabel } from "@/components/section-heading"
import { profile } from "@/lib/content"

export function Contact() {
  const items = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Mail,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      Icon: Phone,
    },
    {
      label: "LinkedIn",
      value: profile.linkedinLabel,
      href: profile.linkedin,
      Icon: LinkedInIcon,
      external: true,
    },
  ]

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-24 py-12 lg:py-16"
    >
      <SectionLabel>Contact</SectionLabel>
      <SectionHeading>Contact</SectionHeading>

      <Reveal className="flex flex-col gap-6">
        <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          Open to junior IT, networking, and web development opportunities. Feel
          free to reach out — I&apos;d be glad to connect.
        </p>

        <ul className="flex flex-col gap-3">
          {items.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                    <span className="text-foreground">{value}</span>
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
