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
        'darkBlue-900': '#151922',
        'darkBlue-800': '#1C222E',
        'darkBlue-700': '#20252F',
        'darkBlue-600': '#282E3C',
        'btnText': '#111827',
        'dsButton': '#1B1E25',
        'play': '#3DF7CF',
        'playActive': '#3AD8B6',
        'dict': '#F7CE3D',
        'dictActive': '#E1BC3B',
        'submit': '#E1F353',
        'submitAct': '#C6D647',
        'menu': '#a2bdfd',
        'menuActive': '#9cb5ee',
        'mistake': '#B20101',
        'mistakeAct': '#9D0202',
        'creditGreen': '#22D07B',
        'creditGreenAct': "#21BA6F",
        'creditPurple': '#4F22D0',
      },
      gridTemplateColumns: {
        'words': 'repeat(auto-fit, minmax(15rem, 1fr))',
        'alphabet': 'repeat(auto-fit, minmax(11rem, 1fr))',
      }
    },
  },
  plugins: [],
};
