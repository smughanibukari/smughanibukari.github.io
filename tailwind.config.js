// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#ff8c04",
      },
      borderWidth: {
        10: "10px", 
         'autofill-background': 'transparent',
      'autofill-color': 'white'
      },

      screens: {
        // Custom Breakpoints
        "max-600": { max: "600px" },
        "max-1280": { max: "1280px" },
        "min-1281": { min: "1281px" },
        "screen-1280": "1280px",
        "screen-1281": "1281px",
        "min-1440": { min: "1440px" },
        "screen-1800": "1800px",
        "screen-2200": "2200px",
        "screen-2750": "2750px",
        "screen-3260": "3260px",
      },
    },
  },
};
