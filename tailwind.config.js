module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './payload/**/*.{ts,js}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
        accent2: 'var(--color-accent-2)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
      },
    },
  },
  plugins: [],
};
