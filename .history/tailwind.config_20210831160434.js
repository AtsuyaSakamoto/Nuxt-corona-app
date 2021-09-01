module.exports = {
  purge: {[
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js}",
    "./nuxt.config.{js}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '428px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
