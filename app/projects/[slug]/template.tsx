'use client'

import { useState } from 'react'

// A route-scoped template re-mounts on every navigation into a Project Details
// page, so the incoming content plays the cinematic `page-enter` animation
// (fade in + gentle upward motion + resolving Gaussian blur). Scoped here so no
// other section of the site is affected.
//
// Once the animation ends we drop the class entirely, leaving a plain wrapper
// with no transform/filter — this guarantees it never establishes a persistent
// containing block for the fixed-position lightbox rendered inside the page.
export default function ProjectDetailTemplate({ children }: { children: React.ReactNode }) {
  const [animating, setAnimating] = useState(true)
  return (
    <div className={animating ? 'page-enter' : undefined} onAnimationEnd={() => setAnimating(false)}>
      {children}
    </div>
  )
}
