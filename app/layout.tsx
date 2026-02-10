import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import '@/styles/global.css'

export const metadata: Metadata = {
  title: 'Malmö BMX Racing',
  description: 'Välkommen till Malmö BMX Racing!',
  icons: {
    icon: [
      { url: '/img/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/img/favicon/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://www.malmobmxracing.se/',
    siteName: 'Malmö BMX Racing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
