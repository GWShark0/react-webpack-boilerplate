const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

exports.devServer = (options = {}) => ({
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: options.host || process.env.HOST,
    port: options.port || process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
});

exports.setupESLint = (paths) => ({
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: paths
      }
    ]
  }
});

exports.setupBabel = (paths) => ({
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        },
        include: paths
      }
    ]
  }
});

exports.setupCSS = (paths) => ({
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: paths
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
        include: paths
      }
    ]
  },
  postcss: () => [autoprefixer]
});
