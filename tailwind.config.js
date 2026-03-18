/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5F2138',
          secondary: '#61253B',
          muted: '#8E6874',
          almond: '#D6C4C4',
          smoke: '#F8F5F4',
        },
        semantic: {
          canvas: '#F8F5F4',
          surface: '#FFFFFF',
          surfaceMuted: '#D6C4C4',
          textPrimary: '#5F2138',
          textSecondary: '#61253B',
          textMuted: '#8E6874',
          borderSoft: '#D6C4C4',
          borderStrong: '#8E6874',
          actionPrimary: '#5F2138',
          actionPrimaryHover: '#61253B',
          actionGhostHover: '#D6C4C4',
          link: '#61253B',
          linkHover: '#5F2138',
          focus: '#8E6874',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 24px rgba(95, 33, 56, 0.1)',
        card: '0 14px 34px rgba(95, 33, 56, 0.12)',
      },
      borderRadius: {
        soft: '0.625rem',
        panel: '0.875rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        content: '72rem',
        prose: '46rem',
      },
      lineHeight: {
        snugger: '1.15',
      },
      letterSpacing: {
        elegant: '-0.01em',
      },
    },
  },
  plugins: [],
}

