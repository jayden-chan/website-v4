const glob = require('glob');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('postcss-clean'),
    purgecss({
      content: [...glob.sync(`build/**/*.html`, {nodir: true})],
      extractors: [
        {
          extractor: class {
            static extract(content) {
              return content.match(/[A-Za-z0-9-_:/]+/g) || [];
            }
          },
          extensions: ['html'],
        },
      ],
    }),
  ],
};
