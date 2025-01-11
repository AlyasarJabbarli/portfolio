/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,js}"],
  theme: {

    extend: {
      colors: {
        'span_color': '#323232',
        'span_color_active': "#0022ff",
        'border_color': '#32323233'
      },
    },
  },
  plugins: [],
}

