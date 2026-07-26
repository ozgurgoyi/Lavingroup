'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

// Run before the browser paints on the client so the destination is positioned
// at the top (Hero) in the same frame it mounts — no visible scroll movement.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Module-level trigger so the (universal) logo Home button can start the fade
// from anywhere without prop drilling.
let triggerLogoHome: (() => void) | null = null

/**
 * Universal "logo = Home" navigation.
 * Performs a clean, lightweight opacity fade (NO glassmorphism, blur, or dark
 * overlay), always lands at the very top of the Hero, and never shows any
 * background scrolling. Returns true if the fade handler was ready.
 */
export function goHomeViaLogo() {
  if (triggerLogoHome) {
    triggerLogoHome()
    return true
  }
  return false
}

// Fade budget stays within the requested 350–450ms window.
const FADE_OUT_MS = 160
const FADE_IN_MS = 280

const scrollTop = () =>
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })

// Fade the page content back in, guaranteed to start already positioned at the
// top Hero (re-asserted across two frames to defeat the global smooth-scroll).
function fadeIn() {
  const root = document.body
  scrollTop()
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      scrollTop()
      root.style.transition = `opacity ${FADE_IN_MS}ms ease-in`
      root.style.opacity = '1'
      window.setTimeout(() => {
        root.style.transition = ''
        root.style.opacity = ''
      }, FADE_IN_MS + 40)
    }),
  )
}

/**
 * Mounts the logo-Home fade controller. Renders nothing; it only registers the
 * module-level trigger and reveals the homepage once it has mounted after a
 * cross-route navigation.
 */
export function LogoHomeTransition() {
  const router = useRouter()
  const pathname = usePathname()
  // True while we're waiting for the homepage route to mount after a fade-out
  // that began on a Project Details page.
  const pendingRef = useRef(false)
  // Mirror of Next's *router* pathname (React state). We must NOT read
  // window.location.pathname to decide whether we're on the homepage, because
  // the click handler may rewrite the URL to "/" before this runs — only the
  // router pathname reliably reflects the actually-rendered route.
  const pathnameRef = useRef(pathname)
  pathnameRef.current = pathname

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    triggerLogoHome = () => {
      const onHome = pathnameRef.current === '/'

      // Respect reduced-motion: no fade, just go home and reset to the top.
      if (prefersReduced) {
        if (!onHome) router.push('/', { scroll: false })
        scrollTop()
        return
      }

      // Fade the whole page out — pure opacity, no overlay/blur/tint.
      const root = document.body
      root.style.transition = `opacity ${FADE_OUT_MS}ms ease-out`
      root.style.opacity = '0'

      window.setTimeout(() => {
        if (pathnameRef.current !== '/') {
          // Cross-route: navigate home while invisible; the layout effect below
          // resets scroll and fades back in once the homepage has mounted.
          pendingRef.current = true
          router.push('/', { scroll: false })
        } else {
          // Already on the homepage: clear any section hash, snap to the top
          // (hidden), and fade in.
          if (typeof history !== 'undefined') history.replaceState(null, '', '/')
          scrollTop()
          fadeIn()
        }
      }, FADE_OUT_MS)
    }

    return () => {
      triggerLogoHome = null
    }
  }, [router])

  // Once the homepage has mounted behind the faded-out content, position it at
  // the top before paint, then fade it in already at the Hero.
  useIsomorphicLayoutEffect(() => {
    if (pendingRef.current && pathname === '/') {
      pendingRef.current = false
      scrollTop()
      fadeIn()
    }
  }, [pathname])

  return null
}
