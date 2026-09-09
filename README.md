# Nova — Ship Websites That Feel Alive
# Live Deployment - https://nova-landing-appv1.vercel.app/

A modern, high-performance SaaS landing page for **Nova**, an all-in-one platform to design, build, and launch websites. Built with **Next.js 16 (App Router + Turbopack)**, **Tailwind CSS v4**, **TypeScript**, and native hardware-accelerated animations.

---

## Development Process

This landing page was scaffolded using v0.dev (Vercel) from a design reference, then manually customized. The modifications included tailoring the copy, setting up custom color tokens, defining typography, and refactoring the component structure.

---

## Features

- **Blazing Fast Architecture**: Powered by Next.js 16 with Turbopack for instant static page generation (SSG) and sub-100ms load times.
- **Modern Design System**: Built with Tailwind CSS v4 using fluid typography, balanced whitespace, and an organic warm-light aesthetic.
- **Full responsive pages**: Including mobile, tablet, and desktop devices.

---

## Tech Stack

| Layer               | Technology                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| **Framework**       | [Next.js 16](https://nextjs.org/) (App Router, Turbopack)                                       |
| **Styling**         | [Tailwind CSS v4](https://tailwindcss.com/)                                                     |
| **Language**        | [TypeScript 5](https://www.typescriptlang.org/)                                                 |
| **Icons**           | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| **Analytics**       | [@vercel/analytics](https://vercel.com/analytics)                                               |
| **Package Manager** | [pnpm](https://pnpm.io/)                                                                        |

---

## Project Structure

```text
├── app/
│   ├── [...catchAll]/
│   │   └── page.tsx        # Catch-all redirect to homepage
│   ├── globals.css         # Tailwind v4 theme tokens, layer base & keyframe animations
│   ├── layout.tsx          # Root layout with fonts, metadata, OpenGraph & icons
│   ├── not-found.tsx       # Fallback 404 redirect handler
│   ├── page.tsx            # Home landing page
│   ├── login/page.tsx      # Sign-in authentication page
│   └── signup/page.tsx     # Account registration page
├── components/
│   ├── cta-footer.tsx      # Newsletter subscription card & categorized footer
│   ├── faq.tsx             # Interactive FAQ accordion component
│   ├── hero.tsx            # Hero section with headline, CTA, canvas & notice
│   ├── how-it-works.tsx    # 6-step guided process workflow
│   ├── icons.tsx           # Clean re-exported brand icons (Google, GitHub)
│   ├── in-view.tsx         # Zero-dependency IntersectionObserver scroll reveal
│   ├── nova-logo.tsx       # Custom SVG vector brand mark
│   ├── site-header.tsx     # Sticky header with mobile drawer toggle
│   └── social-proof.tsx    # Trusted brand marquee & customer quote card
├── public/                 # Static assets (favicons, images, vector icons)
└── .vscode/settings.json   # IDE linting configuration for Tailwind CSS v4
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js 18+](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed.


