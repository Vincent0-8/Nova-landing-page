import type { SVGProps } from "react"

/** Nova icon mark: dark bg + green N letterform */
export function NovaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect width="32" height="32" rx="7" fill="oklch(0.2 0.018 260)" />
      <path
        d="M6 26V6h4l12 14.5V6h4v20h-4L10 11.5V26H6z"
        fill="oklch(0.87 0.19 128)"
      />
    </svg>
  )
}

export function NovaWordmark({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className ?? ""}`}>
      <NovaIcon className="h-8 w-8" />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Nova
      </span>
    </span>
  )
}