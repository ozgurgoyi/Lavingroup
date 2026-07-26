import type { SVGProps } from 'react'

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.5V6.8c0-.8.2-1.3 1.5-1.3H17V2.6c-.4-.05-1.4-.15-2.5-.15-2.5 0-4.2 1.5-4.2 4.3v1.75H7.5V11.6H10.3V21h3.4v-9.4h2.6l.4-3.1H14z" />
    </svg>
  )
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 5A1.94 1.94 0 1 1 3.06 5a1.94 1.94 0 0 1 3.88 0zM3.4 8.4h3.1V21H3.4V8.4zm5.35 0h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.09v-5.55c0-1.32-.02-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.93V21H8.75V8.4z" />
    </svg>
  )
}
