/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "chinese-black": "#10131f",
        "bright-gray": "#ececf1",
        "ultramarine": "#4649ff",
        "gunmetal": "#222328",
        "silver": "#666e75",
        "lightblue": "#6469ff",
        "ghost": "#f9fafe",
      }
    },
  },
  plugins: [],
}
