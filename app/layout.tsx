import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const siteUrl = 'https://phtestconsultants.in'
const siteName = 'Ph Test Consultants'
const siteDescription = 'Premium academic consulting, research support, and digital solutions. Empowering students and professionals with expert guidance for academic excellence. Get thesis help, assignment assistance, and business consulting services.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ph Test Consultants | Where Knowledge Takes the Litmus Test',
    template: '%s | Ph Test Consultants',
  },
  description: siteDescription,
  keywords: [
    'academic consulting',
    'research support',
    'assignment assistance',
    'thesis help',
    'dissertation writing',
    'business consulting',
    'content writing',
    'academic writing services',
    'research methodology',
    'data analysis',
    'PhD consulting',
    'academic excellence',
    'professional consulting India',
    'online tutoring',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/logo.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/logo.jpeg', sizes: '16x16', type: 'image/jpeg' },
      { url: '/logo.jpeg', sizes: '192x192', type: 'image/jpeg' },
    ],
    shortcut: '/logo.jpeg',
    apple: [
      { url: '/logo.jpeg', sizes: '180x180', type: 'image/jpeg' },
      { url: '/logo.jpeg', sizes: '152x152', type: 'image/jpeg' },
      { url: '/logo.jpeg', sizes: '120x120', type: 'image/jpeg' },
    ],
    other: [
      { rel: 'mask-icon', url: '/logo.jpeg', color: '#3b82f6' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: 'Ph Test Consultants | Where Knowledge Takes the Litmus Test',
    description: siteDescription,
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ph Test Consultants - Premium Academic Consulting Services',
        type: 'image/jpeg',
      },
      {
        url: '/logo.jpeg',
        width: 600,
        height: 600,
        alt: 'Ph Test Consultants Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@phtestconsultants',
    creator: '@phtestconsultants',
    title: 'Ph Test Consultants | Where Knowledge Takes the Litmus Test',
    description: siteDescription,
    images: {
      url: '/logo.jpeg',
      alt: 'Ph Test Consultants - Premium Academic Consulting Services',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Education',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': siteName,
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    logo: `${siteUrl}/logo.jpeg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8595451329',
      contactType: 'customer service',
      areaServed: ['IN', 'US', 'GB', 'AU'],
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.facebook.com/phtestconsultants',
      'https://www.linkedin.com/company/phtestconsultants',
      'https://twitter.com/phtestconsultants',
      'https://www.instagram.com/phtestconsultants',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'Ph Test Consultants Team',
    },
    foundingDate: '2014',
    slogan: 'Where Knowledge Takes the Litmus Test',
    knowsAbout: [
      'Academic Consulting',
      'Research Support',
      'Thesis Writing',
      'Dissertation Help',
      'Business Consulting',
      'Content Writing',
    ],
  }

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    telephone: '+91-8595451329',
    email: 'info@phtestconsultants.in',
    priceRange: '$$',
    image: `${siteUrl}/logo.jpeg`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '5000',
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  }

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
