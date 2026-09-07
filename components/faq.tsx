"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { InView } from "@/components/in-view"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "How does the 7-day free trial work?",
    answer:
      "You get full access to all visual editor features, component libraries, and global edge deployments for 7 days. No credit card is required to create your account.",
  },
  {
    question: "Can I connect my own custom domain?",
    answer:
      "Yes. You can connect any custom domain with automatic SSL certificates and global CDN caching included at no extra charge.",
  },
  {
    question: "Can I export clean code or host anywhere?",
    answer:
      "Yes. Nova exports clean, maintainable Next.js and standard CSS whenever you want, so you are never locked into our hosting infrastructure.",
  },
  {
    question: "Is Nova suitable for non-technical team members?",
    answer:
      "Nova was built specifically for cross-functional teams. Designers and marketers can adjust layouts and copy visually, while engineers maintain design tokens and custom components.",
  },
  {
    question: "How does team collaboration work?",
    answer:
      "Your team shares a single source of truth. Multiple editors can collaborate concurrently with granular role permissions and shareable staging preview links.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="border-t border-border bg-background">
      <div className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <InView className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground">
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything you need to know
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Have questions about Nova? Here are common answers about our platform, trials, and workflows.
          </p>
        </InView>

        <InView delayMs={150} className="mt-12 flex flex-col gap-3 sm:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/60"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                >
                  <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                {isOpen && (
                  <div className="animate-fade-up px-5 pb-5 pt-0 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </InView>
      </div>
    </section>
  )
}
