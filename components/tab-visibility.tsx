"use client"

import { useEffect } from "react"

export default function TabVisibilityTitle() {
  useEffect(() => {
    const originalTitle = document.title

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "We are already missing you"
      } else {
        document.title = originalTitle
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return null
}