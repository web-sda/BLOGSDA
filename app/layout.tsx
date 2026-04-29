import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.segredosdaaudiencia.com.br'),
  title: {
    default: 'Blog | Segredos da Audiência',
    template: '%s | Blog SDA',
  },
  description: 'Estratégias comprovadas para crescer sua audiência, aumentar engajamento e escalar seu negócio digital.',
  keywords: ['audiência', 'marketing digital', 'crescimento', 'engajamento', 'negócio digital', 'lançamentos'],
  authors: [{ name: 'Segredos da Audiência' }],
  creator: 'Segredos da Audiência',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://blog.segredosdaaudiencia.com.br',
    siteName: 'Blog Segredos da Audiência',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
