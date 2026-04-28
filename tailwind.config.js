/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0D1B2A',
          'primary-dark': '#0A1620',
          gold: '#00D9CB',
          'gold-dark': '#008B8B',
          text: '#2C2C2C',
          'text-light': '#6B6B6B',
          bg: '#F5F7FA',
          secondary: '#FFFFFF',
          'secondary-dark': '#E8E0D0',
          accent: '#00D9CB',
          danger: '#C0392B',
          success: '#27AE60',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'scroll-x': 'scroll-x 30s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up-card': 'slide-up-card 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
        'slide-up-sheet': 'slide-up-sheet 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up-card': {
          '0%': { transform: 'translateY(140%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up-sheet': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
