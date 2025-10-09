import { InteractiveEarthGlobe } from "@/components/revolutionary/InteractiveEarthGlobe"
import { GestureNavigation } from "@/components/revolutionary/GestureNavigation"
import { ParallaxForest } from "@/components/revolutionary/ParallaxForest"
import { MicroInteractions } from "@/components/revolutionary/MicroInteractions"
import { AIAdaptiveUI } from "@/components/revolutionary/AIAdaptiveUI"

export default function RevolutionaryHome() {
  return (
    <main>
      {/* Hero with 3D Earth */}
      <section className="relative h-screen">
        <InteractiveEarthGlobe />
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            JoinEcoGrow
          </h1>
          <p className="text-2xl text-white">
            Revolutionary Gaming for Sustainability
          </p>
        </div>
      </section>
      
      {/* Parallax Forest */}
      <section className="h-screen">
        <ParallaxForest />
      </section>
      
      {/* AI Adaptive Section */}
      <section>
        <AIAdaptiveUI />
      </section>
      
      {/* Micro-interactions Demo */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{color: "#388E3C"}}>
            Experience Revolutionary Interactions
          </h2>
          <div className="flex justify-center gap-8">
            <MicroInteractions.GrowButton onClick={() => alert("Growing!")}>
              Plant a Tree
            </MicroInteractions.GrowButton>
            <MicroInteractions.WaterDroplet />
            <MicroInteractions.NurturingHand />
          </div>
        </div>
      </section>
    </main>
  )
}
