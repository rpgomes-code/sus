/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
    './constants/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins-Regular'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-semibold': ['Poppins-SemiBold'],
        'poppins-bold': ['Poppins-Bold'],
        'poppins-light': ['Poppins-Light'],
      },
      colors: {
        light: {
          text: '#11181C',
          background: '#fff',
          tint: '#0a7ea4',
          icon: '#687076',
          'tab-icon-default': '#687076',
          'tab-icon-selected': '#0a7ea4',
        },
        dark: {
          text: '#ECEDEE',
          background: '#151718',
          tint: '#fff',
          icon: '#9BA1A6',
          'tab-icon-default': '#9BA1A6',
          'tab-icon-selected': '#fff',
        },
      },
    },
  },
  plugins: [],
};
