'use client'

import { MapPin } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Clients() {
  const { t } = useLanguage()

  const groups = [
    { items: t.projectData, label: t.clients.ongoingLabel, variant: 'ongoing' as const },
    { items: t.completedData, label: t.clients.completedLabel, variant: 'completed' as const },
  ]

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading tag={t.clients.tag} title={t.clients.title} subtitle={t.clients.subtitle} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <Reveal key={group.variant} className="rounded-3xl glass p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={
                    'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ' +
                    (group.variant === 'ongoing'
                      ? 'glass-gold text-gold-soft'
                      : 'glass text-foreground/90')
                  }
                >
                  <span
                    className={
                      'h-1.5 w-1.5 rounded-full ' +
                      (group.variant === 'ongoing'
                        ? 'animate-pulse bg-gold'
                        : 'bg-emerald-400')
                    }
                  />
                  {group.label}
                </span>
                <span className="text-sm text-foreground/40">
                  {group.items.length}
                </span>
              </div>

              <ul className="flex flex-col">
                {group.items.map((project, i) => (
                  <li
                    key={project.name}
                    className="group flex items-center justify-between gap-4 border-b border-white/5 py-3.5 last:border-0"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="w-6 shrink-0 font-serif text-sm text-gold/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate text-sm font-medium text-foreground/90 transition-colors group-hover:text-gold">
                        {project.name}
                      </span>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-foreground/50">
                      <MapPin className="h-3.5 w-3.5 text-gold flip-rtl" />
                      {project.location}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
