"use client"
import { useGesture } from "@use-gesture/react"
import { animated, useSpring } from "@react-spring/web"
import { useState } from "react"

export function GestureNavigation() {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = ["Home", "Trees", "Games", "Community", "Profile"]
  
  const [{ x, scale }, api] = useSpring(() => ({
    x: 0,
    scale: 1
  }))
  
  const bind = useGesture({
    onDrag: ({ offset: [ox] }) => {
      api.start({ x: ox })
    },
    onDragEnd: ({ velocity: [vx], direction: [dx] }) => {
      if (Math.abs(vx) > 0.5) {
        const newPage = currentPage - dx
        if (newPage >= 0 && newPage < pages.length) {
          setCurrentPage(newPage)
        }
      }
      api.start({ x: -currentPage * window.innerWidth })
    },
    onPinch: ({ offset: [s] }) => {
      api.start({ scale: 1 + s / 200 })
    }
  })
  
  return (
    <animated.div
      {...bind()}
      style={{
        x,
        scale,
        touchAction: "none",
        cursor: "grab"
      }}
      className="flex h-screen"
    >
      {pages.map((page, i) => (
        <div
          key={page}
          className="w-screen h-screen flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, #7CB342 ${i * 20}%, #388E3C 100%)`
          }}
        >
          <h1 className="text-6xl text-white font-bold">{page}</h1>
        </div>
      ))}
    </animated.div>
  )
}
