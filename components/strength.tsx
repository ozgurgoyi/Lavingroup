'use client'

import { Landmark, Ruler, ShieldCheck, Users, Truck, Globe2, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const icons: LucideIcon[] = [Landmark, Ruler, ShieldCheck, Users, Truck, Globe2]

export function Strength() {
  const { t } = useLanguage()

  return (
    <section id="strength" className="relative py-24 sm:py-32">
      {/* Subtle top accent */}
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading
            tag={t.strength.tag}
            title={t.strength.title}
            subtitle={t.strength.subtitle}
          />
        </div>

        <Reveal delay={80} className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-3xl glass-gold p-6 text-center sm:p-8">
            <p className="text-base leading-relaxed text-foreground/80 text-pretty sm:text-lg">
              {t.strength.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.strength.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 100}
                className="card-hover group flex flex-col gap-4 rounded-2xl glass p-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl glass-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-gold" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{item.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
