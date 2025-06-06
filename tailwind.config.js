module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-laranja': '#ff9700',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
