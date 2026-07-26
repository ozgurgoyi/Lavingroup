'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const images = [
  { src: '/gallery-interior.webp', alt: 'Luxury interior', span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/gallery-marble.webp', alt: 'Marble finishing', span: '' },
  { src: '/gallery-facade.webp', alt: 'Building facade', span: '' },
  { src: '/gallery-epoxy.webp', alt: 'Epoxy flooring', span: '' },
  { src: '/gallery-gypsum.webp', alt: 'Gypsum ceiling', span: '' },
]

export function Gallery() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading tag={t.gallery.tag} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 90}
              className={`card-hover group relative overflow-hidden rounded-2xl glass ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
