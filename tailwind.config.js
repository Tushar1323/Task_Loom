/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // important to remember this change
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

