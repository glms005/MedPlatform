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
          mint: "#eef7f5",
          champagne: "#e8f4f2",
          sand: "#e3efec",
          surface: "#ffffff",
          outline: "#d4e6e2",
          ink: "#2d4555",
          muted: "#5c7280",
          accent: "#4a8f86",
          accentDark: "#3d6b66",
          teal: {
            light: "#e5f3f1",
            DEFAULT: "#5ba89e",
            mid: "#4a8f86",
            dark: "#3d6b66",
          },
          aqua: {
            light: "#f0faf8",
            DEFAULT: "#b8ddd6",
            bright: "#8ec9c0",
          },
          slate: {
            DEFAULT: "#3d5f73",
            light: "#5a7d94",
            dark: "#2d4555",
          },
          navy: {
            DEFAULT: "#35586b",
            light: "#4a7084",
          },
          blue: {
            light: "#e8f4f2",
            DEFAULT: "#7eb8ae",
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
        soft: "0 2px 10px -2px rgb(61 107 102 / 0.08), 0 8px 24px -8px rgb(61 107 102 / 0.06)",
        lift: "0 12px 40px -12px rgb(61 107 102 / 0.14)",
        glow: "0 0 0 1px rgb(212 230 226 / 0.8)",
        "glow-teal": "0 0 24px -4px rgb(91 168 158 / 0.35)",
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
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #5ba89e 0%, #8ec9c0 55%, #b8ddd6 100%)",
        "brand-gradient-soft":
          "linear-gradient(180deg, #f7fbfb 0%, #eef7f5 45%, #e8f4f2 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
