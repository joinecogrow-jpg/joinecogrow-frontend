import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JoinEcoGrow - Where Gaming Meets Sustainability',
  description: 'Revolutionary platform with 925+ features for sustainable gaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin: 0, padding: 0}}>
        {children}
      </body>
    </html>
  )
}