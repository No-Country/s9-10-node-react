/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // navBackground: '#D7D7D7',
        navBackground: '#ffffff',
        textPrimary: '#08212B',
        azulPrimary: '#185D81',
        azulSecundary: '#2085B0',
        azulClaroBg: '#D4EDF7',
        azulClaroBg2: '#CCE8FF',
        greyPrimary1: '#EAF0F5',
        greyPrimary2: '#F4FAFF',

        orangePrincipal: '#F0900E',
        orangeSecundary: '#EAC159'
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
        custom2: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
