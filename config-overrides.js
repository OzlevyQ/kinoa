const webpack = require('webpack');

module.exports = function override(config, env) {
  // תמיד עבור דרך האובייקט config כדי לוודא שאין שגיאות
  if(!config.resolve) {
    config.resolve = {};
  }
  if(!config.resolve.fallback) {
    config.resolve.fallback = {};
  }

  // הוספת הפוליפילים
  config.resolve.fallback.stream = require.resolve('stream-browserify');
  config.resolve.fallback.timers = require.resolve('timers-browserify');

  return config;
};

module.exports = function override(webpackConfig) {
    webpackConfig.resolve.fallback = {
      ...webpackConfig.resolve.fallback, // This spreads the existing fallbacks to avoid deleting them
      "buffer": require.resolve("buffer/"),
      "timers": require.resolve("timers-browserify")
    };
  
    return webpackConfig;
  };