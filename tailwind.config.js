/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8b5cf6",
          secondary: "#22c55e",
          accent: "#f43f5e",
          neutral: "#1a1a1a",
          "base-100": "#0d0d0d",
          info: "#38bdf8",
          success: "#10b981",
          warning: "#fbbf24",
          error: "#ef4444",
        },
      },
    ],
  },
};
