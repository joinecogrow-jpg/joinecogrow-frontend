import './globals.css'
import React from 'react'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang='en'><body style={{minHeight:'100vh'}}>{children}</body></html>)
}
