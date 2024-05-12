/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
colors:{
 " dev-lightest": '#FFF5F7',
  "dev-light": '#FEB2B2',
  "dev-default": '#F56565',
  "dev-dark": '#C53030',
  "dev-darkest": '#742A2A',
}

    },
  },
  plugins: [],
}
