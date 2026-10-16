/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1c1410',
        roast: '#2b1e17',
        crema: '#f3e9dc',
        latte: '#d9c3a5',
        boom: '#d8903a',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '1200px' },
    },
  },
  plugins: [],
}
