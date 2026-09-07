import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { HowItWorks } from "@/components/how-it-works"
import { SocialProof } from "@/components/social-proof"
import { Faq } from "@/components/faq"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Solutions />
        <HowItWorks />
        <SocialProof />
        <Faq />
        <CtaFooter />
      </main>
    </div>
  )
}
