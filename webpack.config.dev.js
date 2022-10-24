const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./app/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app/index.html")
    }),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ["file-loader"]
    }, {
      test: /\.html$/,
      use: ["html-loader"]
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
        // options: {
        //   implementation: require('sass'),
        // },
      }]
    }]
  }
};
