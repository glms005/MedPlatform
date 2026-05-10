import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#F7E9E1",
          surface: "#FFF7F2",
          outline: "#E8CFC6",
          ink: "#3F2A2A",
          muted: "#6B4E4E",
          accent: "#D98A84",
          accentDark: "#C86D69",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(63, 42, 42, 0.08)",
      },
    }
  },
  plugins: []
};

export default config;

