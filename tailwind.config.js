/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        Orange: "hsl(26, 100%, 55%)",
        Paleorange: "hsl(25, 100%, 94%)",

        //  ### Neutral

        Veryvarkblue: "hsl(220, 13%, 13%)",
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        LightGrayishblue: "hsl(220, 14%, 85%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        Lightgrayishblue: "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)", //(with 75% opacity for lightbox background)
      },
    },

    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      xxl: "1320px",
    },
  },
  plugins: [],
};
