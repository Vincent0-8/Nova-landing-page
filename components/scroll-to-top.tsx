"use client"

import { useEffect } from "react"

export function ScrollToTopOnRefresh() {
  useEffect(() => {
    // Disable automatic browser scroll restoration on reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    // If there's an anchor hash (e.g. #solutions), clear it back to the root pathname
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname)
    }

    // Instantly reset scroll position to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  return null
}
