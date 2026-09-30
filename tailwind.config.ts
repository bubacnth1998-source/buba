import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coach: {
          bg: "#07090D",
          panel: "#0D1118",
          panel2: "#111722",
          blue: "#2F7BFF",
          blue2: "#5C9BFF",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(47,123,255,.16)",
      },
    },
  },
  plugins: [],
};

export default config;
