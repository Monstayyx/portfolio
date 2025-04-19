/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e9ff',
          300: '#75dbff',
          400: '#2cc7ff',
          500: '#06adef',
          600: '#008acb',
          700: '#006ea4',
          800: '#005c87',
          900: '#064c70',
        },
        secondary: {
          50: '#edfcf9',
          100: '#d3f7f0',
          200: '#aaeee2',
          300: '#73e0d1',
          400: '#39c7ba',
          500: '#1daa9f',
          600: '#148a83',
          700: '#136e6a',
          800: '#145856',
          900: '#154948',
        },
        dark: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b0bacc',
          400: '#8594af',
          500: '#657595',
          600: '#4f5c7b',
          700: '#404a64',
          800: '#363f54',
          900: '#1a1f2c',
          950: '#0d0f16',
        },
        accent: {
          50: '#fef2f3',
          100: '#fee5e7',
          200: '#fccfd4',
          300: '#faa9b3',
          400: '#f57a8c',
          500: '#eb4d67',
          600: '#d42a51',
          700: '#b21e46',
          800: '#941b42',
          900: '#7d1a3f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};