'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronDown, ShieldCheck, Building2, Users, Handshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Counter } from '@/components/counter'
import { HeroSocial } from '@/components/hero-social'
import { startSectionScroll } from '@/components/section-scroll'

// Premium tactile CTA: a subtle gold "glass ripple" from the tap point, a
// press-scale to 97% (handled by the caller's `active:scale-[0.97]`), and the
// same frosted-glass cinematic scroll used across the site. Content is wrapped
// so it always sits above the ripple layer.
function HeroCtaButton({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: React.ReactNode
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Gold glass ripple emanating from the exact click / tap point.
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const ripple = document.createElement('span')
    ripple.style.cssText = `position:absolute;z-index:0;border-radius:9999px;pointer-events:none;width:${size}px;height:${size}px;left:${
      e.clientX - rect.left - size / 2
    }px;top:${
      e.clientY - rect.top - size / 2
    }px;background:radial-gradient(circle, rgba(212,175,55,0.35), rgba(255,255,255,0.12) 55%, transparent 70%);`
    btn.appendChild(ripple)
    ripple
      .animate(
        [
          { transform: 'scale(0)', opacity: 0.6 },
          { transform: 'scale(1)', opacity: 0 },
        ],
        { duration: 500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
      )
      .addEventListener('finish', () => ripple.remove())

    // Hand off to the shared frosted-glass cinematic scroll (smooth, never an
    // instant jump). Falls back to the native anchor if it isn't ready.
    if (href.startsWith('#') && startSectionScroll(href)) {
      e.preventDefault()
      // Reflect the section in the URL without adding a history entry, so the
      // browser Back/Forward buttons keep their normal default behavior.
      if (typeof history !== 'undefined') history.replaceState(null, '', href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      <span className="relative z-[1] inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </a>
  )
}

// Icons are matched to the four stats by their fixed order in the dictionary:
// Years of Experience · Completed & Ongoing Projects · Skilled Workers · Client Commitment
const statIcons: LucideIcon[] = [ShieldCheck, Building2, Users, Handshake]

export function Hero() {
  const { t, lang } = useLanguage()

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-baghdad.webp"
          alt="Baghdad skyline at night with construction cranes"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/45 to-background" />
        <div className="absolute inset-0 bg-background/25" />
      </div>

      {/* Floating social panel - left edge, auto-hides past the Hero */}
      <HeroSocial />

      {/* Center content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 pt-28 pb-10 text-center sm:px-6">
        <div className="flex w-full max-w-3xl flex-col items-center">
          <span
            className={`glass-identity inline-flex max-w-[calc(100vw-2.5rem)] animate-[fadeIn_1s_ease] flex-wrap items-center justify-center gap-y-1 rounded-[9999px] px-5 py-1.5 font-medium leading-none text-warm-white sm:px-7 sm:py-2 lg:px-8 ${
              lang === 'ar'
                ? 'gap-x-2.5 text-[0.7rem] tracking-normal sm:gap-x-3 sm:text-xs lg:text-[0.82rem]'
                : 'gap-x-2 text-[0.6rem] uppercase tracking-[0.12em] sm:gap-x-2.5 sm:text-[0.68rem] sm:tracking-[0.2em] lg:text-[0.74rem] lg:tracking-[0.22em]'
            }`}
          >
            {t.hero.badge.map((segment, i) => (
              <Fragment key={segment}>
                {i > 0 && (
                  <span aria-hidden="true" className="h-[3px] w-[3px] shrink-0 rounded-full bg-gold" />
                )}
                <span className="whitespace-nowrap">{segment}</span>
              </Fragment>
            ))}
          </span>

          <div className="mt-8 flex animate-[fadeIn_1.2s_ease] flex-col items-center lg:mt-10">
            {/* Emblem kept at its exact current size */}
            <Image
              src="/lavin-hero-emblem.png"
              alt="Lavin Group"
              width={930}
              height={674}
              priority
              quality={100}
              className="w-[218px] sm:w-[290px] lg:w-[338px]"
            />
            {/* "LAVIN GROUP" wordmark reduced ~9% (same art, font, color, spacing, centered) */}
            <Image
              src="/lavin-hero-wordmark.png"
              alt=""
              width={930}
              height={96}
              priority
              quality={100}
              className="mt-2.5 w-[211px] sm:w-[281px] lg:mt-3 lg:w-[328px]"
            />
          </div>

          <h1 className="mt-7 font-serif text-[1.72rem] font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:mt-9 lg:text-[4.25rem]">
            <span className="gold-text">{t.hero.slogan}</span>
          </h1>

          <p
            className={`mt-5 max-w-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-foreground/70 sm:max-w-xl lg:mt-6 lg:max-w-none lg:whitespace-nowrap lg:tracking-[0.16em] ${
              lang === 'ar' ? 'text-[0.82rem] sm:text-[0.95rem] lg:text-base' : 'text-xs sm:text-sm lg:text-[0.9rem]'
            }`}
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs - stacked & centered for the premium composition */}
          <div className="mx-auto mt-9 flex flex-col items-center gap-[0.675rem] lg:mt-11 lg:gap-3">
            <HeroCtaButton
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-7 py-[0.66rem] text-[0.83rem] font-semibold text-[#0a0a0a] shadow-[0_16px_40px_-16px_rgba(212,175,55,0.6)] transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-[0.97] lg:px-9 lg:py-[0.82rem] lg:text-[0.95rem]"
            >
              {t.hero.quote}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flip-rtl lg:h-[1.15rem] lg:w-[1.15rem]" />
            </HeroCtaButton>
            <HeroCtaButton
              href="#projects"
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-gold/20 bg-foreground/[0.03] px-7 py-[0.6rem] text-[0.83rem] font-semibold text-foreground shadow-[0_6px_24px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 ease-in-out before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-gold/[0.10] before:to-transparent before:content-[''] hover:border-gold/40 hover:text-gold active:scale-[0.97] lg:px-9 lg:py-[0.76rem] lg:text-[0.95rem]"
            >
              {t.hero.projects}
            </HeroCtaButton>
            <HeroCtaButton
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-gold/20 bg-foreground/[0.03] px-7 py-[0.6rem] text-[0.83rem] font-semibold text-foreground shadow-[0_6px_24px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 ease-in-out before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-gold/[0.10] before:to-transparent before:content-[''] hover:border-gold/40 hover:text-gold active:scale-[0.97] lg:px-9 lg:py-[0.76rem] lg:text-[0.95rem]"
            >
              {t.hero.contactUs}
            </HeroCtaButton>
          </div>
        </div>
      </div>

      {/* Scroll cue - centered */}
      <a
        href="#about"
        className="group relative z-10 mx-auto mb-6 flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/55 transition-colors hover:text-gold"
      >
        {t.hero.scroll}
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>

      {/* Stat bar */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:pb-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gold/20 glass sm:grid-cols-4">
          {t.stats.items.map((stat, i) => {
            const Icon = statIcons[i] ?? ShieldCheck
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 px-3 py-5 text-center transition-colors duration-300 hover:bg-gold/5"
              >
                <Counter value={stat.value} suffix={stat.suffix} className="text-2xl sm:text-3xl" />
                <p className="text-[10px] font-medium uppercase tracking-wide text-foreground/60 sm:text-[11px]">
                  {stat.label}
                </p>
                <Icon className="mt-0.5 h-4 w-4 text-gold/70" strokeWidth={1.5} aria-hidden="true" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
