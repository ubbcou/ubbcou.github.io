const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: [require.resolve('./polyfills'), 'babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, '../', '../'),
    filename: '[id].[chunkhash].js'
  },
  devtool: '',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: /src/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /.(css)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Welcome to Lalatina',
      template: 'index.html',
    }),
    new CleanWebpackPlugin(['*.js'], {
      root: path.resolve(__dirname, '../', '../'),
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}