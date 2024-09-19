/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss,css,js}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing custom colors
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-primary': '#BB86FC',
        'dark-secondary': '#03DAC6',
        'dark-error': '#CF6679',
        'dark-on-bg': '#E1E1E1',
        'dark-on-surface': '#FFFFFF',
        'dark-on-primary': '#000000',
        'dark-on-secondary': '#000000',
        'paragraph-text': '#000000',

        // New colors for the updated design
        teal: {
          500: '#38B2AC', // Added a mid-tone teal
          600: '#319795', // Added a darker teal
          800: '#285E61',
        },
        purple: {
          300: '#D6BCFA', // Light purple for headings
          500: '#9F7AEA',
          600: '#805AD5',
          800: '#553C9A', // Dark purple for text
          900: '#44337A',
        },
        yellow: {
          300: '#FAF089', // Light yellow for instructions
        },
        green: {
          300: '#9AE6B4', // Light green for positive points
        },
        red: {
          400: '#FC8181', // Light red for cautionary notes
        },
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}
