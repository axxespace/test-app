import path from "path";
import fs from "fs";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

function loadDotEnv(file = ".env") {
  const envPath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(envPath)) return;

  const content = fs.readFileSync(envPath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const eq = line.indexOf("=");
    if (eq === -1) continue;

    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadDotEnv();

const APP_ENV = Object.keys(process.env)
  .filter((k) => k.startsWith("APP_"))
  .reduce((acc, k) => {
    acc[k] = process.env[k];
    return acc;
  }, {});

APP_ENV.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  mode: APP_ENV.NODE_ENV === "production" ? "production" : "development",

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
      { test: /\.(png|jpg|jpeg|svg|webp)$/i, type: "asset/resource" }
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
    }),

    new webpack.DefinePlugin({
      process: JSON.stringify({ env: APP_ENV }),
      "process.env": JSON.stringify(APP_ENV)
    })
  ]
};
