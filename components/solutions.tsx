"use client"

import { useState } from "react"
import { Zap, Check } from "lucide-react"
import { InView } from "@/components/in-view"

const features = [
  {
    title: "Build the Nova ecosystem",
    body: "Connect components, data, and content in one workspace so your whole team ships from a single source of truth.",
  },
  {
    title: "Effortless to use",
    body: "A visual editor with real guardrails. Drag, drop, and refine — Nova keeps everything responsive and on-brand.",
  },
  {
    title: "Next level of security",
    body: "SSO, granular roles, and audit logs baked in. Your content stays yours, protected end to end.",
  },
]

export function Solutions() {
  const [active, setActive] = useState(1)

  return (
    <section id="solutions" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-28">
        <InView className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Explore the solutions
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Everything you need to design, publish, and grow — without stitching together a
            dozen disconnected tools.
          </p>
        </InView>

        <InView delayMs={150} className="mt-12 grid items-center gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              A powerful suite of tools
            </h3>
            <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
              Purpose-built pieces that work together. Pick a card to see how each part of
              Nova pulls its weight.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8">
              {features.map((feature, i) => {
                const isActive = i === active
                return (
                  <button
                    key={feature.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`flex items-start gap-3.5 rounded-2xl border p-4 text-left transition-all sm:gap-4 sm:p-5 ${
                      isActive
                        ? "border-transparent bg-primary text-primary-foreground shadow-lg"
                        : "border-border bg-card text-foreground hover:border-accent/60"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl sm:h-9 sm:w-9 ${
                        isActive ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
                      }`}
                    >
                      <Zap className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold sm:text-base">{feature.title}</span>
                      <span
                        className={`mt-1 block text-xs leading-relaxed sm:text-sm ${
                          isActive ? "text-primary-foreground/75" : "text-muted-foreground"
                        }`}
                      >
                        {feature.body}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* mock terminal / task panel */}
          <div className="rounded-2xl border border-border bg-primary p-5 text-primary-foreground shadow-xl sm:rounded-[2rem] sm:p-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-primary-foreground/20" />
              <span className="h-3 w-3 rounded-full bg-primary-foreground/20" />
              <span className="h-3 w-3 rounded-full bg-primary-foreground/20" />
              <span className="ml-3 text-xs text-primary-foreground/60">nova_project</span>
            </div>
            <pre className="mt-5 overflow-x-auto rounded-xl bg-primary-foreground/5 p-4 font-mono text-xs leading-relaxed text-accent">
{`$ nova deploy --prod
  ✓ building canvas
  ✓ optimizing assets
  ✓ published to the edge`}
            </pre>
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-card p-3.5 text-card-foreground sm:p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold sm:text-sm">Andrea Voth completed task 1/3</p>
                <p className="text-xs text-muted-foreground">Homepage redesign</p>
              </div>
              <button type="button" className="shrink-0 text-xs font-semibold text-accent-foreground">
                Details
              </button>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <div className="relative grid h-24 w-24 place-items-center rounded-full bg-accent/20 sm:h-28 sm:w-28">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground sm:h-16 sm:w-16">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  )
}
