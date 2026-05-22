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
          ivory: "#fafafa",
          mint: "#f5f7f8",
          champagne: "#f1f3f5",
          sand: "#e8ecef",
          surface: "#ffffff",
          outline: "#d2d5d9",
          ink: "#212326",
          muted: "#616161",
          accent: "#8ab9db",
          accentDark: "#6a8eb8",
          teal: {
            light: "#eef4f1",
            DEFAULT: "#7d9b8f",
            mid: "#6b8f82",
            dark: "#4d6b62",
          },
          aqua: {
            light: "#f0f4fa",
            DEFAULT: "#c5d4ea",
            bright: "#a8b9db",
          },
          slate: {
            DEFAULT: "#2a2b28",
            light: "#4a4d52",
            dark: "#1a1b18",
          },
          navy: {
            DEFAULT: "#3d4a56",
            light: "#5c6b78",
          },
          blue: {
            light: "#eef2f8",
            DEFAULT: "#8ab9db",
            dark: "#5a7a9e",
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
        soft: "0 2px 10px -2px rgb(33 35 38 / 0.06), 0 8px 24px -8px rgb(33 35 38 / 0.05)",
        lift: "0 12px 40px -12px rgb(33 35 38 / 0.1)",
        glow: "0 0 0 1px rgb(210 213 217 / 0.85)",
        "glow-teal": "0 0 24px -4px rgb(138 185 219 / 0.4)",
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
          "clamp(2.85rem, 6.4vw, 5rem)",
          {
            lineHeight: "0.96",
            letterSpacing: "-0.03em",
            fontWeight: "500",
          },
        ],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #8ab9db 0%, #a8b9db 45%, #9eb5a8 100%)",
        "brand-gradient-soft":
          "linear-gradient(180deg, #ffffff 0%, #fafafa 40%, #f5f7f8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
