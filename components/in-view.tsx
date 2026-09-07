"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface InViewProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function InView({ children, className = "", delayMs = 0 }: InViewProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (domRef.current) observer.unobserve(domRef.current)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    )

    const currentDom = domRef.current
    if (currentDom) {
      observer.observe(currentDom)
    }

    return () => {
      if (currentDom) observer.unobserve(currentDom)
    }
  }, [])

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  )
}
