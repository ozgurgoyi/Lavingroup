import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lavin Group | Construction & Contracting Iraq',
  description: 'Lavin Group provides premium finishing, construction and contracting services in Iraq with professional Turkish teams.',
  keywords: ['Lavin Group', 'construction Iraq', 'contracting Iraq', 'finishing works'],
  openGraph: { title: 'Lavin Group | Construction & Contracting Iraq', description: 'Premium construction and finishing works across Iraq.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Lavin Group', description: 'Construction & Contracting in Iraq' },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#06101f' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-[#06101f]"><body>{children}</body></html>
}
