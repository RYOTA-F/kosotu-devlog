/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sp: { max: '540px' },
        tb: { max: '960px' },
        pc: '960px',
      },
      colors: {
        blue: {
          main: '#709dd8',
          sub: '#a4cafe',
          link: '#1176d4',
        },
        yellow: {
          list: '#fcf9ee',
        },
        green: {
          list: '#85dd7b',
        },
        gray: {
          footer: '#5e6c77',
          list: '#f7f7f7',
          pagination: '#dedede',
          text: {
            t1: '#808080',
            t2: '#7e8992',
            t3: '#5e6c77',
            t4: '#63707b',
          },
          border: '#e2e2e2',
        },
        black: {
          text: '#333333',
        },
      },
      fontSize: {
        sm: '0.625rem',
      },
      lineHeight: {
        1: '4px',
      },
    },
  },
  plugins: [],
}
