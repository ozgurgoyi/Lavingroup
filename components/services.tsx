'use client'

import {
  Layers,
  CalendarClock,
  HardHat,
  BadgeCheck,
  ShieldCheck,
  KeyRound,
  type LucideIcon,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

// Matched to the fixed order of the scope items in the dictionary:
// Integrated Package · Planning · Site Management · QA/QC · HSE · Handover
const icons: LucideIcon[] = [Layers, CalendarClock, HardHat, BadgeCheck, ShieldCheck, KeyRound]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px gold-line opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading tag={t.services.tag} title={t.services.title} subtitle={t.services.subtitle} />
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 100}
                className="card-hover group flex flex-col gap-4 rounded-2xl glass p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl glass-gold transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-gold" />
                </span>
                <h3 className="font-serif text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{service.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
