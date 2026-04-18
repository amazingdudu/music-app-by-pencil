/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-primary': '#A855F7',
        'accent-secondary': '#EC4899',
        'accent-tertiary': '#06B6D4',
        'surface-card': '#1E1E1E',
        'surface-elevated': '#141414',
        'surface-inverse': '#0A0A0A',
        'border-subtle': '#2A2A2A',
        'foreground-primary': '#FFFFFF',
        'foreground-secondary': '#A0A0A0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
