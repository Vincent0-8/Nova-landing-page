import { Quote } from "lucide-react"
import { InView } from "@/components/in-view"

const brands = ["facebook", "tinder", "airbnb", "HubSpot", "amazon"]

export function SocialProof() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-28">
        <InView className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Trusted by over 20,000 teams worldwide
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            From scrappy startups to household names, teams rely on Nova to ship websites
            they&apos;re proud of.
          </p>
        </InView>

        <InView delayMs={100} className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:mt-12 sm:gap-x-10 sm:gap-y-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg font-semibold tracking-tight text-muted-foreground/60 transition-colors duration-200 hover:text-foreground sm:text-xl"
            >
              {brand}
            </span>
          ))}
        </InView>

        <InView delayMs={200}>
          <figure className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md sm:mt-16 sm:rounded-[2rem] sm:p-8 md:p-10">
            <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground shadow-sm sm:h-11 sm:w-11">
              <Quote className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </span>
            <blockquote className="mt-5 text-balance font-display text-lg font-medium leading-relaxed text-foreground sm:mt-6 sm:text-xl md:text-2xl">
              &ldquo;I love this product and would recommend it to anyone. It could not be
              easier to use, and our sites turn out wonderful. We get nice comments all the
              time.&rdquo;
            </blockquote>
            <figcaption className="mt-5 sm:mt-6">
              <span className="block text-sm font-semibold text-foreground sm:text-base">Darya Finger</span>
              <span className="block text-xs text-muted-foreground sm:text-sm">
                CEO &amp; Co-Founder, Dropbox
              </span>
            </figcaption>
          </figure>
        </InView>
      </div>
    </section>
  )
}
