const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, "/client/src/index.jsx"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js"
    clean: true,
  },
};