import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mahalaxmi Developers - Real Estate in Nagpur',
  description: 'Premium Residential and Commercial Real Estate Solutions in Nagpur by Mahalaxmi Developers. Explore Our Projects Today!',
  generator: 'Next.js',
  icons: '/Mahalaxmi Infra new Logo.png',
  keywords: ['Real Estate', 'Nagpur', 'Mahalaxmi Developers', 'Residential Projects', 'Commercial Projects', 'Property Development'],
  authors: [{ name: 'Mahalaxmi Developers', url: 'https://mahalaxmidevelopers.in' }],
  openGraph: {
    title: 'Mahalaxmi Developers - Real Estate in Nagpur',
    description: 'Premium Residential and Commercial Real Estate Solutions in Nagpur by Mahalaxmi Developers. Explore Our Projects Today!',
    url: 'https://mahalaxmidevelopers.in',
    siteName: 'Mahalaxmi Developers',
    images: [
      {
        url: 'https://mahalaxmidevelopers.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahalaxmi Developers - Real Estate in Nagpur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="//s2.tracemyip.org/vLg/lgUrl.php?pidnVar2=103683&prtVar2=2&stlVar2=1206&rgtype=4684NR-IPIB&scvVar2=12"
          async
          strategy="afterInteractive"
        />

      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
