export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium text-accent-foreground">
      {children}
    </span>
  )
}
