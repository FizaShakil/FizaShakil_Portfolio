/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#05070B',
        'base-2': '#080C10',
        'base-3': '#0D1318',
        surface: '#0F151B',
        line: 'rgba(255,255,255,0.08)',
        'line-strong': 'rgba(255,255,255,0.16)',
        ink: {
          DEFAULT: '#F2F4F6',
          muted: '#A6B1BA',
          faint: '#6E7A84',
        },
        accent: {
          DEFAULT: '#507e4f',
          light: '#6f9a6d',
          soft: '#8fb58d',
          deep: '#3f6a3e',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      fontSize: {
        display: ['clamp(2.05rem, 1.25rem + 3.2vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        heading: ['clamp(1.5rem, 1.375rem + 1.4vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        subheading: ['clamp(1.125rem, 1.0625rem + 0.6vw, 1.375rem)', { lineHeight: '1.28', letterSpacing: '-0.01em' }],
        body: ['clamp(0.9375rem, 0.9vw + 0.5rem, 1.0625rem)', { lineHeight: '1.7' }],
        caption: ['clamp(0.8125rem, 0.4vw + 0.5rem, 0.9375rem)', { lineHeight: '1.6' }],
        kicker: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em', textTransform: 'uppercase' }],
      },
      letterSpacing: {
        wide: '0.02em',
        widest: '0.12em',
      },
      maxWidth: {
        prose: '58ch',
        section: '76rem',
        'measure': '72ch',
      },
      spacing: {
        nav: '3.25rem',
      },
      minHeight: {
        'screen-nav': 'calc(100svh - 3.25rem)',
        touch: '2.75rem',
      },
      boxShadow: {
        card: '0 24px 48px -24px rgba(0,0,0,0.7)',
        'card-lg': '0 40px 80px -32px rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
};