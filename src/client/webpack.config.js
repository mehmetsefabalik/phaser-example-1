// @ts-nocheck
const path = require("path");

const isDevMode = (options) => options.mode === "development";

module.exports = (env, options) => {
  const config = {
    entry: "./index.ts",
    module: {
      rules: [
        {
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: "tsconfig.json",
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../../dist/client"),
    },
  };
  if (isDevMode(options)) {
    config.watch = true;
  }
  return config;
};
