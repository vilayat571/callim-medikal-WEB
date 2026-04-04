/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0077CC",
          sky: "#00B4E6",
          light: "#E8F6FD",
          dark: "#003A66",
          accent: "#00D4FF",
        },
      },
    },
  },
  plugins: [],
};
