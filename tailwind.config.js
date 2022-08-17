/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:
      {
        primary:"#00B728",
        secondary:"#ff8000",
        dim:"#80F59A",
        blackdim:"#BFBFBF",
        grey:"#595959",
        redish: "#ff4f4f",
        transparent:"rgba(0,0,0,0.2)"    
      },
      fontFamily:{
        'Bahnschrift':['Bahnschrift'],
      }
    },
  },
  plugins: [],
}
