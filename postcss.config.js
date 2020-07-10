module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx", "./src/**/*.js"],
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: ["./components/**/*.js", "./pages/**/*.js"],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
};
