module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue":"#0E77FF"
      },
      boxShadow: {
        'custom-blue': '0px 40px 60px rgba(14, 119, 255, 0.15)',
      },
      
    },
  },
  plugins: [
       require('@tailwindcss/forms'),
      require('daisyui'),
  ],
}
