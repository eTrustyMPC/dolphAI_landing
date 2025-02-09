/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'float-slower': 'float 5s ease-in-out infinite',
        'float-bubble': 'float-bubble 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 8s linear infinite',
        'ripple': 'ripple 3s linear infinite',
        'ripple-vertical': 'ripple-vertical 3s linear infinite',
        'bubble': 'bubble 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-bubble': {
          '0%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(10px, -30px)' },
          '66%': { transform: 'translate(-10px, -60px)' },
          '100%': { transform: 'translate(0, -90px)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-25%) translateY(2%)' },
          '100%': { transform: 'translateX(-50%) translateY(0)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.95)', opacity: '0.5' },
          '50%': { transform: 'scale(1)', opacity: '0.3' },
          '100%': { transform: 'scale(0.95)', opacity: '0.5' },
        },
        'ripple-vertical': {
          '0%': { transform: 'translateY(0%)', opacity: '0.5' },
          '50%': { transform: 'translateY(50%)', opacity: '0.3' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        bubble: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '0.8' },
        },
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
        },
        crypto: {
          100: '#eef2ff',
          200: '#c7d2fe',
          300: '#818cf8',
          400: '#6366f1',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
          800: '#312e81',
          900: '#1e1b4b',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      backgroundImage: {
        'wave-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBjMzAwIDAgNDAwIDEwMCA3MjAgMTAwczQyMC0xMDAgNzIwLTEwMHY4MEgweiIgZmlsbD0iI2UwZjdmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
