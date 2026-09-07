import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { NovaIcon } from "@/components/nova-logo"
import { InView } from "@/components/in-view"

const footerCols = [
  {
    heading: "Product",
    links: ["Web Studio", "Nova Flex", "Forms", "Integrations", "Command line"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Tutorials & guides", "Blog", "FAQ", "Partners"],
  },
  {
    heading: "Company",
    links: ["Home", "About us", "Company values", "Pricing", "Privacy policy"],
  },
]

export function CtaFooter() {
  return (
    <footer className="border border-y bg-secondary/40">
      {/* CTA / newsletter */}
      <div className="mx-auto max-w-6xl px-5 pt-16 md:pt-28">
        <InView>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-10 text-primary-foreground shadow-2xl transition-all duration-300 hover:shadow-[0_35px_80px_-20px_rgba(20,25,20,0.3)] sm:rounded-[2.5rem] sm:px-10 sm:py-14 md:px-14 md:py-16">
            <div
              aria-hidden="true"
              className="animate-float-slow pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-[45%] bg-accent/25 blur-3xl"
            />
            <div className="relative max-w-lg">
            <h2 className="text-balance font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Powering your business, wonderfully
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              Start free and see your first site live today. No credit card required —
              just 7 days to fall in love with it.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Your email..."
                className="w-full rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex w-full shrink-0 items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
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
      </InView>
    </div>

      {/* footer links */}
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label="Nova home">
              <NovaIcon className="h-8 w-8" />
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Nova
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground sm:mt-4">
              The all-in-one platform to design, build, and launch websites that feel alive.
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-foreground">{col.heading}</h3>
              <ul className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:mt-14 sm:flex-row sm:pt-8 sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Vincent. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-foreground">Terms</Link>
            <Link href="#" className="transition-colors hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}