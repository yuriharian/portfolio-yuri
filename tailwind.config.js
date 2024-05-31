/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(8px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(8px)' },
        },
        floatB: {
          '0%': { transform: 'translateY(12px)' },
          '50%': { transform: 'translateY(-12px)' },
          '100%': { transform: 'translateY(12px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        floatB: 'floatB 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
