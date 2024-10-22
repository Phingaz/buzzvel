import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        "main-light": "var(--main-light)",
        "main-dark": "var(--main-dark)",
        secondary: "var(--secondary)",
        "secondary-orange": "var(--secondary-orange)",
        "secondary-orange-dark": "var(--secondary-orange-dark)",
        "secondary-light": "var(--secondary-light)",
        "blue-text": "var(--blue-text)",
      },
    },
  },
  plugins: [],
};
export default config;
