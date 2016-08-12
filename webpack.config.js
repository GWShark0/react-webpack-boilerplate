const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./webpack/parts');

const PATHS = {
  build: path.join(__dirname, 'build'),
  script: path.join(__dirname, 'src/script'),
  style: path.join(__dirname, 'src/style')
};

const common = {
  entry: {
    app: PATHS.script
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

let config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      parts.setupBabel(PATHS.script),
      parts.setupCSS(PATHS.style)
    );
    break;
  default:
    config = merge(
      common,
      parts.setupESLint(PATHS.script),
      parts.setupBabel(PATHS.script),
      parts.setupCSS(PATHS.style),
      parts.devServer()
    );
}

module.exports = validate(config);
