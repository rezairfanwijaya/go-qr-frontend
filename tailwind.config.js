/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily : {
      'Kanit' :['Kanit', 'sans-serif']
    },
    colors : {
      'primary' : '#F6F8FD',
      'text-dark' : '#2B2B2B',
      'text-mute' : '#808080',
      'orange' : '#F38704',
      'white' : '#FFFFFF',
      'green' : '#08A24D'
    }
  },
  plugins: [],
}
