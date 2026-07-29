/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {

      // ─── CORES — Vastidão Contemplativa ───────────────────
      colors: {
        // Primitives
        'midnight-deep':     '#020111',
        'spacy-navy':        '#0B0F38',
        'nebula-violet':     '#34216D',
        'deep-blue':         '#3A4089',
        'cosmic-blue':       '#6465F7',
        'cosmic-blue-light': '#7B7CF9',
        'stellar-white':     '#C7C7FF',
        'orbit-cyan':        '#22C8E5',
        'solar-gold':        '#D8B15A',
        'solar-orange':      '#FF9603',
        'space-gray':        '#2A293D',
        'white':             '#FFFFFF',
        'white-80':          'rgba(255, 255, 255, 0.80)',
        'white-60':          'rgba(255, 255, 255, 0.60)',
        'white-50':          'rgba(255, 255, 255, 0.50)',
        'white-25':          'rgba(255, 255, 255, 0.25)',
        'white-10':          'rgba(255, 255, 255, 0.10)',
      },

      // ─── TIPOGRAFIA ────────────────────────────────────────
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },

      fontSize: {

        'h1':    ['72px', { lineHeight: '1.1',  letterSpacing: '-0.03em' }],
        'h2':    ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3':    ['32px', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'h4':    ['24px', { lineHeight: '1.0',  letterSpacing: '-0.01em' }],

        'body':  ['17px', { lineHeight: '1.75' }],
        'small': ['13px', { lineHeight: '1.6' }],
        'label': ['11px', { lineHeight: '1.4',  letterSpacing: '0.15em' }],
        'span':  ['13px', { letterSpacing: '0.3em' }],

      },

      fontWeight: {
        light:    '300',
        regular:  '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
      },

      // ─── CONTAINER ─────────────────────────────────────────
      maxWidth: {
        container: '1200px',
      },

      // ─── BORDAS ────────────────────────────────────────────
      borderRadius: {
        card: '16px',
        btn:  '8px',
        icon: '12px',
      },

      // ─── SOMBRAS ───────────────────────────────────────────
      boxShadow: {
        'glow-blue': '0 0 24px rgba(100, 101, 247, 0.25)',
        'glow-cyan': '0 0 12px rgba(34, 200, 229, 0.35)',
      },

      // ─── BACKDROP BLUR ─────────────────────────────────────
      backdropBlur: {
        nav: '20px',
      },

    },
  },
  plugins: [],
}
