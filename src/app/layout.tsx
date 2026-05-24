import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Gabriela Nunes — Psicóloga Clínica',
    default: 'Gabriela Nunes — Psicoterapia Online',
  },
  description:
    'Psicoterapia online para mulheres que vivem em autocobrança, ansiedade e dificuldade de se sentir suficientes. Atendimento clínico com abordagem psicanalítica.',
  keywords: [
    'psicóloga online',
    'psicoterapia online',
    'psicanálise',
    'ansiedade',
    'autoestima',
    'saúde mental',
    'Gabriela Nunes',
    'terapia para mulheres',
  ],
  authors: [{ name: 'Gabriela Nunes' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SERVER_URL,
    siteName: 'Gabriela Nunes | Psicóloga Clínica',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
