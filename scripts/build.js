const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config');

const webpackConfig = {
  entry: {
    index: path.resolve(__dirname, '../examples/index.tsx'),
    vendors: ['react', 'classnames'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    // libraryTarget: 'commonjs', // 重要！
  },
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'ADesign UI组件库 - 开放、极简、共建 - By Apipost FE',
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, '../public'), to: '../dist' }],
    }),
  ],
};

module.exports = merge(common, webpackConfig);
