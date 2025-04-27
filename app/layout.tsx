/* eslint-disable camelcase */
import React from 'react'
// import { ClerkProvider,SignedIn,SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { ClerkProvider} from '@clerk/nextjs'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next';

import './globals.css';
import '../styles/prism.css';
import { ThemeProvider } from '@/context/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
}) 

// eslint-disable-next-line no-undef
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: "Workzone",
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
    
    <ClerkProvider
    appearance={{
      elements: {
        formButtonPrimary: 'primary-gradient',
        footerActionLink: 'primary-text-gradient hover:text-primary-500'
            }
          }}
          >
          <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {/* <header className="flex h-16 items-center justify-end gap-4 p-4">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
            <ThemeProvider>
          {children}
          </ThemeProvider>
          
              </body>
      </html>
      </ClerkProvider>
    )
}