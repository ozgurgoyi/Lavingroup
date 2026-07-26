'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function ScrollToTop() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Smoothly scroll up by ~one viewport with a premium easing curve (~700ms).
  const handleClick = () => {
    if (typeof window === 'undefined') return

    const startY = window.scrollY
    const targetY = Math.max(0, startY - Math.round(window.innerHeight * 0.9))
    if (Math.abs(targetY - startY) < 2) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      window.scrollTo(0, targetY)
      return
    }

    // easeInOutCubic — smooth acceleration then a gentle settle.
    const easeInOutCubic = (p: number) =>
      p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2

    const DURATION = 700
    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION)
      window.scrollTo(0, startY + (targetY - startY) * easeInOutCubic(p))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return (
    <div
      className={`fixed end-5 top-1/2 z-50 -translate-y-1/2 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="animate-float-subtle">
        <button
          type="button"
          onClick={handleClick}
          aria-label={t.scrollTop}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-white/5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.04] hover:border-gold/70 hover:bg-white/10 hover:backdrop-blur-2xl hover:shadow-[0_0_38px_-2px_rgba(212,175,55,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 active:scale-[1.02] sm:h-14 sm:w-14"
        >
          <ChevronUp className="h-5 w-5 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>
  )
}
