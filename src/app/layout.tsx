import Footer from "@/components/Footer/Footer"
import Header from '@/components/Header/Header'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Noctis AI - Custom AI Solutions for Business",
  description: "Noctis AI provides cutting-edge artificial intelligence solutions to help businesses automate processes, gain insights, and improve customer experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
