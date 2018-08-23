const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  context: paths.contextPath,
  entry: [
    require.resolve('./polyfills'),
    'babel-polyfill',
    paths.appIndexJs
  ],
  output: {
    path: paths.outputPath,
    filename: '[id].[chunkhash].js'
  },
  resolve: {
    alias: {
      Components: paths.ComponentsPath,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Welcome to Lalatina',
      template: paths.appHtml,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}