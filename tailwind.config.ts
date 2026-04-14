import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ede4d3',
          300: '#ddd0b8',
          400: '#c9b89a',
          500: '#b8a07e',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e2ebe2',
          200: '#c4d7c4',
          300: '#9bbc9b',
          400: '#6e9b6e',
          500: '#4e7c4e',
          600: '#3d623d',
          700: '#2e4a2e',
        },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        worksans: ['var(--font-worksans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
