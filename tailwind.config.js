/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          main: '#709dd8',
          sub: '#a4cafe',
        },
        gray: {
          footer: '#5e6c77',
          text: {
            t1: '#808080',
            t2: '#7e8992',
            t3: '#5e6c77',
          },
          border: '#e2e2e2',
        },
      },
      fontSize: {
        sm: '0.625rem',
      },
    },
  },
  plugins: [],
}
