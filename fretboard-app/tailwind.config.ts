import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slateDeep: '#0B0E14',
        slateSurface: '#131826',
        slateCard: '#1B2233',
        slateLine: '#2A3348',
        amber: {
          glow: '#FFB020',
          deep: '#FF8A00',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'amber-glow': '0 0 24px rgba(255, 176, 32, 0.45), 0 0 4px rgba(255, 176, 32, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
