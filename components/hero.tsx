"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight, X, Sparkles } from "lucide-react"

export function Hero() {
  const [showVideoNotice, setShowVideoNotice] = useState(false)

  return (
    <section className="relative overflow-hidden">
      {/* soft rounded blobs — floating gently */}
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-[42%] bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float-reverse pointer-events-none absolute -right-16 top-40 h-60 w-60 rounded-[46%] bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            New — visual editor 2.0 is live
          </span>

          <h1 className="animate-fade-up animation-delay-100 mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Ship websites that
            <br />
            <span className="relative inline-block">
              feel alive
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-10 h-3.5 rounded-full bg-accent/60 sm:h-4 md:h-5 transition-transform duration-500 hover:scale-105"
              />
            </span>
          </h1>

          <p className="animate-fade-up animation-delay-200 mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
            Nova works on every device, so you set it up once and get wonderful results
            forever. Design, build, and launch — all in one place.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
            >
              Start free trial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#solutions"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary sm:w-auto"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Floating Demo Notice Toast */}
        {showVideoNotice && (
          <div className="animate-fade-up fixed bottom-6 left-1/2 z-50 flex max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-card/95 p-4 text-sm text-foreground shadow-2xl backdrop-blur-md">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="flex-1 text-xs sm:text-sm">
              <p className="font-semibold text-foreground">Video walkthrough coming soon!</p>
              <p className="text-muted-foreground">The 2-minute showcase is in production. You can explore the visual canvas in your free trial.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowVideoNotice(false)}
              aria-label="Close notice"
              className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Product canvas — resized to max-w-xl for a balanced, compact presentation */}
        <div className="animate-fade-up animation-delay-400 relative mx-auto mt-10 max-w-xl sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-[0_25px_70px_-25px_rgba(20,25,20,0.2)] transition-all duration-500 hover:shadow-[0_35px_80px_-20px_rgba(20,25,20,0.3)] sm:rounded-[2rem] sm:p-2">
            <Image
              src="/hero-canvas.png"
              alt="Nova visual editor showing a website design canvas with rounded layout blocks"
              width={800}
              height={450}
              priority
              className="h-auto w-full rounded-xl transition-transform duration-700 hover:scale-[1.01] sm:rounded-[1.5rem]"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowVideoNotice(true)}
            className="absolute -bottom-4 left-1/2 inline-flex max-w-[92%] -translate-x-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground shadow-lg transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1/2 hover:shadow-xl sm:-bottom-5 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground sm:h-6 sm:w-6">
              <Play className="h-2.5 w-2.5 fill-current sm:h-3 sm:w-3" aria-hidden="true" />
            </span>
            Watch the full video (2 min)
          </button>
        </div>
      </div>
    </section>
  )
}
