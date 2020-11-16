const path = require('path');
const indexPath = require.resolve('./src/html/index.html');

module.exports = {
  mode: 'production',
  entry: indexPath,
  output: {
    filename: 'index.build.html',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].css',
            },
          },
          'extract-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          'extract-loader',
          'html-loader',
        ],
      },
    ],
  },
};
