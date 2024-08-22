import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="theme">
      <Toaster />
      <div className="mx-auto w-full max-w-2xl">
        <Header />
        <div className="min-h-screen">{children}</div>
        <div className="fixed bottom-4 right-4 md:hidden">
          <ThemeSwitcher />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
