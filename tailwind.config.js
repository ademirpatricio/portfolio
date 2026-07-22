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
        'midnight-deep':  '#020111',
        'spacy-navy':     '#0B0F38',
        'nebula-violet':  '#34216D',
        'deep-blue':      '#3a4089',
        'cosmic-blue':    '#6465F7',
        'orbit-cyan':     '#22C8E5',
        'stellar-white':  '#c7c7ff',
        'solar-gold':     '#D8B15A',
        'solar-accent':   '#D8B15A',
        'solar-orange':   '#ff9603',
        'disabled':       '#2A293D',
        'white':          '#FFFFFF',
        'white-85':       'rgba(255, 255, 255, 0.85)',
        'white-75':       'rgba(255, 255, 255, 0.75)',
        'white-65':       'rgba(255, 255, 255, 0.65)',
        'white-55':       'rgba(255, 255, 255, 0.55)',
        'white-35':       'rgba(255, 255, 255, 0.35)',
        'white-07':       'rgba(255, 255, 255, 0.07)',
      },

      // ─── TIPOGRAFIA ────────────────────────────────────────
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },

      fontSize: {
        
        'caption': ['13px', { lineHeight: '1.6' }],
        'reading': ['18px', { lineHeight: '1.8' }],

        'h2':    ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3':    ['32px', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'span':  ['13px', { letterSpacing: '0.4em'}],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.15em' }],
        
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
