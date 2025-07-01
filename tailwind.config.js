/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        gold: {
          50: '#fefdf4',
          100: '#fef9e7',
          200: '#fef0c7',
          300: '#fde2a7',
          400: '#fcc419',
          500: '#d4af37',
          600: '#b8941f',
          700: '#9c7916',
          800: '#805f0f',
          900: '#64460a',
        },
        cream: {
          50: '#fefefe',
          100: '#faf7f2',
          200: '#f5f0e8',
          300: '#f0e9de',
          400: '#e6ddd0',
          500: '#d4c5b0',
          600: '#b8a082',
          700: '#9c7c54',
          800: '#805a26',
          900: '#64460a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};