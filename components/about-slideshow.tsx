'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const SLIDES = [
  {
    src: '/about-slide-1.png',
    alt: 'LAVIN GROUP luxury interior with floating marble staircase and marble feature wall',
  },
  {
    src: '/about-slide-2.png',
    alt: 'LAVIN GROUP luxury living space with floating staircase and floor-to-ceiling city views',
  },
]

// Time each image stays fully visible before crossfading to the next.
const HOLD_MS = 7000
// Duration of the slow, elegant crossfade.
const FADE_MS = 1800

export function AboutSlideshow() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    // Respect reduced-motion: keep the first image static, no auto-advance.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length)
    }, HOLD_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src || "/placeholder.svg"}
          alt={slide.alt}
          fill
          quality={100}
          priority={i === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain transition-opacity ease-in-out"
          style={{
            transitionDuration: `${FADE_MS}ms`,
            opacity: i === active ? 1 : 0,
          }}
        />
      ))}
    </>
  )
}
