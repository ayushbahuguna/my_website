import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ayush Bahuguna - Full Stack Developer Portfolio",
  description:
    "Passionate full-stack developer with 5+ years of experience building modern web applications. Explore my projects, skills, and professional journey.",
  keywords: [
    "full stack developer",
    "react",
    "next.js",
    "typescript",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Ayush Bahuguna" }],
  creator: "Ayush Bahuguna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "Ayush Bahuguna - Full Stack Developer Portfolio",
    description:
      "Passionate full-stack developer with 5+ years of experience building modern web applications.",
    siteName: "Ayush Bahuguna Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Bahuguna - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Bahuguna - Full Stack Developer Portfolio",
    description:
      "Passionate full-stack developer with 5+ years of experience building modern web applications.",
    images: ["/og-image.jpg"],
    creator: "@johndoe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
