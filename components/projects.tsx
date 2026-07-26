'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ImageIcon, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { startPageTransition } from '@/components/page-transition'
import { getProjectByName, getProjectCoverByName, projectLabels } from '@/lib/projects'

type Project = { name: string; location: string; type: string }

function ProjectGrid({
  items,
  status,
  variant,
}: {
  items: Project[]
  status: string
  variant: 'ongoing' | 'completed'
}) {
  const { lang } = useLanguage()
  const labels = projectLabels[lang]

  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => {
        const detail = getProjectByName(project.name)
        const cover = getProjectCoverByName(project.name)
        const coverSrc = detail?.cover ?? cover?.cover
        const coverAlt = detail ? detail.content[lang].name : project.name
        const category = detail
          ? detail.content[lang].category
          : cover
            ? cover.category[lang]
            : project.type

        return (
          <Reveal
            key={project.name}
            delay={i * 100}
            className="card-hover group relative flex flex-col overflow-hidden rounded-3xl glass"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
              {coverSrc ? (
                /* Real cover image */
                <Image
                  src={coverSrc || '/placeholder.svg'}
                  alt={coverAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                /* Placeholder visual */
                <>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(80% 80% at 50% 0%, rgba(212,175,55,0.10), transparent 60%), var(--navy)',
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl glass-gold">
                      <ImageIcon className="h-6 w-6 text-gold" />
                    </span>
                    <span className="font-serif text-lg font-semibold text-foreground/90">
                      {project.name}
                    </span>
                  </div>
                </>
              )}
              <span
                className={
                  'absolute end-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ' +
                  (variant === 'ongoing' ? 'glass-gold text-gold-soft' : 'glass text-foreground/90')
                }
              >
                <span
                  className={
                    'h-1.5 w-1.5 rounded-full ' +
                    (variant === 'ongoing' ? 'animate-pulse bg-gold' : 'bg-emerald-400')
                  }
                />
                {status}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground/60">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-gold flip-rtl" />
                  {detail ? detail.content[lang].location : project.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ImageIcon className="h-4 w-4 text-gold" />
                  {category}
                </span>
              </div>
              <p className="mt-3 text-left text-sm font-semibold text-white">
                {detail ? detail.content[lang].name : project.name}
              </p>
              {detail ? (
                <Link
                  href={`/projects/${detail.slug}`}
                  onClick={(e) => {
                    // Let modified clicks (new tab / window) behave normally.
                    if (
                      e.metaKey ||
                      e.ctrlKey ||
                      e.shiftKey ||
                      e.altKey ||
                      e.button !== 0
                    )
                      return
                    e.preventDefault()
                    startPageTransition(`/projects/${detail.slug}`)
                  }}
                  className="premium-tap mt-5 inline-flex items-center justify-center gap-2 rounded-full glass-gold px-5 py-2.5 text-xs font-semibold text-gold hover:border-gold/40"
                >
                  {labels.details}
                  <ArrowRight className="h-3.5 w-3.5 flip-rtl" />
                </Link>
              ) : (
                <button
                  type="button"
                  className="premium-tap mt-5 inline-flex items-center justify-center gap-2 rounded-full glass-gold px-5 py-2.5 text-xs font-semibold text-gold hover:border-gold/40"
                >
                  {labels.details}
                  <ArrowRight className="h-3.5 w-3.5 flip-rtl" />
                </button>
              )}
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading tag={t.ongoing.tag} title={t.ongoing.title} subtitle={t.ongoing.subtitle} />
        </div>
        <ProjectGrid items={t.projectData} status={t.ongoing.status} variant="ongoing" />

        <div className="mt-24 flex justify-center">
          <SectionHeading
            tag={t.completed.tag}
            title={t.completed.title}
            subtitle={t.completed.subtitle}
          />
        </div>
        <ProjectGrid items={t.completedData} status={t.completed.status} variant="completed" />
      </div>
    </section>
  )
}
