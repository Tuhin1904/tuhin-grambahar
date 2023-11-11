/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#feb926',
        'secondary-black': '#121212BF',
        white2: '#f2f2f2',
        primary: '#7ab35b',
        'primary-black': '#121212',
      },
      fontSize: {
        17: '1.0625rem',
        18: '1.125rem',
        19: '1.1875rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        28: '1.75rem',
        30: '1.875rem',
        32: '2rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
