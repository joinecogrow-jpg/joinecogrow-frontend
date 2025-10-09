import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JoinEcoGrow - Where Gaming Meets Sustainability",
  description: "Revolutionary platform with 925+ features for sustainable gaming",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}