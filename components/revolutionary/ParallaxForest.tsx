"use client"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

export function ParallaxForest() {
  return (
    <Parallax pages={3} style={{ top: 0, left: 0 }}>
      {/* Background Sky */}
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          backgroundImage: "linear-gradient(to bottom, #87CEEB, #98D8C8)",
        }}
      />
      
      {/* Far Trees */}
      <ParallaxLayer offset={0} speed={0.2}>
        <div className="flex justify-around">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="text-8xl opacity-50"
              style={{ color: "#388E3C" }}
            >
              🌲
            </div>
          ))}
        </div>
      </ParallaxLayer>
      
      {/* Middle Trees */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="flex justify-around mt-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="text-9xl opacity-75"
              style={{ color: "#7CB342" }}
            >
              🌳
            </div>
          ))}
        </div>
      </ParallaxLayer>
      
      {/* Close Trees */}
      <ParallaxLayer offset={0} speed={0.8}>
        <div className="flex justify-around mt-40">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-9xl" style={{ color: "#689F38" }}>
              🌴
            </div>
          ))}
        </div>
      </ParallaxLayer>
      
      {/* Content */}
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome to Your Forest
          </h1>
          <p className="text-2xl text-white">
            Scroll to explore your impact
          </p>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}
