import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "PP PaintingServices | Premium Painting Services",
  icons: "/logobg.png",
  description:
    "Transform your space with our premium painting services. Expert craftsmanship, eco-friendly paints, and flawless finishes.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}

        {/* ✅ WhatsApp Floating Button */}
        <a
          href="https://wa.me/917620773294"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/whatsapp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>

        <Analytics />
      </body>
    </html>
  )
}
