/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        animation: {
          "spin-slow": "spin 3s linear infinite", 
        },
      },
    },
    plugins: [],
  };