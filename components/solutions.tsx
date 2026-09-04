"use client"

import { useState } from "react"
import { Zap, Check } from "lucide-react"

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
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Explore the solutions
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Everything you need to design, publish, and grow — without stitching together a
            dozen disconnected tools.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground">
              A powerful suite of tools
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
              Purpose-built pieces that work together. Pick a card to see how each part of
              Nova pulls its weight.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {features.map((feature, i) => {
                const isActive = i === active
                return (
                  <button
                    key={feature.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
                      isActive
                        ? "border-transparent bg-primary text-primary-foreground shadow-lg"
                        : "border-border bg-card text-foreground hover:border-accent/60"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
                        isActive ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
                      }`}
                    >
                      <Zap className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold">{feature.title}</span>
                      <span
                        className={`mt-1 block text-sm leading-relaxed ${
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
          <div className="rounded-[2rem] border border-border bg-primary p-6 text-primary-foreground shadow-xl">
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
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-card p-4 text-card-foreground">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold">Andrea Voth completed task 1/3</p>
                <p className="text-xs text-muted-foreground">Homepage redesign</p>
              </div>
              <button type="button" className="text-xs font-semibold text-accent-foreground">
                Details
              </button>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <div className="relative grid h-28 w-28 place-items-center rounded-full bg-accent/20">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Zap className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
