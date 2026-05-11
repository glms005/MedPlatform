import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: "#faf9f6",
          champagne: "#f4efe5",
          sand: "#f3efe6",
          surface: "#ffffff",
          outline: "#e5e0d8",
          ink: "#1c2220",
          muted: "#5f6764",
          accent: "#2c4f4c",
          accentDark: "#1f3836",
          blue: {
            light: "#e8f0f4",
            DEFAULT: "#4a7c9e",
            dark: "#3a6380",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-display)", "var(--font-serif)", "Georgia", "serif"],
        georgian: [
          "var(--font-ka)",
          "var(--font-sans)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(28 34 32 / 0.06), 0 8px 24px -8px rgb(28 34 32 / 0.08)",
        lift: "0 12px 40px -12px rgb(28 34 32 / 0.12)",
        glow: "0 0 0 1px rgb(232 224 216 / 0.6)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        DEFAULT: "220ms",
      },
      maxWidth: {
        editorial: "42rem",
        "editorial-wide": "58rem",
      },
      fontSize: {
        "hero-display": [
          "clamp(2.85rem,6.4vw,5rem)",
          {
            lineHeight: "0.96",
            letterSpacing: "-0.03em",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
