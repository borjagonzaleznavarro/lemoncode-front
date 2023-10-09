
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const DotEnv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]___[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    port: 8080,
    devMiddleware: {
      stats: "errors-only",
    },
  },
  plugins: [
    new DotEnv({
      path: "./dev.env",
    }),
  ],
});