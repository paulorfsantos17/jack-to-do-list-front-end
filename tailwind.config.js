/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        success: '#28A745',
        info: '#007BFF',
        danger: '#DC3545',
        white: '#F5F5F5',
        gray: {
          300: '#DCDCDC',
          400: '#777777',
          500: '#6C757D',
          700: '#333333',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
    plugins: [],
  },
}
