import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "Nunito"],
        nunito: ["Nunito", "Montserrat"],
      },
      colors: {
        blueB50: "#E5F6FC",
      }
    },
  },
  plugins: [],
} satisfies Config;
