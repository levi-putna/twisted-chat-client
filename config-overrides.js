const path = require('path');

module.exports = function override(config, env) {
  // Change the name of the static files
  config.output.filename = 'static/js/[name].js';
  config.output.chunkFilename = 'static/js/[name].chunk.js';

  // Change the name of the CSS files
  config.plugins[5].options.filename = 'static/css/[name].css';

  return config;
};