import Link from "next/link"
import { ArrowRight } from "lucide-react"

const footerCols = [
  {
    heading: "Product",
    links: ["Web Studio", "Nova Flex", "Forms", "Integrations", "Command line"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Tutorials & guides", "Blog", "Support center", "Partners"],
  },
  {
    heading: "Company",
    links: ["Home", "About us", "Company values", "Pricing", "Privacy policy"],
  },
]

export function CtaFooter() {
  return (
    <footer className="bg-background">
      {/* CTA / newsletter */}
      <div className="mx-auto max-w-6xl px-5 pt-20 md:pt-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 text-primary-foreground md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-[45%] bg-accent/25 blur-2xl"
          />
          <div className="relative max-w-lg">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Powering your business, wonderfully
            </h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/70">
              Start free and see your first site live today. No credit card required —
              just 7 days to fall in love with it.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your email..."
                className="w-full rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            <p className="mt-3 text-xs text-primary-foreground/50">
              7-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>

      {/* footer links */}
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="Nova home">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground">
                <span className="h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Nova
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The all-in-one platform to design, build, and launch websites that feel
              alive.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-foreground">{col.heading}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Nova. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
