import 'the-new-css-reset/css/reset.css'
import type { Metadata } from 'next'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'もやしきんぐの推しメンは？',
  description: 'もやしきんぐの推しメンを解説するサイトです',
  openGraph: {
    title: 'もやしきんぐの推しメンは？',
    description: 'もやしきんぐの推しメンを解説するサイトです',
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
