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
        test: /\.(less)$/,
      },
      {
        use: ['file-loader'],
        test: /\.(css)$/,
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
      // '@c': paths.src + '/components',
      // '@m': paths.src + '/model',
      // '@s': paths.src + '/services',
      // '@t': paths.src + '/types',
    },
  },
};
