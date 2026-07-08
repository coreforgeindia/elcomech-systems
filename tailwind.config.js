/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        red: {
          600: '#D40000',
          700: '#B30000',
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(#E8E8E8 1px, transparent 1px), linear-gradient(to right, #E8E8E8 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
};
