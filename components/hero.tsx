import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft rounded blobs — the shape signature, kept quiet */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-[42%] bg-accent/25 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-40 h-52 w-52 rounded-[46%] bg-primary/5 blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            New — visual editor 2.0 is live
          </span>
          <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Ship websites that
            <br />
            <span className="relative inline-block">
              feel alive
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-10 h-4 rounded-full bg-accent/60 md:h-5"
              />
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Nova works on every device, so you set it up once and get wonderful results
            forever. Design, build, and launch — all in one place.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Start free trial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* product canvas */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-[0_30px_80px_-30px_rgba(20,25,20,0.25)]">
            <Image
              src="/hero-canvas.png"
              alt="Nova visual editor showing a website design canvas with rounded layout blocks"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
          <Link
            href="#"
            className="absolute -bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-lg transition-transform hover:-translate-y-0.5 hover:-translate-x-1/2"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground">
              <Play className="h-3 w-3 fill-current" aria-hidden="true" />
            </span>
            Watch the full video (2 min)
          </Link>
        </div>
      </div>
    </section>
  )
}
