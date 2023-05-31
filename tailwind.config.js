/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/component-library/packages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'media',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      red: {
        500: '#e74c3c',
        900: '#c0392b',
      },
      green: {
        500: '#2ecc71',
        900: '#27ae60',
      },
      blue: {
        500: '#3498db',
        900: '#2980b9',
      },
      orange: {
        100: '#f39c12',
        500: '#e67e22',
        900: '#d35400',
      },
      grey: {
        300: '#ecf0f1',
        500: '#bdc3c7',
        700: '#95a5a6',
        900: '#7f8c8d',
      },
      white: '#ffffff',
      black: '#1b1c1e',
      buttercup: '#f1c40f',
      wisteria: '#8e44ad',
      meadow: '#16a085',
    },
    spacing: {
      'sm': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      '2xl': '32px',
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Times New Roman', 'Times', 'serif'],
      'mono': ['Courier New', 'monospace'],
    },
    fontSize: {
      base: '16px',
      300: '12px',
      500: '16px',
      900: '24px',
    },
    lineHeight: {
      300: '16px',
      500: '24px',
      900: '32px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px'
    }
  },
  plugins: [],
}
