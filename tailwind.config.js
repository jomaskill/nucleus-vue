/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-color': '#212e3c',
        'sidebar-dark-color': '#161e26',
        'text-color': '#c7c9ce',
        'border-color': '#1a242e',
        'icon-color': '#3b949f',
        'icon-hover-color': '#161e26',
        'header-text-color': '#505a72',
        'nucleus-light-green': '#3a95a0',
      },
    },
  },
  plugins: [],
}

