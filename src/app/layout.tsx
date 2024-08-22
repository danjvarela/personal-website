import { Inter, Roboto_Mono } from "next/font/google"
import "@/styles/globals.css"
import { Metadata } from "next"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" })

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: "",
    keywords: "",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          robotoMono.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
