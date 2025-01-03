import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Product Cards',
  description: 'Responsive product card layout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}</body>
    </html>
  )
}