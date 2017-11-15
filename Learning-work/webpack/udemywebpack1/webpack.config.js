const watch = process.env.NODE_ENV === "dev_watch";
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanDistFolder = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: {
        mainPageEntry: './src/index.js', //creating separate bundles for separate pages.
        nextPageEntry: './src/index2.js' //these are two entry points for two different pages.
    },
    devtool: 'inline-source-map', //this only creates source map for JS
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", // creates style nodes from JS strings
                    use: [
                        {
                            loader: "css-loader", // translates CSS into CommonJS
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader", // perform tasks like autoprepixing, minification etc seepostcss.config.css
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader", // compiles Sass to CSS
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
    new CleanDistFolder(["dist"]),
    new ExtractTextPlugin("[name].styles.css"),
    new UglifyJSPlugin({
        sourceMap: true
      }),
    new webpack.DefinePlugin({
        // Definitions...
      })
  ],
  watch: watch ? true: false
}

module.exports = config;
