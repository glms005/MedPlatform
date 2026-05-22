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
          ivory: "#f7fbfb",
          mint: "#eef6f5",
          champagne: "#f0f7f6",
          sand: "#e5f3f1",
          surface: "#ffffff",
          outline: "#d4e8e5",
          ink: "#2d4a5c",
          muted: "#5a7180",
          accent: "#4a8f86",
          accentDark: "#3d6b66",
          aqua: {
            light: "#e8f4f7",
            DEFAULT: "#b8e0db",
            bright: "#d4efeb",
          },
          teal: {
            light: "#e5f3f1",
            DEFAULT: "#4a8f86",
            dark: "#3d6b66",
          },
          slate: {
            DEFAULT: "#3d5f73",
            dark: "#2d4a5c",
          },
          navy: {
            DEFAULT: "#3d5f73",
            light: "#5a7d94",
          },
          blue: {
            light: "#e8f4f7",
            DEFAULT: "#7eb8c4",
            dark: "#3d5f73",
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
        soft: "0 2px 10px -2px rgb(61 107 102 / 0.08), 0 8px 24px -8px rgb(61 107 102 / 0.1)",
        lift: "0 12px 40px -12px rgb(61 107 102 / 0.16)",
        glow: "0 0 0 1px rgb(212 232 229 / 0.8), 0 0 24px -4px rgb(126 184 196 / 0.35)",
        "glow-teal": "0 0 28px -6px rgb(74 143 134 / 0.4)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6eb5a8 0%, #4a8f86 45%, #7eb8c4 100%)",
        "brand-gradient-soft":
          "linear-gradient(180deg, #f7fbfb 0%, #eef6f5 50%, #e8f4f7 100%)",
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
