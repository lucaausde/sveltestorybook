const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const RobotsPlugin = require("@tanepiper/robots-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const magicImporter = require("node-sass-magic-importer");
const webpack = require("webpack");
const robotstxt = require("./pwa.robotstxt");
const path = require("path");
// const JavaScriptObfuscator = require("webpack-obfuscator");
// const CompressionPlugin = require("compression-webpack-plugin");

const domain = "https://www.example.com";

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    return {
      mode: "development",
      entry: "./src/index.js",
      resolve: {
        alias: {
          svelte: path.resolve("node_modules", "svelte"),
        },
        extensions: [".mjs", ".js", ".svelte"],
        mainFields: ["svelte", "browser", "module", "main"],
      },
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.html$/,
            exclude: /node_modules/,
            use: { loader: "html-loader" },
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
            test: /\.js$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
          },
          {
            test: /\.svelte$/,
            use: {
              loader: "svelte-loader",
              options: {
                dev: argv.mode === "development" ? true : false,
                emitCss: true,
                hotReload: true,
                preprocess: require("svelte-preprocess")({
                  scss: {
                    importer: [magicImporter()],
                  },
                }),
              },
            },
          },
          {
            test: /\.(png|PNG|tiff|jpg|jpeg|JPG|JPEG|gif|mp4|svg|ttf|woff(2)|eot|ico)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  outputPath: "static/assets",
                  name: "[name].[hash].[ext]",
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "public/index.html"),
        }),
        new MiniCssExtractPlugin({
          filename: "static/css/[name].[hash].css",
          chunkFilename: "static/css/[name].[id].[hash].css",
        }),
        new OptimizeCssAssetsPlugin({
          cssProcessor: require("cssnano"),
          cssProcessorPluginOptions: {
            preset: ["default", { discardComments: { removeAll: true } }],
          },
          canPrint: true,
        }),
      ],
      devServer: {
        compress: true,
        port: 3000,
        liveReload: true,
        open: "Safari",
        onListening: function(server) {
          const port = server.listeningApp.address().port;
          console.log("Listening on port:", port);
        },
        overlay: {
          warnings: true,
          errors: true,
        },
      },
    };
  } else {
    return {
      mode: "production",
      entry: "./src/index.js",
      resolve: {
        alias: {
          svelte: path.resolve("node_modules", "svelte"),
        },
        extensions: [".mjs", ".js", ".svelte"],
        mainFields: ["svelte", "browser", "module", "main"],
      },
      output: {
        filename: "static/js/[name].[hash].js",
        path: path.join(__dirname, "build"),
        chunkFilename: "static/js/[name].[id].[hash].js",
      },
      devtool: false,
      module: {
        rules: [
          {
            test: /\.html$/,
            exclude: /node_modules/,
            use: { loader: "html-loader" },
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
            test: /\.js$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
          },
          {
            test: /\.svelte$/,
            use: {
              loader: "svelte-loader",
              options: {
                dev: argv.mode === "development" ? true : false,
                emitCss: true,
                hotReload: true,
                preprocess: require("svelte-preprocess")({
                  scss: {
                    importer: [magicImporter()],
                  },
                }),
              },
            },
          },
          {
            test: /\.(png|tiff|jpg|jpeg|gif|mp4|svg|ttf|woff(2)|eot|ico)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  outputPath: "static/assets",
                  name: "[name].[hash].[ext]",
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "public/index.html"),
        }),
        new MiniCssExtractPlugin({
          filename: "static/css/[name].[hash].css",
          chunkFilename: "static/css/[name].[id].[hash].css",
        }),
        new OptimizeCssAssetsPlugin({
          cssProcessor: require("cssnano"),
          cssProcessorPluginOptions: {
            preset: ["default", { discardComments: { removeAll: true } }],
          },
          canPrint: true,
        }),
        new RobotsPlugin({
          sitemap: domain + "/sitemap.xml",
          userAgents: robotstxt.userAgents,
        }),
        new SitemapPlugin(domain, require("./pwa.sitemap"), {
          lastmod: true,
          skipgzip: true,
        }),
        //new WebpackPwaManifest(require("./pwa.manifest")),
        new AppManifestWebpackPlugin(require("./pwa.manifest")),
        //new CompressionPlugin({ algorithm: "gzip" }),
        //new JavaScriptObfuscator(),
      ],
      optimization: {
        minimize: false,
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: true,
              ecma: 5,
              mangle: true,
            },
            sourceMap: true,
          }),
        ],
      },
    };
  }
};
