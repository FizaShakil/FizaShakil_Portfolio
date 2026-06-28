/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom, 0px)',
        'nav': '3.5rem',
      },
      minHeight: {
        'screen-nav': 'calc(100svh - 3.5rem)',
        'touch': '2.75rem',
      },
      fontSize: {
        'display': ['clamp(1.75rem, 5vw + 0.5rem, 3.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.5rem, 3vw + 0.5rem, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subheading': ['clamp(1.125rem, 2vw + 0.25rem, 1.5rem)', { lineHeight: '1.35' }],
        'body': ['clamp(0.9375rem, 1vw + 0.5rem, 1.0625rem)', { lineHeight: '1.65' }],
        'caption': ['clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'prose': '65ch',
        'section': '72rem',
      },
    },
  },
  plugins: [],
};
