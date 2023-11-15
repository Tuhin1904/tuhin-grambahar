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
        site: {
          orange: '#ffba53',
          gold: '#ffbb1d',
        },
      },
      fontSize: {
        11: '0.6875rem',
        13: '0.8125rem',
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
      maxHeight: {
        96: '24rem',
        128: '32rem',
        160: '40rem',
        192: '48rem',
      },
      spacing: {
        13: '3.25rem',
        18: '4.5rem',
        22: '5.5rem',
        100: '25rem',
        128: '32rem',
        160: '40rem',
        192: '48rem',
      },
      width: {
        '1/2': '50%',
        '1/3': '33.3333%',
        '2/3': '66.6667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
