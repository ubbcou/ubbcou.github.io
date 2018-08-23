const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths.js');
const autoprefixer = require('autoprefixer');
module.exports = merge(common, {
  mode: 'production',
  devtool: '',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: /src/,
        use: {
          loader: 'babel-loader',
        }
      }, {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
    ]
  },
  plugins: [
    // 清除除 .js文件
    new CleanWebpackPlugin(['*.js'], {
      root: paths.outputPath
    })
  ],
})