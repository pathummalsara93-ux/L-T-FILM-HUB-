/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      /* ✅ Gradient animation for gaming mode */
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px #ff00ff, 0 0 20px #00ffff" },
          "50%": { boxShadow: "0 0 20px #ff00ff, 0 0 40px #00ffff" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },

      animation: {
        gradient: "gradientMove 6s ease infinite",
        "gradient-slow": "gradientMove 12s ease infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        flicker: "flicker 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
