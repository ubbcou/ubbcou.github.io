const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..'),
    filename: '[id].[chunkhash].js'
  },
  devtool: 'eval',
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
      template: 'index.html',
      title: 'welcome'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
}