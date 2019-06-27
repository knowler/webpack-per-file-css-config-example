const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: {
    home: './home.css',
    about: './about.css',
  },
  output: {
    publicPath: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /home\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /about\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}
