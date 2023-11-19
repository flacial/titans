/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Alata',
      },
      colors: {
        'dark-blue': 'var(--card-bg)',
        bluey: 'var(--color-text)',
        'light-bluey': '#37CBF0',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [],
}
