/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // DaisyUI Coffee theme colors
        primary: '#9d4b3e',
        secondary: '#e8a497',
        accent: '#f9d3b4',
        neutral: '#282c2f',
        'base-100': '#ffffff',
        'base-200': '#f1f5f9',
        'base-300': '#d1d5db',
        'base-content': '#3d4451',
        info: '#3abff8',
        success: '#36d399',
        warning: '#fbbd23',
        error: '#f87272',
      },
    },
  },
  plugins: [],
}

