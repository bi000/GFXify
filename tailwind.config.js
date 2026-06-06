/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00D9FF',
        'electric-blue': '#0066FF',
        'deep-navy': '#061122',
        'gfx-black': '#0a0e27',
        'gfx-dark': '#1a1f3a',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      blur: {
        '2xl': '40px',
        '3xl': '64px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow': '0 0 30px rgba(0, 217, 255, 0.5)',
        'glow-lg': '0 0 50px rgba(0, 217, 255, 0.7)',
        'glow-blue': '0 0 30px rgba(0, 102, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid': 'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, .1) 25%, rgba(0, 217, 255, .1) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .1) 75%, rgba(0, 217, 255, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, .1) 25%, rgba(0, 217, 255, .1) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .1) 75%, rgba(0, 217, 255, .1) 76%, transparent 77%, transparent)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      transitionDuration: {
        '0': '0ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '20px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(bg|text|border|shadow|ring)-(cyan|blue|pink|purple|red|orange|yellow|green)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /^(from|to|via)-(cyan|blue|pink|purple|red|orange|yellow|green)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /^(w|h)-(\d+)/,
    },
    {
      pattern: /^p(x|y|t|r|b|l)?-(0|1|2|3|4|5|6|8|10|12|16|20|24|32)/,
    },
  ],
}
