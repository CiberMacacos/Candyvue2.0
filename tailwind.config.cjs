/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    Popper: {
      'pop': 'bg-red-300 text-black w-full h-full'
    },
    extend: {

    },
  },
  plugins: [],
}
