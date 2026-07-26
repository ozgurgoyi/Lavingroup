'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'

// Premium floating "FOLLOW US" panel pinned to the left edge of the Hero.
// Instagram + Facebook only (no LinkedIn per request). It auto-hides once the
// visitor scrolls past the Hero so it never intrudes on the rest of the page.
const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/lavingroup.iq', Icon: InstagramIcon },
  { name: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon },
]

export function HeroSocial() {
  const { t, dir } = useLanguage()
  const isRtl = dir === 'rtl'
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const hero = document.getElementById('home')
    if (!hero) return
    // Show only while a meaningful part of the Hero is on screen; fade out
    // gracefully once the visitor scrolls past it.
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio > 0.3),
      { threshold: [0, 0.3, 0.6, 1] },
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed top-1/2 z-20 -translate-y-[calc(50%+50px)] transition-all duration-500 ease-out ${
        isRtl ? 'right-2 sm:right-6' : 'left-2 sm:left-6'
      } ${
        visible
          ? 'translate-x-0 opacity-100'
          : `pointer-events-none opacity-0 ${isRtl ? 'translate-x-5' : '-translate-x-5'}`
      }`}
    >
      <div className="group/panel flex flex-col items-center gap-2.5 rounded-full border border-gold/15 bg-background/25 px-1 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-500 hover:border-gold/35 hover:bg-background/35 hover:shadow-[0_0_28px_-6px_rgba(212,175,55,0.35)] sm:gap-3 sm:px-2 sm:py-4">
        {/* Top gold accent line */}
        <span className="h-5 w-px bg-gradient-to-b from-transparent to-gold/50 sm:h-6" />

        {/* Vertical FOLLOW US label (reads bottom-to-top) */}
        <span className="rotate-180 text-[9px] font-semibold uppercase tracking-[0.3em] text-foreground/60 transition-colors duration-300 [writing-mode:vertical-rl] group-hover/panel:text-gold-soft sm:text-[10px]">
          {t.hero.follow}
        </span>

        {/* Icons */}
        <div className="flex flex-col items-center gap-2 sm:gap-2.5">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="group/icon flex h-7 w-7 items-center justify-center rounded-full border border-gold/15 bg-foreground/[0.03] text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:text-gold hover:shadow-[0_0_18px_-4px_rgba(212,175,55,0.55)] sm:h-9 sm:w-9"
            >
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          ))}
        </div>

        {/* Bottom gold accent line */}
        <span className="h-5 w-px bg-gradient-to-t from-transparent to-gold/50 sm:h-6" />
      </div>
    </div>
  )
}
