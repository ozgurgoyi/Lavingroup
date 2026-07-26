'use client'

import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Logo } from '@/components/logo'

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="relative border-t border-white/5 pt-16">
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo size="md" className="items-start" />
            <p className="max-w-sm text-sm leading-relaxed text-foreground/55">{t.footer.about}</p>
            <p className="text-sm font-semibold gold-text">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold">{t.footer.quickLinks}</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/55 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold">{t.footer.ourServices}</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {t.services.items.slice(0, 6).map((s) => (
                <li key={s.title} className="text-sm text-foreground/55">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold">{t.footer.contact}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-foreground/55">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {t.contact.addressValue}
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/55">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span className="flex flex-col" dir="ltr">
                  <span>{t.contact.phoneValue}</span>
                  <span>{t.contact.phoneValue2}</span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/55">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {t.contact.emailValue}
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/55">
                <Globe className="h-4 w-4 shrink-0 text-gold" />
                {t.contact.websiteValue}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 py-6 sm:flex-row">
          <p className="text-xs text-foreground/45">
            &copy; {new Date().getFullYear()} Lavin Group. {t.footer.rights}
          </p>
          <p className="text-xs text-foreground/45">
            Finishing Works Subcontractor · Turkish Engineering · Iraq
          </p>
        </div>
      </div>
    </footer>
  )
}
