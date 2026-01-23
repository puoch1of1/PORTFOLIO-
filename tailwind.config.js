/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0f0f0f',
          charcoal: '#1a1a1a',
          light: '#f5f5f5',
        },
        neutral: {
          slate: '#2d2d2d',
          gray: '#4a4a4a',
          muted: '#7a7a7a',
        },
        accent: {
          steel: '#5a7a94', // Desaturated graphite-blue
        },
        secondary: {
          subtle: '#9a9a9a',
          text: '#d4d4d4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

