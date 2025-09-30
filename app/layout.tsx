import "./globals.css"
import Image from "next/image"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: { default: "JoinEcoGrow", template: "%s | JoinEcoGrow" },
  description: "Plant trees, learn eco-skills, and grow community.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16" },
      { url: "/favicon-32.png", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192" },
      { url: "/icon-512.png", sizes: "512x512" }
    ]
  },
  metadataBase: new URL("https://joinecogrow.com")
}

export const viewport: Viewport = { themeColor: "#388E3C" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <header className="flex items-center gap-3 p-4 border-b">
          <Image src="/logo.png" alt="JoinEcoGrow" width={56} height={56} priority />
          <span className="text-2xl font-extrabold" style={{ color: "var(--hand)" }}>JoinEcoGrow</span>
        </header>
        {children}
      </body>
    </html>
  )
}
