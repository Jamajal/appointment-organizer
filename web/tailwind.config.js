/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '479px' },
      md: { min: '480px', max: '1023px' },
      lg: { min: '1024px' },
    },
    extend: {},
  },
  plugins: [],
};
