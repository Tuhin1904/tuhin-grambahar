/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#7ab35b',
        secondary: '#feb926',
        white2: '#f2f2f2',
      },
      spacing: {
        22: '5.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
