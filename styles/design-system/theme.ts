// JoinEcoGrow Revolutionary Design System
export const JoinEcoGrowTheme = {
  // From your beautiful logo
  colors: {
    primary: {
      leaf: "#7CB342",      // Light green leaves
      hand: "#388E3C",      // Dark green nurturing hand  
      textGreen: "#689F38", // Text color
      water: "#29B6F6",     // Water droplet blue
      earth: "#6D4C41",     // Earth brown
      border: "#9CCC65",    // Circular border
    },
    gradients: {
      nature: "linear-gradient(135deg, #7CB342 0%, #388E3C 100%)",
      water: "linear-gradient(135deg, #29B6F6 0%, #0288D1 100%)",
      earth: "radial-gradient(circle, #689F38 0%, #33691E 100%)",
    }
  },
  
  animations: {
    // Nurturing hand gesture
    nurture: {
      initial: { rotate: 0, scale: 1 },
      hover: { rotate: [-5, 5, -5, 0], scale: 1.05 },
      transition: { duration: 2, repeat: Infinity }
    },
    
    // Plant growth
    grow: {
      initial: { scaleY: 0, opacity: 0 },
      animate: { scaleY: 1, opacity: 1 },
      transition: { type: "spring", stiffness: 100 }
    },
    
    // Water droplet
    droplet: {
      animate: {
        y: [0, 10, 0],
        scale: [1, 0.9, 1],
        opacity: [1, 0.8, 1]
      },
      transition: { duration: 2, repeat: Infinity }
    }
  },
  
  shapes: {
    organic: {
      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
      transition: "all 0.5s ease-in-out"
    },
    leaf: {
      borderRadius: "0% 100% 0% 100% / 0% 100% 0% 100%"
    }
  }
}
