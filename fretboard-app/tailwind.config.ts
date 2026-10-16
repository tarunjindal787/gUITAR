import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slateDeep: '#0B0F19',
        slateSurface: '#131826',
        slateCard: '#1B2233',
        slateLine: '#2A3348',
        amber: {
          glow: '#FFB020',
          deep: '#FF8A00',
        },
        teal: {
          glow: '#2DE2C4',
          deep: '#0FA891',
        },
        violet: {
          glow: '#B98CFF',
          deep: '#7C4DFF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'amber-glow': '0 0 24px rgba(255, 176, 32, 0.45), 0 0 4px rgba(255, 176, 32, 0.8)',
        'teal-glow': '0 0 24px rgba(45, 226, 196, 0.4), 0 0 4px rgba(45, 226, 196, 0.75)',
        'violet-glow': '0 0 24px rgba(185, 140, 255, 0.4), 0 0 4px rgba(185, 140, 255, 0.75)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, -3%) scale(1.04)' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-3%, 2%) scale(1.06)' },
        },
        ripple: {
          '0%': { boxShadow: '0 0 0 0 currentColor', opacity: '0.6' },
          '100%': { boxShadow: '0 0 0 28px currentColor', opacity: '0' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        'drift-slow': 'driftSlow 18s ease-in-out infinite',
        ripple: 'ripple 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
