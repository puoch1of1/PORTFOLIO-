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
          dark: '#0F0F0F',
          charcoal: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#4338CA',
          light: '#6366F1',
          subtle: '#EEF2FF',
          muted: '#818CF8',
          deep: '#3730A3',
        },
        secondary: {
          gray: '#6B7280',
          dark: '#374151',
          light: '#F9FAFB',
        },
        warm: {
          50: '#FAFAF8',
          100: '#F5F3EF',
          200: '#E8E4DE',
          300: '#D4CFC7',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#FAFAFA',
          muted: '#F4F4F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'editorial': '0.08em',
        'wide-heading': '0.04em',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

