/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        hand:  "#388E3C",  // dark green
        leaf:  "#7CB342",  // light green
        ringg: "#9CCC65",  // circle ring
        textg: "#689F38",  // text green
        water: "#29B6F6",  // droplet blue
        earth: "#6D4C41"   // soil brown
      }
    }
  },
  plugins: []
}
