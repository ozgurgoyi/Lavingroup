'use client'

import { Award, Clock, Gem, Wallet, Users, ShieldCheck, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const icons: LucideIcon[] = [Award, Clock, Gem, Wallet, Users, ShieldCheck]

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading tag={t.why.tag} title={t.why.title} subtitle={t.why.subtitle} />
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 100}
                className="card-hover group flex items-start gap-4 rounded-2xl glass p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass-gold transition-transform duration-500 group-hover:-translate-y-1">
                  <Icon className="h-6 w-6 text-gold" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
