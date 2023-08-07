/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      text: '#1b0d10',
      background: '#faf5f6',
      primary: '#254b43',
      secondary: '#c5cbe2',
      accent: '#469383',

      textDarck: '#faf5f6',
      backgroundDarck: '#1b0d10',
      primaryDarck: '#254b43',
      secondaryDarck: '#05060a',
      accentDarck: '#a0d2c8',
    },
  },
  plugins: [],
};
