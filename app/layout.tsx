import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Cairo } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { SplashScreen } from '@/components/splash-screen'
import { PageTransition } from '@/components/page-transition'
import { LogoHomeTransition } from '@/components/logo-home-transition'
import { SectionScroll } from '@/components/section-scroll'
import './globals.css'

// Runs before paint on every FULL document load (initial visit AND refresh) so
// the splash cover shows instantly with no homepage flash. Because this inline
// script only executes on real document loads — not on client-side (SPA) route
// changes — the splash never re-appears while navigating within the site, but
// always plays again on refresh. We also force manual scroll restoration so a
// refresh never restores a mid-page scroll position; the visitor always starts
// at the top of the Hero.
const SPLASH_INIT = `try{document.documentElement.classList.add('splash-active');if('scrollRestoration' in history){history.scrollRestoration='manual';}}catch(e){}`

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
  // Arabic font is only needed when a visitor switches to Arabic. Skipping
  // preload keeps it off the critical path for the default (English) homepage
  // load, then it loads on demand (with swap) with no visual change.
  preload: false,
})

const SITE_URL = 'https://lavingroup.example.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lavin Group | Finishing Works Subcontractor — Iraq',
    template: '%s | Lavin Group',
  },
  description:
    'Lavin Group is a specialist finishing works subcontractor operating in Iraq. We execute the complete finishing phase of major construction projects under one subcontract — from shell and core to final handover — with Turkish engineering, Turkish management and international QA/QC and HSE standards.',
  keywords: [
    'Lavin Group',
    'finishing works subcontractor',
    'finishing subcontractor Iraq',
    'complete finishing works',
    'shell and core to handover',
    'Turkish subcontractor Iraq',
    'construction subcontractor Baghdad',
    'finishing package main contractor',
  ],
  authors: [{ name: 'Lavin Group' }],
  openGraph: {
    type: 'website',
    title: 'Lavin Group | Finishing Works Subcontractor — Iraq',
    description:
      'Specialist finishing works subcontractor in Iraq executing the complete finishing phase of major construction projects under one subcontract, from shell and core to final handover.',
    siteName: 'Lavin Group',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Lavin Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lavin Group | Finishing Works Subcontractor — Iraq',
    description:
      'The complete finishing phase of major construction projects, executed under one subcontract in Iraq.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#060810',
  colorScheme: 'dark',
  // width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover.
  // maximumScale prevents Android browsers (Chrome/Samsung/Edge/Opera/etc.)
  // from applying unexpected zoom or auto-scaling text inputs, and viewportFit
  // 'cover' makes the layout fill the whole screen edge-to-edge behind cutouts
  // exactly like iPhone Safari. Safe-area insets (below) keep fixed controls in
  // their original visual position so the design is unchanged.
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${cairo.variable} bg-background`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SPLASH_INIT }} />
      </head>
      <body className="antialiased">
        <SplashScreen />
        <PageTransition />
        <LogoHomeTransition />
        <SectionScroll />
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
