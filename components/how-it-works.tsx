import {
  Sparkles,
  Compass,
  FileSignature,
  Rocket,
  PenTool,
  Send,
} from "lucide-react"

const steps = [
  {
    icon: Sparkles,
    title: "Initial contact",
    body: "Tell us about your goals and we shape a workspace tuned to your brand.",
  },
  {
    icon: Compass,
    title: "Discovery session",
    body: "We map your content, audience, and structure into a clear plan.",
  },
  {
    icon: FileSignature,
    title: "Contracting",
    body: "Transparent scope, no surprises. Sign and get moving in minutes.",
  },
  {
    icon: Rocket,
    title: "Fast prototyping",
    body: "See a live, clickable draft fast — then refine it together.",
  },
  {
    icon: PenTool,
    title: "Design phase",
    body: "Polish every detail with the visual editor and shared components.",
  },
  {
    icon: Send,
    title: "Develop & launch",
    body: "Ship to a global edge network with one click and monitor from day one.",
  },
]

import { InView } from "@/components/in-view"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-28">
        <InView className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How Nova works
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            A calm, guided path from first idea to a live website — every stage handled in
            one place.
          </p>
        </InView>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <InView
              key={step.title}
              delayMs={i * 90}
              className="h-full"
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl sm:rounded-3xl sm:p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 sm:rounded-2xl">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground sm:mt-5 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                  {step.body}
                </p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  )
}
