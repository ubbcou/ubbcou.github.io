const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..'),
    filename: '[id].[chunkhash].js'
  },
  devtool: 'inline-source-map',
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
        test: /.(css|less)$/,
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
    new CleanWebpackPlugin(['*.*'], {
      root: path.resolve(__dirname, '..'),
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
}