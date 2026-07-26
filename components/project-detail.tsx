'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, MapPin, CheckCircle2, X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { startPageTransition, startPageTransitionHome } from '@/components/page-transition'
import { projectLabels, getProjectByName, type Project } from '@/lib/projects'

export function ProjectDetail({ project }: { project: Project }) {
  const { t, lang } = useLanguage()
  const labels = projectLabels[lang]
  const content = project.content[lang]
  const groups = project.galleryGroups
  // Flat, cover-first-independent list used for lightbox navigation across all categories.
  const gallery = groups ? groups.flatMap((g) => g.images) : project.gallery

  // Lightbox state
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    [gallery.length],
  )
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [gallery.length],
  )

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, close, next, prev])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      // In RTL, swiping visually still maps to prev/next intuitively.
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  // Related projects: other projects, detail-linked when available.
  const related = [...t.completedData, ...t.projectData]
    .filter((p) => p.name !== content.name)
    .slice(0, 3)

  return (
    <article>
      {/* 1. Hero cover image */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <Image
          src={project.cover || '/placeholder.svg'}
          alt={content.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(6,8,16,0.96) 4%, rgba(6,8,16,0.55) 42%, rgba(6,8,16,0.35) 100%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-5">
            <Link
              href="/#projects"
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
                // Same premium glass transition, restoring the exact homepage
                // scroll position (the project card the visitor came from).
                startPageTransitionHome()
              }}
              className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-foreground/90 transition-all duration-300 hover:border-gold/40 hover:text-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5 flip-rtl" />
              {labels.back}
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                {content.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-foreground/90">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {content.status}
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {content.name}
            </h1>

            <span className="inline-flex items-center gap-2 text-sm text-foreground/70">
              <MapPin className="h-4 w-4 text-gold flip-rtl" />
              {content.location}
            </span>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 2. Project Overview */}
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Reveal className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                {labels.overview}
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
                {content.name}
              </h2>
              <span className="mt-1 h-px w-24 gold-line" />
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">{content.overview}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: labels.category, value: content.category },
                  { label: labels.status, value: content.status },
                  { label: labels.location, value: content.location },
                ].map((f) => (
                  <div key={f.label} className="flex flex-col gap-1 rounded-2xl glass p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/45">
                      {f.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground/90">{f.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 3. Scope of Work */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Reveal className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                {labels.scopeOfWork}
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
                {content.name}
              </h2>
              <span className="mt-1 h-px w-24 gold-line" />
            </Reveal>

            <Reveal delay={100} className="grid gap-4 sm:grid-cols-2">
              {content.scope.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl glass p-5 text-sm font-medium text-foreground/90"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                  {item}
                </div>
              ))}
            </Reveal>
          </div>

          {/* 4. Premium gallery */}
          <div className="mt-24 flex justify-center">
            <SectionHeading tag={labels.gallery} title={content.name} subtitle={labels.gallerySubtitle} />
          </div>

          {groups ? (
            /* Categorized gallery — each category grouped, images in upload order */
            <div className="mt-14 flex flex-col gap-16">
              {groups.map((group) => {
                // Global offset so tiles map to the correct flat lightbox index.
                const offset = gallery.indexOf(group.images[0])
                return (
                  <div key={group.title.en} className="flex flex-col gap-6">
                    <Reveal className="flex items-center gap-4">
                      <span className="h-px w-8 gold-line" />
                      <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground/90 sm:text-2xl">
                        {group.title[lang]}
                      </h3>
                      <span className="h-px flex-1 bg-border/40" />
                    </Reveal>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {group.images.map((src, j) => {
                        const globalIndex = offset + j
                        return (
                          <Reveal key={src} delay={j * 80}>
                            <button
                              type="button"
                              onClick={() => setOpenIndex(globalIndex)}
                              aria-label={`${group.title[lang]} — ${j + 1}`}
                              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl glass"
                            >
                              <Image
                                src={src || '/placeholder.svg'}
                                alt={`${content.name} — ${group.title[lang]} — ${j + 1}`}
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <span className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/20" />
                            </button>
                          </Reveal>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((src, i) => (
                <Reveal
                  key={src}
                  delay={i * 80}
                  className={i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-label={`${content.name} — ${i + 1}`}
                    className={
                      'group relative block w-full overflow-hidden rounded-3xl glass ' +
                      (i === 0 ? 'aspect-[16/10] lg:h-full' : 'aspect-[4/3]')
                    }
                  >
                    <Image
                      src={src || '/placeholder.svg'}
                      alt={`${content.name} — ${i + 1}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/20" />
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Related projects */}
      <section className="relative border-t border-border/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <SectionHeading tag={labels.related} title={labels.related} subtitle={labels.relatedSubtitle} />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => {
              const detail = getProjectByName(p.name)
              const href = detail ? `/projects/${detail.slug}` : '/#projects'
              return (
                <Reveal key={p.name} delay={i * 100}>
                  <Link
                    href={href}
                    onClick={(e) => {
                      // Only intercept real detail links (skip the /#projects fallback)
                      // and let modified clicks (new tab / window) behave normally.
                      if (
                        !detail ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        e.button !== 0
                      )
                        return
                      e.preventDefault()
                      startPageTransition(href)
                    }}
                    className="card-hover group relative flex h-full flex-col overflow-hidden rounded-3xl glass"
                  >
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
                      {detail ? (
                        <Image
                          src={detail.cover || '/placeholder.svg'}
                          alt={detail.content[lang].name}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
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
                          <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                            <span className="flex h-14 w-14 items-center justify-center rounded-2xl glass-gold">
                              <ImageIcon className="h-6 w-6 text-gold" />
                            </span>
                            <span className="font-serif text-lg font-semibold text-foreground/90">
                              {p.name}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground/60">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-gold flip-rtl" />
                          {detail ? detail.content[lang].location : p.location}
                        </span>
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-gold">
                        {labels.viewProject}
                        <ArrowRight className="h-3.5 w-3.5 flip-rtl transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full-screen lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute end-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous"
            className="absolute start-3 z-10 hidden h-12 w-12 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-gold sm:flex"
          >
            <ChevronLeft className="h-6 w-6 flip-rtl" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next"
            className="absolute end-3 z-10 hidden h-12 w-12 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-gold sm:flex"
          >
            <ChevronRight className="h-6 w-6 flip-rtl" />
          </button>

          <div
            className="relative mx-auto h-[80vh] w-[92vw] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={gallery[openIndex]}
              src={gallery[openIndex] || '/placeholder.svg'}
              alt={`${content.name} — ${openIndex + 1}`}
              fill
              sizes="92vw"
              className="animate-[fadeIn_0.3s_ease] object-contain"
            />
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-foreground/80">
            {openIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </article>
  )
}
