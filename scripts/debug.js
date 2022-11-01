const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config');

const devConfig = {
  entry: path.resolve(__dirname, '../debug/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[contenthash:4].js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    historyApiFallback: false,
    hot: true,
    // host: '127.0.0.1',
    proxy: {
      '/': {
        bypass(req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          }
        },
      },
    },
  },
  devtool: 'source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'ADesign UI组件库 - 开放、极简、共建 - By Apipost FE',
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
};

module.exports = merge(common, devConfig);
