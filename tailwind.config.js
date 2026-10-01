/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', '"Google Sans Flex"', '"Product Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ocean: {
          950: '#03141a',
          900: '#07242c',
          800: '#0b3943',
          700: '#10535e',
          600: '#157582',
          500: '#1e9caa',
          400: '#2ec5d3',
          300: '#6ce0ea',
          200: '#aef0f6',
          100: '#dbf9fb',
          50: '#f0fdfe',
        },
        sand: {
          50: '#fbf9f5',
          100: '#f5f0e6',
          200: '#ebdccb',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        'glass-card': '0 20px 50px rgba(0, 0, 0, 0.35)',
        'glass-inset': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
        'glass-glow': '0 0 40px rgba(46, 197, 211, 0.2)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
