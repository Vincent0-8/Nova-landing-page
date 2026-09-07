import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { NovaIcon } from "@/components/nova-logo"
import { GoogleIcon, GitHubIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Sign in — Nova",
  description: "Sign in to your Nova account and start building websites that feel alive.",
}

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Minimal auth nav */}
      <header className="flex h-16 items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-2" aria-label="Nova home">
          <NovaIcon className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">Nova</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to home
        </Link>
      </header>

      {/* Ambient blobs */}
      <div aria-hidden="true" className="animate-float-slow pointer-events-none fixed -left-24 top-24 h-72 w-72 rounded-[42%] bg-accent/20 blur-3xl" />
      <div aria-hidden="true" className="animate-float-reverse pointer-events-none fixed -right-16 bottom-24 h-56 w-56 rounded-[46%] bg-primary/5 blur-3xl" />

      {/* Centered form */}
      <div className="relative flex flex-1 items-center justify-center px-4 py-8 sm:px-5 sm:py-10">
        <div className="w-full max-w-md">
          <div className="animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-[0_30px_80px_-30px_rgba(20,25,20,0.12)] transition-shadow duration-300 hover:shadow-[0_35px_90px_-25px_rgba(20,25,20,0.18)] sm:rounded-[2rem] sm:p-8 md:p-10">
            <h1 className="font-display text-2xl font-semibold text-foreground">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to continue to your workspace</p>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
              <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-sm">
                <GoogleIcon className="h-4 w-4 shrink-0" />
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-sm">
                <GitHubIcon className="h-4 w-4 shrink-0" />
                GitHub
              </button>
            </div>

            <div className="relative my-5 sm:my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center"><span className="bg-card px-3 text-xs text-muted-foreground">or continue with email</span></div>
            </div>

            <form className="flex flex-col gap-4 sm:gap-5">
              <div>
                <label htmlFor="login-email" className="mb-1.5 block text-xs font-medium text-foreground sm:text-sm">Email</label>
                <input id="login-email" type="email" required autoComplete="email" placeholder="you@example.com" className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:rounded-2xl sm:px-4 sm:py-3" />
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label htmlFor="login-password" className="block text-xs font-medium text-foreground sm:text-sm">Password</label>
                  <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Forgot password?</Link>
                </div>
                <input id="login-password" type="password" required autoComplete="current-password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:rounded-2xl sm:px-4 sm:py-3" />
              </div>
              <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Sign in
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-foreground transition-colors hover:text-primary">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  )
}