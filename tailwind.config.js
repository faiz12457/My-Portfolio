/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        bestermind: ['BestermindRegular', 'sans-serif'],
        bigShoulders: ['"Big Shoulders Text"', 'sans-serif'],
      },

      boxShadow: {
        'custom': '3px 3px 6px 0px rgba(255, 255, 255, 0.25), -3px -3px 6px 0px rgba(0, 0, 0, 0.314)',
        'customInput':'rgba(255, 255, 255, 0.063) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.376) -3px -3px 6px 0px inset',
      },
    },
  },
  plugins: [],
  
}
