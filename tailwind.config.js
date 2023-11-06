/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#7ab35b',
      },
      spacing: {
        22: '5.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
