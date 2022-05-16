const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader', 'less-loader'],
        test: /\.(css|less)$/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        type: 'asset',
        test: /\.(png|jpg|jpeg|gif)$/i,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.ico', '.less', '.css', '.svg'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      // react: '/Users/turenquan/work/apipost-fe-v2/node_modules/react',
      // '@c': paths.src + '/components',
      // '@m': paths.src + '/model',
      // '@s': paths.src + '/services',
      // '@t': paths.src + '/types',
    },
  },
};
