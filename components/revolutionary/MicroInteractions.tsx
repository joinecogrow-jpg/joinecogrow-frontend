"use client"
import { motion } from "framer-motion"

export const MicroInteractions = {
  // Button that grows like a plant when hovered
  GrowButton: ({ children, onClick }) => (
    <motion.button
      onClick={onClick}
      className="px-6 py-3 bg-[#7CB342] text-white rounded-full font-bold"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(124, 179, 66, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(124, 179, 66, 0.7)",
          "0 0 0 10px rgba(124, 179, 66, 0)",
        ]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity
      }}
    >
      {children}
    </motion.button>
  ),
  
  // Water droplet that ripples
  WaterDroplet: () => (
    <motion.div
      className="relative w-12 h-12"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.8, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <span className="text-4xl">💧</span>
      <motion.div
        className="absolute inset-0 border-2 border-[#29B6F6] rounded-full"
        animate={{
          scale: [1, 1.5, 2],
          opacity: [0.5, 0.2, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.div>
  ),
  
  // Nurturing hand animation
  NurturingHand: () => (
    <motion.div
      animate={{
        rotate: [-5, 5, -5, 0],
        y: [0, -5, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="text-6xl"
    >
      🤚
    </motion.div>
  )
}
