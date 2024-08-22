/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./coffeeshop/**/*.{html,js}", // busca en todos los archivos HTML y JavaScript dentro de la carpeta coffeeshop y sus subdirectorios
    "./reservadevuelos/**/*.{html,js}", // busca en todos los archivos HTML y JavaScript dentro de la carpeta reservadevuelos y sus subdirectorios
    "./menus/**/*.{html,js}",
    "./js/**/*.js",
    "./css/**/*.css",// busca en todos los archivos CSS dentro de la carpeta css y sus subdirectorios
    "./reservadevuelos/**/*.css",
    "./menus/**/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}




