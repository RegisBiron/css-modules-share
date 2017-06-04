const webpack = require('webpack');
const path = require('path');

const postcss = require('postcss');

const port = 3000;

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${port}`,
  'webpack/hot/only-dev-server',
  path.join(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
    publicPath: `http://localhost:${port}/`
  },
  devServer: {
    hot: true,
    open: true,
    inline: true,
    port: port,
    publicPath: '/',
    historyApiFallback: true,
    contentBase: __dirname,
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.css$/,
      use: [ 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }, {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.join(__dirname, './postcss.config.js')
          }
        }
      }]
    }]
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin()
  ]
}
