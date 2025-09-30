import "./globals.css"
import Image from "next/image"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: { default: "JoinEcoGrow", template: "%s | JoinEcoGrow" },
  description: "Plant trees, learn eco-skills, and grow community.",
  metadataBase: new URL("https://joinecogrow.com"),
  icons: { icon: [{ url: "/favicon-16.png" }, { url: "/favicon-32.png" }, { url: "/icon-192.png" }, { url: "/icon-512.png" }] }
}
export const viewport: Viewport = { themeColor: "#388E3C" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <header className="flex items-center gap-3 p-4 border-b">
          <Image src="/logo.png" alt="JoinEcoGrow" width={64} height={64} priority />
          <span className="text-2xl font-extrabold" style={{ color: "var(--hand)" }}>JoinEcoGrow</span>
        </header>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
