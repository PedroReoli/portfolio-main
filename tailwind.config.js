const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "280px", // Telefones muito pequenos
        xs: "375px", // iPhone SE, pequenos smartphones
        sm: "425px", // Smartphones médios
        md: "640px", // Tablets pequenos, smartphones grandes
        lg: "768px", // Tablets
        xl: "1024px", // Laptops/desktops pequenos
        "2xl": "1280px", // Desktops
        "3xl": "1440px", // Desktops grandes
        "4xl": "1536px", // Telas muito grandes
        "5xl": "1920px", // Full HD
        tall: { raw: "(min-height: 800px)" }, // Telas altas
        short: { raw: "(max-height: 600px)" }, // Telas curtas
        portrait: { raw: "(orientation: portrait)" }, // Orientação retrato
        landscape: { raw: "(orientation: landscape)" }, // Orientação paisagem
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cosmic theme colors replaced with Zinc/Slate for Taste-Skill
        cosmic: {
          bg: "#09090b", // zinc-950
          card: "#18181b", // zinc-900
          text: "#a1a1aa", // zinc-400
          accent: "#ffffff",
          border: "rgba(255,255,255,0.1)",
        },
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "radial-vignette": "radial-gradient(circle, transparent 50%, rgba(9, 9, 11, 0.8) 100%)",
        "network-gradient": "linear-gradient(to bottom, #09090b, #18181b, #09090b)",
        "network-glow": "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 80%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#94A3B8",
            a: {
              color: "#60A5FA",
              "&:hover": {
                color: "#93C5FD",
              },
            },
            h1: {
              color: "#FFFFFF",
            },
            h2: {
              color: "#FFFFFF",
            },
            h3: {
              color: "#FFFFFF",
            },
            h4: {
              color: "#FFFFFF",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ({ addUtilities }) => {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-md": {
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
        },
        ".text-shadow-lg": {
          textShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".transform-gpu": {
          transform: "translateZ(0)",
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

module.exports = config

