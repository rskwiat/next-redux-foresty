const path = require('path');
const webpack = require('webpack');


const paths = {
  root: path.join(__dirname + '/src'),
  build: '../build',
};

module.exports = {
  distDir: paths.build,
  webpack: config => {
    config.resolve.alias['~'] = paths.root;
    return config;
  }
};