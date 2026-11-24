/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        background: "#111214",
        surface: "#25272C",
        foreground: "#F5F5F7",
        accent: "#C5D2FF",
        muted: "#898D96",
        border: "#303238",

        success: "#4ADE80",
        warning: "#FBBF24",
        danger: "#F87171",
      },
    },
  },

  plugins: [],
};