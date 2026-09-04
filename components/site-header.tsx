import Link from "next/link"
import { ArrowRight } from "lucide-react"

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Nova home">
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground">
        <span className="h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">Nova</span>
    </Link>
  )
}

const links = ["Product", "Solutions", "Pricing", "Docs"]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Sign up
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  )
}
