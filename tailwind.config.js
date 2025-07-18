/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        'roboto-slab': ['var(--font-roboto-slab)', 'serif'],
      },
    },
  },
  plugins: [],
}
