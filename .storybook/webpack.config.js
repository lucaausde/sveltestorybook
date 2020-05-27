const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const magicImporter = require("node-sass-magic-importer");

module.exports = async ({ config, mode }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      {
        test: /\.svelte$/,
        loader: "svelte-loader",
        options: {
          emitCss: true,
          preprocess: require("svelte-preprocess")({
            scss: {
              importer: [magicImporter()],
            },
          }),
        },
      },
      {
        test: [[/\.css$/], [/\.s[ac]ss$/i]],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              import: true,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                importer: magicImporter(),
              },
            },
          },
        ],
      },
      {
        test: /\.(png|PNG|tiff|jpg|jpeg|JPG|JPEG|gif|mp4|svg|ttf|woff(2)|eot|ico)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [...config.plugins, new MiniCssExtractPlugin()],
});
