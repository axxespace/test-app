import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: path.resolve(process.cwd(), "src/index.tsx"),
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/"
  },
  devtool: "source-map",
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      "@mui/styled-engine": "@mui/styled-engine-sc"
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }],
              ["@babel/preset-typescript"]
            ],
            plugins: [["babel-plugin-styled-components", { pure: true }]]
          }
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpg|jpeg|svg|webp)$/i,
        type: "asset/resource"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    client: { overlay: true }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "public/index.html")
    })
  ]
};
