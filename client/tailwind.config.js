/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // navBackground: '#D7D7D7',
        navBackground: '#ffffff',
        textPrimary: '#08212B',
        azulClaroBg: '#D4EDF7',
        azulClaroBg2: '#CCE8FF',
        azulClaroBg3: '#E5F3FF',
        greyPrimary1: '#EAF0F5',
        greyPrimary2: '#F4FAFF',
        
        orangePrincipal: '#F0900E',
        orangeSecondary: '#EAC159',
        violetPrimary: '#7A8CEB',
        violetSecondary: '#A6B2F2',
        violetTertiary: '#D3D9F8',
        violetQuaternary: '#E9ECFC',
        bluePrimary: '#186281',
        blueSecondary: '#2085B0',
        blueTertiary: '#27A3D8',
        blueQuaternary: '#52B5E0',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
        custom2: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
