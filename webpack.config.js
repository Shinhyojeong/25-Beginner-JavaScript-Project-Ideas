const path = require('path')
const HTMLWepbackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: { path: path.resolve(__dirname, 'dist'), clean: true },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWepbackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
  ],
  devServer: {
    open: true,
  },
}
