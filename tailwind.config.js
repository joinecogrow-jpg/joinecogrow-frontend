/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        hand: "#388E3C",
        leaf: "#7CB342", 
        ringg: "#9CCC65",
        textg: "#689F38",
        water: "#29B6F6",
        earth: "#6D4C41"
      }
    }
  },
  plugins: []
}
