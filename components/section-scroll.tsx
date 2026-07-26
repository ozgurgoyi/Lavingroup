'use client'

import { useEffect, useRef, useState } from 'react'

// Module-level trigger so the navbar (desktop + mobile) can start the premium
// glass scroll without prop drilling.
let triggerScroll: ((hash: string) => void) | null = null

/**
 * Smoothly scroll to an in-page section (e.g. "#about") behind a very subtle
 * frosted-glass overlay. Returns true if the transition was handled so callers
 * can prevent the browser's default instant jump.
 */
export function startSectionScroll(hash: string) {
  if (triggerScroll) {
    triggerScroll(hash)
    return true
  }
  return false
}

// Total movement budget (glass fades in, scroll eases to the section, glass
// fades away) — kept within a premium, lightweight 500-700ms window.
const SCROLL_MS = 620
const GLASS_FADE_MS = 200

// easeInOutCubic — elegant acceleration then gentle settle.
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export function SectionScroll() {
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(false)
  const rafRef = useRef<number | null>(null)
  const timersRef = useRef<number[]>([])

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const clearTimers = () => {
      timersRef.current.forEach((id) => window.clearTimeout(id))
      timersRef.current = []
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    triggerScroll = (hash) => {
      const id = hash.replace(/^#/, '')
      const el = document.getElementById(id)
      if (!el) return

      // Native anchors land the section at the very top of the viewport; match
      // that exactly so nothing about the resting position changes.
      const targetY = Math.max(
        0,
        Math.round(el.getBoundingClientRect().top + window.scrollY),
      )

      // Respect reduced-motion: jump straight there with no glass/animation.
      if (prefersReduced) {
        window.scrollTo({ top: targetY, left: 0, behavior: 'instant' as ScrollBehavior })
        return
      }

      clearTimers()
      const startY = window.scrollY

      // Already at the section — nothing to animate.
      if (Math.abs(targetY - startY) < 2) return

      // Mount + fade the frosted glass in.
      setMounted(true)
      requestAnimationFrame(() => requestAnimationFrame(() => setActive(true)))

      // Drive the scroll ourselves (the site uses global smooth-scroll; a
      // manual rAF tween gives us a known duration and easing under the glass).
      // We RE-READ the section's live position every frame so lazy-loaded
      // images shifting the layout can't leave us short — the tween continuously
      // re-aims at the moving target, exactly like a native anchor jump.
      const startTime = performance.now()
      const step = (now: number) => {
        const elapsed = now - startTime
        const p = Math.min(1, elapsed / SCROLL_MS)
        const liveTarget = Math.max(
          0,
          Math.round(el.getBoundingClientRect().top + window.scrollY),
        )
        const eased = easeInOutCubic(p)
        const y = startY + (liveTarget - startY) * eased
        window.scrollTo(0, y)
        if (p < 1) {
          rafRef.current = requestAnimationFrame(step)
        } else {
          rafRef.current = null
          settle(performance.now(), 0)
        }
      }

      // Settle phase: lazy-loaded images can keep shifting layout for a few
      // frames after the tween ends. Keep snapping to the live target until it
      // holds steady across consecutive frames (or a short cap elapses) — all
      // while the glass is still up, so the correction is never seen.
      const SETTLE_CAP_MS = 360
      const settle = (settleStart: number, stableFrames: number) => {
        const finalY = Math.max(
          0,
          Math.round(el.getBoundingClientRect().top + window.scrollY),
        )
        const done = Math.abs(finalY - window.scrollY) < 2
        window.scrollTo(0, finalY)
        const elapsed = performance.now() - settleStart
        if ((done && stableFrames >= 2) || elapsed > SETTLE_CAP_MS) {
          // Section reached and stable — fade the glass away, then unmount.
          setActive(false)
          return
        }
        rafRef.current = requestAnimationFrame(() =>
          settle(settleStart, done ? stableFrames + 1 : 0),
        )
      }

      rafRef.current = requestAnimationFrame(step)
    }

    return () => {
      clearTimers()
      triggerScroll = null
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      onTransitionEnd={() => {
        if (!active) setMounted(false)
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        // Frosted glass: a very subtle dark tint + soft blur, matching the
        // page-transition treatment used elsewhere on the site.
        backgroundColor: 'rgba(4, 6, 12, 0.1)',
        backdropFilter: active ? 'blur(10px) saturate(115%)' : 'blur(0px)',
        WebkitBackdropFilter: active ? 'blur(10px) saturate(115%)' : 'blur(0px)',
        opacity: active ? 1 : 0,
        transition: `opacity ${GLASS_FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter ${GLASS_FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter ${GLASS_FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        // Never block interaction with the page underneath.
        pointerEvents: 'none',
      }}
    />
  )
}
