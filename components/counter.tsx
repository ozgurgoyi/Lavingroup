'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function Counter({
  value,
  suffix,
  className,
}: {
  value: number
  suffix: string
  className?: string
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1800
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={cn('gold-text font-serif font-bold', className)}>
      {display}
      {suffix}
    </span>
  )
}
