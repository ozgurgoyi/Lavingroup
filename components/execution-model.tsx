'use client'

import { Layers, GitMerge, Award, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

// Minimalist gold line icons, matched to the fixed order of the dictionary items:
// Complete Finishing Scope · Flexible Project Integration · One Standard of Excellence
const icons: LucideIcon[] = [Layers, GitMerge, Award]

export function ExecutionModel() {
  const { t } = useLanguage()

  return (
    <section id="execution-model" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px gold-line opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading tag={t.execution.tag} title={t.execution.title} />
        </div>

        {/* Statement block — the lead sentence carries the primary message */}
        <Reveal className="mx-auto mt-14 max-w-3xl text-center">
          <p className="font-serif text-xl leading-relaxed text-foreground/90 text-pretty sm:text-2xl">
            {t.execution.lead}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-foreground/60 text-pretty sm:text-base">
            {t.execution.body}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.execution.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="card-hover group flex flex-col gap-4 rounded-2xl glass p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl glass-gold transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                </span>
                <h3 className="font-serif text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{item.desc}</p>
              </Reveal>
            )
          })}
        </div>

        {/* Closing commitment line */}
        <Reveal delay={200} className="mt-16 flex flex-col items-center gap-6">
          <span className="h-px w-24 gold-line" />
          <p className="max-w-2xl text-center font-serif text-base leading-relaxed text-gold-soft text-pretty sm:text-lg">
            {t.execution.closing}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
