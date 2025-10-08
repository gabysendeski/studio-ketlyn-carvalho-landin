import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studio Ketlyn Carvalho',
  description: 'Criamos soluções digitais inovadoras que impulsionam seu negócio para o próximo nível. Design moderno, tecnologia avançada e resultados excepcionais.',
  keywords: 'desenvolvimento web, design ui/ux, e-commerce, consultoria digital',
  authors: [{ name: 'Sua Empresa' }],
  creator: 'Sua Empresa',
  publisher: 'Sua Empresa',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seudominio.com',
    title: 'Studio Ketlyn Carvalho',
    description: 'Criamos soluções digitais inovadoras que impulsionam seu negócio para o próximo nível.',
    siteName: 'Sua Empresa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Ketlyn Carvalho',
    description: 'Criamos soluções digitais inovadoras que impulsionam seu negócio para o próximo nível.',
    creator: '@seutwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}