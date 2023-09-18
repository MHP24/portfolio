import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'c1': '#121212',
        'c2': '#2B2828',
        'c3': '#FFFFFF',
        'c3-1': '#FFFFFF18',
        'c4': '#090909',
        'c5': '#4B4B4B',
        'c6': '#232323',
        'c7': '#1D1D1D',
      },
      fontFamily: {
        'primary': ['"League Spartan"'],
        'secondary': ['"Dancing Script"']
      }
    },
  },
  plugins: [],
};
export default config;
