const withCSS = require('@zeit/next-css');
const assetsUrl = process.env.NODE_ENV === 'production' ? '/job-tracking/' : '';

module.exports = withCSS({
  cssModules: true,
  distDir: 'build',
  assetPrefix: assetsUrl,
});
