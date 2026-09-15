"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again.")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-3.5 text-sm font-medium text-primary-foreground">
        <CheckCircle className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
        You are in! We will keep you posted.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email..."
        disabled={status === "loading"}
        className="w-full rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Subscribe
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
      {errorMsg && (
        <p className="text-xs text-red-300 sm:col-span-2">{errorMsg}</p>
      )}
    </form>
  )
}