const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.[hash:8].css",
    }),
  ],
  // optimization: {
  //   minimizer: [
  //     new OptimizeCssAssetsPlugin({
  //       cssProcessorOptions: {
  //         map: {
  //           inline: false,
  //           annotation: true,
  //         },
  //       },
  //     }),
  //     new TerserPlugin({
  //       terserOptions: {
  //         parse: {
  //           ecma: 8,
  //         },
  //         compress: {
  //           ecma: 5,
  //           inline: 2,
  //         },
  //         output: {
  //           ecma: 5,
  //           comments: false,
  //         }
  //       },
  //       parallel: true,
  //       cache: true
  //     }),
  //   ],
  // },
});
