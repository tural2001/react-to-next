/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',

  './src/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    screens: {
      sm: '640px',
      md: '780px',
      lg: '900px',
      xl: '1060px',
      xll: '1150px',
      xxl: '1440px',
    },
  },
};
