'use client'

import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function MapSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading tag={t.map.tag} title={t.map.title} />
        </div>

        <Reveal className="mt-14 overflow-hidden rounded-3xl glass p-2">
          <div className="overflow-hidden rounded-[1.35rem]">
            <iframe
              title="Lavin Group location"
              src="https://www.google.com/maps?q=Al+Jadriyah,Baghdad,Iraq&output=embed"
              width="100%"
              height="440"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.3] contrast-110"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
