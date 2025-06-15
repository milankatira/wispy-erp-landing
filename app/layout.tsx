import type { Metadata } from 'next'
import './globals.css'

import { Sen } from 'next/font/google';

const sen = Sen({
  subsets: ['latin'], // Specify the subsets you need for optimization
  weight: ['400', '700'], // Specify the weights you plan to use
  variable: '--font-sen', // Optional: Define a CSS variable for easier use in Tailwind/CSS
});

const favicon = "https://res.cloudinary.com/da5rta12e/image/upload/f_auto,q_auto/wispy-logo_vfdkv2"

export const metadata: Metadata = {
  title: 'Wispy Cloud Solutions',
  description: 'Streamline your business operations with our tailored ERP solutions. Discover how our cloud-based systems can drive efficiency and growth.',
  icons: {
    icon: favicon,
    shortcut: favicon,
    apple: favicon,
    other: {
      rel: 'mask-icon',
      url: favicon,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sen.className}`}>{children}</body>
    </html>
  )
}
