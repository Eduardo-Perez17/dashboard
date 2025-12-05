import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Finbro',
    default: 'Finbro - Stock Market Analytics'
  },
  description: 'Finbro provides real-time analytics and insights for stock market trading and investments.',
  keywords: ['stock analytics', 'market insights', 'trading', 'investments', 'finbro'],
  authors: [{ name: 'Finbro Team' }],
  creator: 'Finbro',
  publisher: 'Finbro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Finbro',
    title: 'Finbro - Stock Market Analytics',
    description: 'Advanced analytics for stock market trends and trading decisions.',
    images: '/og-image.png' 
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finbro - Stock Market Analytics',
    description: 'Real-time stock analytics platform.',
    images: '/twitter-image.png'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
