'use client'

import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

// Project typologies Lavin Group executes finishing works for. Presented as a
// single indexed register (not trade-by-trade services) to reinforce that the
// complete finishing scope is delivered under one subcontract in every sector.
export function Sectors() {
  const { t } = useLanguage()

  return (
    <section id="sectors" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading tag={t.sectors.tag} title={t.sectors.title} subtitle={t.sectors.subtitle} />
        </div>

        <Reveal className="mt-16 overflow-hidden rounded-3xl glass">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {t.sectors.items.map((sector, i) => (
              <li
                key={sector}
                className="flex items-baseline gap-4 border-b border-white/5 px-6 py-5 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.03] sm:px-8 sm:[&:nth-last-child(2)]:border-b-0 lg:[&:nth-last-child(3)]:border-b-0"
              >
                <span className="font-mono text-xs tabular-nums text-gold/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium text-foreground/85 sm:text-base">{sector}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
