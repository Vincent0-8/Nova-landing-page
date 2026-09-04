import { Quote } from "lucide-react"

const brands = ["facebook", "tinder", "airbnb", "HubSpot", "amazon"]

export function SocialProof() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Trusted by over 20,000 teams worldwide
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From scrappy startups to household names, teams rely on Nova to ship websites
            they&apos;re proud of.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-xl font-semibold tracking-tight text-muted-foreground/60"
            >
              {brand}
            </span>
          ))}
        </div>

        <figure className="mx-auto mt-16 max-w-2xl rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm md:p-10">
          <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-foreground">
            <Quote className="h-5 w-5" aria-hidden="true" />
          </span>
          <blockquote className="mt-6 text-balance font-display text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            &ldquo;I love this product and would recommend it to anyone. It could not be
            easier to use, and our sites turn out wonderful. We get nice comments all the
            time.&rdquo;
          </blockquote>
          <figcaption className="mt-6">
            <span className="block font-semibold text-foreground">Darya Finger</span>
            <span className="block text-sm text-muted-foreground">
              CEO &amp; Co-Founder, Dropbox
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
