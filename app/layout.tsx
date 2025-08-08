import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Johnson's Fleet Service Inc | Third Generation Owned and Operated Since 1971",
  description:
    "Johnson's Fleet Service Inc provides Austin and Central Texas with quality truck, trailer, and fleet maintenance services for over 50 years",
  icons: {
    icon: "/images/logo-johnsons-fleet-service.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Analytics />
          <Footer />
        </div>
      </body>
    </html>
  )
}
