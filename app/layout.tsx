import React from "react"
import type { Metadata } from 'next'
import { Allura, Red_Hat_Display, Red_Hat_Text } from 'next/font/google'
import './globals.css'


const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], variable: '--font-display' });
const redHatText = Red_Hat_Text({ subsets: ["latin"], variable: '--font-sans' });
const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-modern',
});


export const metadata: Metadata = {
  title: 'Nnadi Peter E - Frontend Developer',
  description: 'Professional frontend developer with 3+ years of experience in React, Next.js, HTML, and CSS',
  icons: {
    icon: [
      {
        url: '/peter.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/peter.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/peter.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${redHatText.variable} ${allura.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
