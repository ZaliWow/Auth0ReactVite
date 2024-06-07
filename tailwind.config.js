/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  plugins: [
    require("daisyui"),
  ],
  theme: {
    extend: {
colors:{
 " dev-lightest": '#FFF5F7',
  "dev-light": '#FEB2B2',
  "dev-default": '#F56565',
  "dev-dark": '#C53030',
  "dev-darkest": '#742A2A',
},
backgroundImage:{
  'HeroHome':'url(/public/images/HeroHome.webp)'
},


    },
  }

}

