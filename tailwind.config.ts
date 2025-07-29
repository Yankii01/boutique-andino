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
    }
  ],
};

export default config;