/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
  	screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: {
        DEFAULT: '#fdfffcff',  // Base primary color
      },
      second: {
        DEFAULT: '#235789ff',
      },
      third: {
        DEFAULT: '#c1292eff',
      },
      fourth: {
        DEFAULT: '#f1d302ff',
      },
      fivth: {
        DEFAULT: '#020100ff',  // Green for success messages
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

 