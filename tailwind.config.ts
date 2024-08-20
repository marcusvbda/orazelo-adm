import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 186, 201,<alpha-value>)",
        "primary-100": "rgb(204, 243, 245,<alpha-value>)",
        "primary-300": "rgb(15, 196, 199,<alpha-value>)",
        "primary-500": "rgb(0, 186, 201,<alpha-value>)",
        "primary-600": "rgb(2, 133, 150,<alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
