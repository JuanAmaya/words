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
        'btnText': '#111827',
        'dsButton': '#1B1E25',
        'dict': '#FFE067',
        'dictActive': '#E7CB5C',
        'submit': '#9C96E5',
        'submitAct': '#9690D3',
        'menu': '#a2bdfd',
        'menuActive': '#9cb5ee',
        'mistake': '#A3254B',
        'mistakeAct': '#962446',
        'creditGreen': '#22D07B',
        'creditGreenAct': "#21BA6F",
        'creditPurple': '#4F22D0',
        'lightGren': '#94B073',
        'lightBrown': "#B0AA73",
        'lightPurple': '#7873B0',
        'lightYellow': '#D9BB44',
        'mainText': '#2D2A32',
        'btnPurpleHov': '#9C96E5',
        'btnPurpleAct': '#9690D3',
        'markWord': '#64D0F2'
      },
      gridTemplateColumns: {
        'words': 'repeat(auto-fit, minmax(15rem, 1fr))',
        'alphabet': 'repeat(auto-fit, minmax(11rem, 1fr))',
      }
    },
  },
  plugins: [],
};
