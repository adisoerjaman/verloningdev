/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
            './src/**/*.{html,js}',
          ],
  theme: {
    screens: {
      'sm': '420px',
      // => @media (min-width: 576px) { ... }

      'md': '821px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      height: {
        '98' : '26rem',
        '128': '32rem',
      },
      blur: {
        'verloning': '300px',
      },
      colors: {
        'red': '#FF006B',
        'yellow': '#EDF936',
        'blue': '#5449FD',
        'cyan': '#91F0FF',
        'purple': '#A311EC',
        'orange': '#FEC852',
        'light-yellow': '#FAF2AF',
        'light-blue': '#5954FD',
        'light-red': '#EE426D',
        'light-cyan': '##EEB34C',
        'dark-blue': '#151242',
      },
      fontFamily: {
        ambit: ["Ambit", "sans-serif"],
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '2rem',
        '2xl': '4rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
