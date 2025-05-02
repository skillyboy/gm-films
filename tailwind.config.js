/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)'],
          montserrat: ['var(--font-montserrat)'],
        },
        colors: {
          black: '#0A0A0A',
          red: {
            600: '#DC2626',
            700: '#B91C1C',
          },
          gray: {
            800: '#1F1F1F',
            900: '#121212',
          },
        },
        transitionTimingFunction: {
          'cinema': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          slideUp: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-in-out',
          slideUp: 'slideUp 0.7s ease-out',
        },
      },
    },
    plugins: [],
  }
