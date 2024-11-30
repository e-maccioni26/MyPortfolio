import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#004652',
        'green-light': '#308276',
        'green': '#006A4E',
        'red-cool': '#E62F44',
        'blue-cool': '#009597',
        'blue-fonce': '#071621',
        'violet-900': '#2e1065',
        'violet-600': '#7c3aed',
        'purple-600': '#4f46e5',
      },
    },
  },
  plugins: [],
} satisfies Config;
