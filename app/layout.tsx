import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Montserrat, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kruger Wild Safaris - Experience the Untamed Beauty of Africa",
  description:
    "Discover the Big 5 in their natural kingdom. From Kruger's vast savannas to private reserves, your African adventure awaits with South Africa's premier safari operator.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${montserrat.variable} ${dancingScript.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
