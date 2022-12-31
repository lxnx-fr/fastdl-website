const tw = require("tailwindcss");
const ap = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const cssnanoConfig = cssnano({
  preset: "advanced",
});
const purgecssConfig = purgecss({
  content: [
    `./**/*.html`,
    `./src/**/*.vue`,
    `./src/**/*.sass`,
    `./dist/**/*.css`,
  ],
  defaultExtractor(content) {
    const contentWithoutStyleBlocks = content.replace(
      /<style[^]+?<\/style>/gi,
      ""
    );
    return (
      contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    );
  },
  safelist: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /data-v-.*/,
    /\s?[a-zA-Z0-9]+-\[.*?\]/,
  ],
});

module.exports = {
  plugins: [
    tw({}),
    ...(process.env.NODE_ENV === "production"
      ? [ap({}), purgecssConfig, cssnanoConfig]
      : []),
  ],
};
