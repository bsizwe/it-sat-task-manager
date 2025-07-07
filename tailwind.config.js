/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sageGreen: {
          DEFAULT: '#a2ab81',
          50: '#f6f7f3',
          100: '#eaede2',
          200: '#d5dbc7',
          300: '#b8c299',
          400: '#a2ab81',
          500: '#8a9470',
          600: '#6d7757',
          700: '#565c46',
          800: '#47493b',
          900: '#3d3f33',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}