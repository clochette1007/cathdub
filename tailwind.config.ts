import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F4EF',
        sage: '#7A9E87',
        'sage-dark': '#5C8068',
        'sage-light': '#A8C4B0',
        gold: '#C9A96E',
        'gold-light': '#E8D5B0',
        'warm-white': '#FDFCFA',
        'warm-gray': '#8B8680',
        'text-dark': '#2C2A27',
        'text-body': '#5C5955',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(44, 42, 39, 0.06)',
        'medium': '0 4px 40px rgba(44, 42, 39, 0.10)',
        'warm': '0 8px 60px rgba(201, 169, 110, 0.15)',
      }
    },
  },
  plugins: [],
}

export default config
