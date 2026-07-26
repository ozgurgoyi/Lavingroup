'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

// Timing (total 1.65s premium opening):
//   logo + tagline are fully in by ~1.15s, held to 1.25s, then a smooth 400ms
//   fade into the homepage = 1650ms total.
const HOLD_MS = 1250 // time until the fade-out begins (logo/text fully visible)
const FADE_MS = 400 // smooth fade-out into the homepage

export function SplashScreen() {
  const router = useRouter()
  const pathname = usePathname()
  const [active, setActive] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // The inline script in the document head adds `splash-active` before paint
    // on every full document load (initial visit + refresh). If it isn't there,
    // this is a client-side navigation, so we render nothing.
    if (!document.documentElement.classList.contains('splash-active')) return

    // A refresh must ALWAYS end on the homepage Hero — never on the previous
    // Project Details page or section. This component lives in the root layout,
    // so it stays mounted across the client navigation below; the full-screen
    // splash overlay covers everything meanwhile, so the project → homepage
    // swap happens completely hidden (no background scrolling or page movement).
    if (pathname !== '/') {
      router.replace('/', { scroll: false })
    }

    // Guarantee the visitor starts at the very top of the Hero after a refresh
    // (defeats the browser's hash jump / any restored scroll while the splash
    // covers the screen).
    window.scrollTo(0, 0)

    setActive(true)

    const fadeTimer = window.setTimeout(() => {
      setFading(true)
      document.documentElement.classList.add('splash-fading')
    }, HOLD_MS)

    const doneTimer = window.setTimeout(() => {
      // Re-assert the top position right before revealing, so the Hero is the
      // first thing the visitor sees once the splash clears.
      window.scrollTo(0, 0)
      setActive(false)
      document.documentElement.classList.remove('splash-active', 'splash-fading')
    }, HOLD_MS + FADE_MS)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(doneTimer)
    }
  }, [])

  if (!active) return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        // True fullscreen on every device: pin to all edges and fill the
        // dynamic viewport so mobile browser chrome never leaves a strip at the
        // top/bottom. We drop the old fixed `height: 100vh` (which on iOS maps
        // to the LARGE viewport and left a bottom gap) in favour of pinning
        // bottom: 0 plus min-height: 100svh/100dvh so the frosted background
        // always extends behind the iPhone bottom bar / safe area.
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        // 100% (not 100vw) so Android never counts the scrollbar gutter and
        // leaves a black strip / horizontal shift on the right. The element is
        // already pinned to all four edges, so 100% fills the viewport exactly.
        width: '100%',
        minHeight: '100svh',
        // dvh follows the visible viewport as the browser chrome shows/hides;
        // it overrides svh in browsers that support it (older ones keep svh).
        height: '100dvh',
        // The frosted background paints edge-to-edge (including behind notches
        // and the home indicator); the safe-area padding only insets the
        // content so the logo/text stay clear of them.
        paddingTop: 'env(safe-area-inset-top)',
        paddingRight: 'env(safe-area-inset-right)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        // Premium frosted glass: subtle diagonal reflection sheen, a faint warm
        // gold glow at the top, over a dark translucent base (not plain black).
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 42%), radial-gradient(130% 90% at 50% -10%, rgba(212,175,55,0.06), transparent 55%), linear-gradient(180deg, rgba(10,14,24,0.72), rgba(6,9,17,0.82))',
        backdropFilter: 'blur(24px) saturate(125%)',
        WebkitBackdropFilter: 'blur(24px) saturate(125%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      <Image
        src="/lavin-emblem.webp"
        alt="Lavin Group"
        width={367}
        height={600}
        priority
        className="splash-emblem h-36 w-auto object-contain sm:h-44"
      />

      <span
        className="splash-wordmark mt-6 font-sans text-sm font-semibold uppercase text-foreground sm:text-base"
        style={{ letterSpacing: '0.36em', textIndent: '0.36em' }}
      >
        Lavin Group
      </span>

      <span
        className="splash-tagline mt-2 font-sans text-[10px] uppercase text-muted-foreground sm:text-xs"
        style={{ letterSpacing: '0.3em', textIndent: '0.3em' }}
      >
        Building Iraq&apos;s Future
      </span>

      <span className="mt-7 block h-px w-40 overflow-hidden bg-white/10">
        <span className="splash-loadbar block h-full w-full gold-line" />
      </span>
    </div>
  )
}
