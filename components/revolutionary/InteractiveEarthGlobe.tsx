"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Stars } from "@react-three/drei"
import { useState } from "react"

export function InteractiveEarthGlobe() {
  const [trees, setTrees] = useState([])
  
  const plantTree = (event) => {
    const newTree = {
      position: event.point,
      id: Date.now()
    }
    setTrees([...trees, newTree])
  }
  
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        
        <Sphere args={[2, 32, 32]} onClick={plantTree}>
          <meshStandardMaterial 
            color="#689F38"
            wireframe
          />
        </Sphere>
        
        {trees.map(tree => (
          <mesh key={tree.id} position={tree.position}>
            <coneGeometry args={[0.05, 0.1, 4]} />
            <meshStandardMaterial color="#7CB342" />
          </mesh>
        ))}
        
        <OrbitControls 
          enableZoom={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <p className="text-white text-xl">
          Click on Earth to plant trees! 🌱
        </p>
      </div>
    </div>
  )
}
