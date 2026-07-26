'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X, Globe, Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { LANGS, type Lang } from '@/lib/i18n'
import { startSectionScroll } from '@/components/section-scroll'
import { goHomeViaLogo } from '@/components/logo-home-transition'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#contact', label: t.nav.contact },
  ]

  const chooseLang = (code: Lang) => {
    setLang(code)
    setLangOpen(false)
    setMobileOpen(false)
  }

  // The Lavin Group logo is the universal Home button. From anywhere (homepage
  // or a Project Details page, any language, mobile or desktop) it always
  // returns to the top of the Hero via a clean, lightweight opacity fade — no
  // glassmorphism, blur, dark overlay, or visible background scrolling.
  const handleLogoHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false)
    // Let the fade controller fully own navigation. We must NOT rewrite the URL
    // here: doing so synchronously would make the controller think it's already
    // on the homepage and merely scroll the current Project Details page to the
    // top instead of navigating Home. The controller resets the URL itself.
    if (goHomeViaLogo()) {
      e.preventDefault()
    }
  }

  // Premium glassmorphism smooth-scroll for in-page nav links. Keeps the URL
  // hash behaviour intact and gracefully falls back to the default anchor jump
  // if the transition layer isn't ready.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    setMobileOpen(false)
    if (startSectionScroll(href)) {
      e.preventDefault()
      // Reflect the section in the URL without adding a history entry, so the
      // browser Back/Forward buttons keep their normal default behavior.
      if (typeof history !== 'undefined') history.replaceState(null, '', href)
    }
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]'
          : 'border-b border-white/5 bg-background/20 py-4 backdrop-blur-md',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          onClick={handleLogoHome}
          className="flex items-center gap-2"
          aria-label="Lavin Group home"
        >
          <Image
            src="/lavin-hero-logo.png"
            alt="Lavin Group — Construction & Contracting, Iraq"
            width={930}
            height={770}
            priority
            quality={100}
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="glass flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-foreground/90 transition-colors hover:text-gold"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Change language"
            >
              <Globe className="h-4 w-4 text-gold" />
              {LANGS.find((l) => l.code === lang)?.short}
            </button>
            {langOpen && (
              <ul
                className="glass absolute end-0 mt-2 w-40 overflow-hidden rounded-xl p-1 shadow-2xl"
                role="listbox"
              >
                {LANGS.map((l) => (
                  <li key={l.code}>
                    <button
                      type="button"
                      onClick={() => chooseLang(l.code)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5',
                        lang === l.code ? 'text-gold' : 'text-foreground/80',
                      )}
                      role="option"
                      aria-selected={lang === l.code}
                    >
                      {l.label}
                      {lang === l.code && <Check className="h-4 w-4" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] shadow-[0_10px_30px_-10px_rgba(212,175,55,0.7)] transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            {t.nav.quote}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-500 lg:hidden',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl glass p-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-1 rounded-lg bg-gold px-4 py-3 text-center text-sm font-semibold text-[#0a0a0a]"
          >
            {t.nav.quote}
          </a>
        </div>
      </div>
    </header>
  )
}
