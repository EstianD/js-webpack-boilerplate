const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: "file-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "JS Webpack Boilerplate",
      header: "js webpack title",
      metaDesc: "Webpack example description",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  mode: "development",
  output: {
    clean: true,
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    open: true,
  },
};
