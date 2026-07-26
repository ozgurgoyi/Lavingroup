import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
}: {
  tag: string
  title: string
  subtitle?: string
  align?: 'center' | 'start'
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-start',
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
        {tag}
      </span>
      <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-foreground/65 text-pretty">
          {subtitle}
        </p>
      )}
      <span className="mt-1 h-px w-24 gold-line" />
    </Reveal>
  )
}
