/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hand: '#388E3C',  // Nurturing hand dark green
        leaf: '#7CB342',  // Growing leaves light green
        ringg: '#9CCC65', // Circle border light green
        textg: '#689F38', // Brand text green
        water: '#29B6F6', // Water droplet blue
        earth: '#6D4C41', // Earth/soil brown
      },
    },
  },
  plugins: [],
}
