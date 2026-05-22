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
          ivory: "#FAF7F1",
          cream: "#F7F2EA",
          mint: "#F3EFE8",
          champagne: "#F5F0E8",
          sand: "#EDE3D5",
          beige: "#EDE3D5",
          surface: "#FFFFFF",
          outline: "#E2D8CA",
          ink: "#22313F",
          muted: "#5A6B75",
          accent: "#6FAFA8",
          accentDark: "#5A9690",
          sage: {
            light: "#D8E2D4",
            DEFAULT: "#A8B8A0",
            dark: "#8A9A82",
          },
          teal: {
            light: "#E8F3F1",
            DEFAULT: "#6FAFA8",
            dark: "#5A9690",
          },
          aqua: {
            light: "#E8EEF3",
            DEFAULT: "#C5D6E2",
            bright: "#D4E3EC",
          },
          slate: {
            DEFAULT: "#22313F",
            dark: "#1A2630",
          },
          navy: {
            DEFAULT: "#22313F",
            light: "#3D5060",
          },
          blue: {
            light: "#E8EEF3",
            DEFAULT: "#9DB7C9",
            dark: "#7A9AAD",
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
        soft: "0 2px 12px -2px rgb(34 49 63 / 0.06), 0 8px 24px -8px rgb(34 49 63 / 0.08)",
        lift: "0 12px 40px -12px rgb(34 49 63 / 0.12)",
        glow: "0 0 0 1px rgb(226 216 202 / 0.9), 0 0 24px -4px rgb(157 183 201 / 0.28)",
        "glow-teal": "0 0 28px -6px rgb(111 175 168 / 0.32)",
        card: "0 4px 20px -8px rgb(34 49 63 / 0.08), 0 0 0 1px rgb(226 216 202 / 0.6)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #6FAFA8 0%, #7AADA6 42%, #9DB7C9 100%)",
        "brand-gradient-soft":
          "linear-gradient(180deg, #FAF7F1 0%, #F7F2EA 45%, #EDE3D5 100%)",
        "brand-gradient-clinical":
          "linear-gradient(180deg, #FAF7F1 0%, #F3EFE8 55%, #E8EEF3 100%)",
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
