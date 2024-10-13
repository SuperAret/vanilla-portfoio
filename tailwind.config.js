// tailwind.config.js
module.exports = {
  content: ["./*.html"], // Include your HTML files
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
      colors: {
        primary: 'hsl(190, 69%, 61%)', // Equivalent to --first-color
        title: 'hsl(190, 8%, 15%)',   // Equivalent to --title-color
        text: 'hsl(190, 8%, 45%)',    // Equivalent to --text-color
        lightText: 'hsl(190, 8%, 65%)',
        bgLight: 'hsl(190, 60%, 99%)',
      },
    },
  },
  plugins: [],
}
