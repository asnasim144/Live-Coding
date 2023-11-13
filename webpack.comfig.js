const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);