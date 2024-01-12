/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
// @ts-nocheck
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
}) 

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community-driven platform where one can lets take this as the only test project ask question and get answer",
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
    appearance={{
      elements: {
        formButtonPrimary: 'primary-gradient',
        footerActionLink: 'primary-text-gradient hover:text-primary-500'
            }
          }}
          >
            <ThemeProvider>
          {children}
          </ThemeProvider>
          </ClerkProvider>
              </body>
      </html>
    )
}