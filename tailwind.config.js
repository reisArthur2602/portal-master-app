/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["SpaceGrotesk"],
      },

      colors: {
        background: "#FAFAFB",
        foreground: "#0F172A",

        card: "#F8FAFC",
        cardForeground: "#020617",

        popover: "#FFFFFF",
        popoverForeground: "#0F172A",

        primary: "#0071FF",
        primaryForeground: "#FFFFFF",

        secondary: "#F1F5F9",
        secondaryForeground: "#475569",

        muted: "#E5E7EB",
        mutedForeground: "#6B7280",

        accent: "#E2E8F0",
        accentForeground: "#334155",

        destructive: "#DC2626",
        destructiveForeground: "#FFFFFF",

        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#2563EB",
      },
    },
  },
  plugins: [],
};
