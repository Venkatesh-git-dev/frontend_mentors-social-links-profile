/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        xl: "1440px",
      },

      fontFamily: { sans: ["Inter", "sans-serif"] },

      colors: {
        primary: "hsl(75, 94%, 57%)",
        gray: "hsl(0, 0%, 20%)",
        "gray-dark": "hsl(0, 0%, 12%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
