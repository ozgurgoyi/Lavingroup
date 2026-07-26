'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

// Run before the browser paints on the client (so scroll is positioned in the
// same frame the new route mounts — no visible jump), but fall back to a normal
// effect during SSR to avoid the useLayoutEffect warning.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Module-level trigger so any component (e.g. a "Project Details" button, a
// related-project tile, or the "Back to Projects" link) can start the premium
// glass transition without prop drilling.
let triggerTransition:
  | ((href: string, opts?: { restoreHome?: boolean }) => void)
  | null = null

// Where we stash the homepage scroll position so returning lands the visitor
// on the exact project card they came from.
const HOME_SCROLL_KEY = 'lavin-home-scroll'

/**
 * Start the glass transition toward a Project Details page.
 * Records the current homepage scroll position first (only when starting from
 * the homepage) so a later "Back to Projects" can restore it precisely.
 */
export function startPageTransition(href: string) {
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    try {
      sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY))
    } catch {}
  }
  if (triggerTransition) {
    triggerTransition(href)
    return true
  }
  return false
}

/**
 * Start the glass transition back to the homepage, restoring the exact scroll
 * position (the project card the visitor came from) once it mounts.
 */
export function startPageTransitionHome() {
  if (triggerTransition) {
    triggerTransition('/', { restoreHome: true })
    return true
  }
  return false
}

// Half the total transition: glass fades in, navigation happens under it, then
// glass fades away. ~2x this keeps the whole effect within a 400-450ms budget.
const GLASS_MS = 220

/**
 * Premium glassmorphism page transition.
 * 1. Fades a frosted-glass layer (very subtle dark tint + backdrop blur) over
 *    the page.
 * 2. Navigates while it's veiled behind the glass. For a forward navigation the
 *    destination is reset to the hero cover; for a return the recorded homepage
 *    scroll position is restored.
 * 3. Fades the frosted glass away to reveal the destination.
 * Lives in the root layout so it survives the route change.
 */
export function PageTransition() {
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const targetRef = useRef<string | null>(null)
  const restoreHomeRef = useRef(false)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    triggerTransition = (href, opts) => {
      const restoreHome = !!opts?.restoreHome
      targetRef.current = href
      restoreHomeRef.current = restoreHome

      // Respect reduced-motion: navigate instantly. We intentionally do NOT
      // touch scroll on the outgoing page — scrolling while the current page is
      // still mounted would overwrite its position. The destination scroll is
      // handled once the target route has mounted (below).
      if (prefersReduced) {
        // scroll: false — we position the destination ourselves (below) so Next
        // never performs its own visible scroll-to-top.
        router.push(href, { scroll: false })
        return
      }
      setMounted(true)
      // Next frame: fade the frosted glass in.
      requestAnimationFrame(() => requestAnimationFrame(() => setActive(true)))
      // Once the glass has fully veiled the page, push the route. scroll: false
      // hands scroll control to us so the destination is placed before paint
      // (in the layout effect) with no visible jump.
      window.setTimeout(() => {
        router.push(href, { scroll: false })
      }, GLASS_MS)
    }

    return () => {
      triggerTransition = null
    }
  }, [router])

  // When the destination route has mounted behind the glass, position it
  // BEFORE the browser paints (useLayoutEffect), then reveal it. Positioning
  // pre-paint means the destination's very first painted frame is already at
  // the correct scroll position — the visitor never sees any scroll movement.
  useIsomorphicLayoutEffect(() => {
    if (targetRef.current && pathname === targetRef.current) {
      const restoreHome = restoreHomeRef.current
      targetRef.current = null
      restoreHomeRef.current = false

      // The site uses `scroll-behavior: smooth` globally, which would make
      // these programmatic jumps ANIMATE (a visible upward/downward scroll).
      // Force `behavior: 'instant'` so the destination snaps into place in a
      // single frame under the glass — the visitor never sees any movement.
      if (restoreHome) {
        // Returning home: restore the exact scroll position of the card the
        // visitor came from (falls back to the top if none was recorded).
        let y = 0
        try {
          const stored = sessionStorage.getItem(HOME_SCROLL_KEY)
          if (stored != null) y = parseInt(stored, 10) || 0
        } catch {}
        window.scrollTo({ top: y, left: 0, behavior: 'instant' as ScrollBehavior })
      } else {
        // Forward: land on the hero cover.
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
      }

      // Hold the glass one extra frame so the corrected position is guaranteed
      // painted under it, then fade the glass away to reveal the new page.
      const t = window.setTimeout(() => setActive(false), 80)
      return () => window.clearTimeout(t)
    }
  }, [pathname])

  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      onTransitionEnd={() => {
        // After the reveal completes, unmount to stay lightweight.
        if (!active) setMounted(false)
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        // Frosted glass: a very subtle dark overlay (~12% black) + soft blur.
        backgroundColor: 'rgba(4, 6, 12, 0.12)',
        backdropFilter: active ? 'blur(14px) saturate(115%)' : 'blur(0px)',
        WebkitBackdropFilter: active ? 'blur(14px) saturate(115%)' : 'blur(0px)',
        opacity: active ? 1 : 0,
        transition: `opacity ${GLASS_MS}ms cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter ${GLASS_MS}ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter ${GLASS_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        pointerEvents: active ? 'auto' : 'none',
      }}
    />
  )
}
