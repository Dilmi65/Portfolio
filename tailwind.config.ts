import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#182126",
        paper: "#EEF1EF",
        paperDim: "#E3E7E4",
        teal: {
          DEFAULT: "#1F6F72",
          dark: "#154F52",
          light: "#EAF2F1",
        },
        coral: {
          DEFAULT: "#D96B4F",
          dark: "#B6543C",
          light: "#FBEDE7",
        },
        gold: "#C9A227",
        line: "#D7DBD8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
