import { ImageResponse } from "next/og"

// Run at the edge for speed
export const runtime = "edge"

// Open Graph defaults
export const alt = "JoinEcoGrow"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export async function GET() {
  // Simple branded image (no external fonts needed)
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#7CB342,#388E3C)",
          color: "white",
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: "-1px"
        }}
      >
        JoinEcoGrow
      </div>
    ),
    size
  )
}
