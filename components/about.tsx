'use client'

import { Check, Target, Eye } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { AboutSlideshow } from '@/components/about-slideshow'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            {/* Premium glassmorphism showcase (Apple / luxury architecture feel):
                3% glass background, 20px backdrop blur, 1px border at 8% white,
                soft shadow + very soft glow, 24px radius, gently floating. The
                image sits inside with generous padding so it appears to float. */}
            <div
              className="animate-panel-float relative rounded-3xl p-3 sm:p-4"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow:
                  '0 24px 70px -28px rgba(0, 0, 0, 0.45), 0 0 50px rgba(212, 175, 55, 0.05)',
              }}
            >
              {/* 3:4 ratio matches the uploaded images so object-contain shows the
                  complete image with no cropping, zooming, or distortion. */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.15rem]">
                {/* Premium fade slideshow of the two uploaded interiors */}
                <AboutSlideshow />
              </div>
            </div>
            <div className="absolute -bottom-6 end-4 rounded-2xl glass-gold px-6 py-4 text-center animate-float sm:end-8">
              <p className="font-serif text-3xl font-bold gold-text">10+</p>
              <p className="text-xs text-foreground/70">Years</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <SectionHeading tag={t.about.tag} title={t.about.title} align="start" />
            <Reveal as="p" className="text-base leading-relaxed text-foreground/70">
              {t.about.body}
            </Reveal>
            <Reveal className="grid gap-3 sm:grid-cols-2">
              {t.about.points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full glass-gold">
                    <Check className="h-3.5 w-3.5 text-gold" />
                  </span>
                  <span className="text-sm text-foreground/80">{point}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal className="card-hover group rounded-3xl glass p-8 sm:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl glass-gold">
              <Target className="h-7 w-7 text-gold" />
            </span>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {t.mission.tag}
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">{t.mission.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/65">{t.mission.body}</p>
          </Reveal>

          <Reveal
            delay={120}
            className="card-hover group rounded-3xl glass p-8 sm:p-10"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl glass-gold">
              <Eye className="h-7 w-7 text-gold" />
            </span>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {t.vision.tag}
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">{t.vision.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/65">{t.vision.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
