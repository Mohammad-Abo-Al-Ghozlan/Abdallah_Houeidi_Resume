import { Mail, Phone } from "lucide-react"
import { LinkedInIcon } from "@/components/icons"
import { profile } from "@/lib/content"

export function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
    { href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone", Icon: Phone },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  ]

  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {links.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="block text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
