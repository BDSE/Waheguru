const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanDistFolder = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const watch = process.env.NODE_ENV === "dev_watch";

const config = {
    entry: {
        mainPageEntry: './src/index.js', //creating separate bundles for separate pages.
        nextPageEntry: './src/index2.js' //these are two entry points for two different pages.
    },
    devtool: 'source-map', //this only creates source map for JS, turn it off in production
    watch: watch ? true : false,
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
                exclude: /(node_modules)(jquery)/,
                use: 'babel-loader'
            },
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: [/lib/, /node_modules/], //exclude file from node_modules folder
                use: [
                    {
                        loader: "jshint-loader",
                        options: {
                            camelcase: true,
                            esversion: 6,
                            reporter: function(errors) { 
                             console.log("..........",errors);
                               for(let x in errors){
                                   let error = errors[x];
                                    this.emitError(`Linting Failed - ID: ${error.id} Code: ${error.code} Reason: ${error.reason} Evidence: ${error.evidence} At: ${error.line}:${error.character}`);
                               }
                            }
                          }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
              }
        ]
    },
    plugins: [
                 new CleanDistFolder(["dist"]),
                 new ExtractTextPlugin("[name].styles.css"),
                 new UglifyJSPlugin({
                    //  output: {
                    //      comments: false,
                    //     }
                    //turn on for production
                    sourceMap: true
                }),
                new webpack.DefinePlugin({
                    // Definitions...
                })
  ]
}

module.exports = config;
