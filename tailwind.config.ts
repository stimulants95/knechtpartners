import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#F5F5F0',
          100: '#EAEADE',
          200: '#D5D5BD',
          300: '#BFC09C',
          400: '#A0A37A',
          500: '#7E9371',
          600: '#5C6B4F',
          700: '#4F6F52',
          800: '#3D5340',
          900: '#2B3A2D',
        },
        warm: {
          50: '#FAFAF7',
          100: '#F5F5F0',
          200: '#EDEDE5',
          300: '#E0E0D6',
          400: '#C8C8BC',
          500: '#A0A096',
          600: '#787870',
          700: '#50504A',
          800: '#2D2D28',
          900: '#1A1A17',
        },
        'hero-dark': '#0B1120',
        'accent-glow': '#2EC4B6',
        'accent-glow-alt': '#4FD1C5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.2s forwards',
        'slide-up-delay': 'slideUp 0.8s ease-out 0.3s forwards',
        'glow-pulse': 'glowPulse 6s ease-in-out infinite',
        'glow-pulse-delayed': 'glowPulse 6s ease-in-out 3s infinite',
        'float-cube': 'floatCube 8s ease-in-out infinite',
        'light-sweep': 'lightSweep 6s ease-in-out infinite',
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
        glowPulse: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.1)' },
        },
        floatCube: {
          '0%, 100%': { transform: 'translate3d(50px, 60px, 100px)' },
          '50%': { transform: 'translate3d(50px, 40px, 110px)' },
        },
        lightSweep: {
          '0%': { transform: 'translateX(-100%) rotate(45deg)', opacity: '0' },
          '30%': { opacity: '0.5' },
          '100%': { transform: 'translateX(200%) rotate(45deg)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
