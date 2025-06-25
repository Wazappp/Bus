/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'azul-oscuro': '#0d2c4e',
        'amarillo-dorado': '#e3a518',
        'blanco-crema': '#f8f6f3',
        'gris-suave': '#7b7d80',
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          500: '#0d2c4e',
          600: '#0a2441',
          700: '#081d34',
          800: '#061527',
          900: '#040e1a',
        },
        secondary: {
          50: '#fef7e0',
          100: '#fdecc1',
          500: '#e3a518',
          600: '#d4930a',
          700: '#b07c08',
          800: '#8c6306',
          900: '#684a05',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
};