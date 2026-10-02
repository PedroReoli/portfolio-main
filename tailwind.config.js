const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "280px",
        xs: "375px",
        sm: "425px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1440px",
        "4xl": "1536px",
        "5xl": "1920px",
      },
      colors: {
        border: "hsl(var(--border, 215 28% 17%))",
        input: "hsl(var(--input, 215 28% 17%))",
        ring: "hsl(var(--ring, 221 83% 53%))",
        background: "hsl(var(--background, 222 47% 4%))",
        foreground: "hsl(var(--foreground, 210 40% 98%))",
        primary: {
          DEFAULT: "var(--color-primary, #1d68f2)",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "var(--color-secondary, #111622)",
          foreground: "#f0f6fc",
        },
        muted: {
          DEFAULT: "#161c2a",
          foreground: "#8b949e",
        },
        accent: {
          DEFAULT: "#00d4ff",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "#0e131f",
          foreground: "#f0f6fc",
        },
        // LOOG Brand Design System Tokens
        loog: {
          black: "#07090e",
          dark: "#0b0f19",
          card: "#0f1422",
          cardHover: "#141b2e",
          blue: "#1d68f2",
          cyan: "#00d4ff",
          gray: "#161c2a",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(29, 104, 242, 0.4)",
          white: "#f8fafc",
          mutedWhite: "#c9d1d9",
        },
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Space Mono'", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius, 0.75rem)",
        md: "calc(var(--radius, 0.75rem) - 2px)",
        sm: "calc(var(--radius, 0.75rem) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "loog-glow": "radial-gradient(circle at 50% 0%, rgba(29, 104, 242, 0.15), transparent 70%)",
        "loog-card-radial": "radial-gradient(circle at 80% 20%, rgba(29, 104, 242, 0.08), transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "reveal-slide": "reveal-slide 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "reveal-blur": "reveal-blur 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "reveal-tech-pulse": "reveal-tech-pulse 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "reveal-scanning-beam": "reveal-scanning-beam 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards",
        "reveal-fluid-bounce": "reveal-fluid-bounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      keyframes: {
        "reveal-slide": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-blur": {
          "0%": { opacity: "0", filter: "blur(12px)", transform: "translateY(10px) scale(0.98)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0) scale(1)" },
        },
        "reveal-tech-pulse": {
          "0%": { opacity: "0", transform: "scale(0.9) translateY(10px)", filter: "brightness(1.5)" },
          "50%": { opacity: "0.8", transform: "scale(1.02) translateY(-2px)", filter: "brightness(1.2)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)", filter: "brightness(1)" },
        },
        "reveal-scanning-beam": {
          "0%": { opacity: "0", clipPath: "inset(0 100% 0 0)", transform: "translateX(-10px)" },
          "100%": { opacity: "1", clipPath: "inset(0 0 0 0)", transform: "translateX(0)" },
        },
        "reveal-fluid-bounce": {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.8)" },
          "70%": { transform: "translateY(-5px) scale(1.02)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

module.exports = config
