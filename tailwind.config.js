/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'slide-up': 'slide-up 1.5s ease-out forwards',
      },
      screens: {
              sm: '640px',
              md: '768px',
              lg: '1024px',
              xl: '1280px',
            },

    },
  },
  plugins: [],
};
