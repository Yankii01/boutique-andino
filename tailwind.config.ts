// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      rotate: {
        '1': '1deg',
      },
      colors: {
        'peru-tierra': '#A6806A',
        'peru-arena': '#D4C1A5',
        'peru-madera': '#7F5539',
        'peru-rojo': '#C05746',
        'peru-verde': '#8B9A8B',
        'peru-crema': '#EFEBE0',
        'brand-brown': '#8D6E5C',
        'brand-background': '#E5D0B5',
        'beige': 'rgb(245, 245, 220)',
      },
      fontFamily: {
        playlist: ['Playlist-Script', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'dot-fade': 'dotFade 1.5s infinite',
        'gradient-move': 'gradient-move 10s ease infinite',
        'appear-every-10s': 'appear-every-10s 10s infinite',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-out forwards',
        'pulse-hover': 'pulse-hover 1s infinite',
        'blink-slow': 'blink-slow 1s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        dotFade: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'appear-every-10s': {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '20%': { opacity: '1' },
          '30%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-hover': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'blink-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
      }
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const animationDelays = theme('animationDelay', {});
      const newUtilities = Object.entries(animationDelays).map(([key, value]) => ({
        [`.animation-delay-${key}`]: { 'animation-delay': value },
      }));
      addUtilities(newUtilities);

      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
          'text-shadow': '4px 4px 8px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      }, ['responsive', 'hover']);
    }
  ],
};

export default config;