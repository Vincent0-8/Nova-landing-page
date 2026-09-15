import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nova -- Ship websites that feel alive",
  description:
    "Nova is the all-in-one platform to design, build, and launch beautiful websites that work everywhere. Set it up once, get wonderful results forever.",
  metadataBase: new URL("https://nova-landing-appv1.vercel.app"),
  openGraph: {
    title: "Nova -- Ship websites that feel alive",
    description:
      "Nova is the all-in-one platform to design, build, and launch beautiful websites that work everywhere.",
    url: "https://nova-landing-appv1.vercel.app",
    siteName: "Nova",
    images: [
      {
        url: "/hero-canvas.png",
        width: 1600,
        height: 1000,
        alt: "Nova visual editor showing a website design canvas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova -- Ship websites that feel alive",
    description:
      "The all-in-one platform to design, build, and launch websites that feel alive.",
    images: ["/hero-canvas.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f8f6",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}