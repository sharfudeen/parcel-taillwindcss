module.exports = {
  purge: {
    mode: "all",
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.js", "./src/*.html", "./src/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
