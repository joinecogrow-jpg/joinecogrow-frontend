import { ImageResponse } from "next/og"
export const runtime = "edge"
export const alt = "JoinEcoGrow"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px", height: "630px",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg,#7CB342,#388E3C)", color: "white",
          fontSize: 80, fontWeight: 800
        }}
      >
        JoinEcoGrow
      </div>
    ),
    { ...size }
  )
}
