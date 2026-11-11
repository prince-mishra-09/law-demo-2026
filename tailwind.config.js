/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#14243A',
          dark: '#0D1927',
          light: '#1D3352',
          surface: '#182C46'
        },
        ivory: {
          DEFAULT: '#F7F5F0',
          light: '#FBF9F5',
          warm: '#F3EFE6',
          dark: '#EAE5D9'
        },
        gold: {
          DEFAULT: '#AE9360',
          light: '#C4AB7B',
          dark: '#8E7548',
          subtle: 'rgba(174, 147, 96, 0.15)'
        },
        charcoal: {
          DEFAULT: '#252A31',
          light: '#363C46'
        },
        secondary: '#737780',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['Arial', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
      },
      letterSpacing: {
        'widest-caps': '0.18em',
      }
    },
  },
  plugins: [],
}

