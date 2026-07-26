import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoSize = 'sm' | 'md' | 'lg'

const SIZES: Record<
  LogoSize,
  { emblem: string; wordmark: string; tracking: string; gap: string }
> = {
  // Navbar
  sm: {
    emblem: 'h-9 w-auto sm:h-10',
    wordmark: 'text-[9px] sm:text-[10px]',
    tracking: '0.3em',
    gap: 'mt-1',
  },
  // Footer
  md: {
    emblem: 'h-14 w-auto',
    wordmark: 'text-[11px]',
    tracking: '0.34em',
    gap: 'mt-2',
  },
  // Hero
  lg: {
    emblem: 'h-40 w-auto sm:h-52',
    wordmark: 'text-lg sm:text-2xl',
    tracking: '0.36em',
    gap: 'mt-4 sm:mt-5',
  },
}

export function Logo({
  size = 'md',
  priority = false,
  className,
}: {
  size?: LogoSize
  priority?: boolean
  className?: string
}) {
  const s = SIZES[size]

  return (
    <span className={cn('flex flex-col items-center', className)}>
      <Image
        src="/lavin-emblem.webp"
        alt="Lavin Group"
        width={367}
        height={600}
        priority={priority}
        className={cn('object-contain', s.emblem)}
      />
      <span
        aria-hidden="true"
        className={cn(
          'font-sans font-semibold uppercase leading-none text-foreground',
          s.wordmark,
          s.gap,
        )}
        // Trailing indent compensates for letter-spacing so the word stays optically centered
        style={{ letterSpacing: s.tracking, textIndent: s.tracking }}
      >
        Lavin Group
      </span>
    </span>
  )
}
