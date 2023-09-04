/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ptsans:['PT Sans'],
        lato:['Lato'],
        Josefin :['Josefin Sans'],
        dancing:['Dancing Script']
        
      }
    },
  },
  plugins: [],
}