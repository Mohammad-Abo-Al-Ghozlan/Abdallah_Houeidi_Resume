export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-foreground lg:hidden">
      {children}
    </h2>
  )
}

// Sticky label shown on large screens at the top of each section block.
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-10 -mx-6 mb-4 hidden bg-background/80 px-6 py-4 backdrop-blur lg:block">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {children}
      </h2>
    </div>
  )
}
