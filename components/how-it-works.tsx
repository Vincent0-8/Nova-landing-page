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

export function HowItWorks() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How Nova works
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A calm, guided path from first idea to a live website — every stage handled in
            one place.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform group-hover:scale-105">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
