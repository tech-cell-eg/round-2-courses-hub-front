import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "rgba(255, 0, 0, 1)", 
      },
    },
  },
  plugins: [],
};

export default config;
