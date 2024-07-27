/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf8ff",
          100: "#d6edff",
          200: "#b6e1ff",
          300: "#85d0ff",
          400: "#4bb5ff",
          500: "#2292ff",
          600: "#0a71ff",
          700: "#0459f1",
          800: "#0a48c3",
          900: "#10439f",
          950: "#0f285c",
        },
        secondary: {
          50: "#faf7fd",
          100: "#f2ecfb",
          200: "#e7dcf8",
          300: "#d5c0f2",
          400: "#bb97e9",
          500: "#a06fdd",
          600: "#874ccc",
          700: "#743db3",
          800: "#633693",
          900: "#512d76",
          950: "#351655",
        },
      },
    },
  },
  plugins: [],
};
