const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin  = require('html-webpack-plugin');
const CleanDistFolder = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const watch = process.env.NODE_ENV === "dev_watch";
const CDN = (process.env.CDN_URL)?process.env.CDN_URL+"/Rigel" : '/Rigel';
const context = __dirname+'/src/resources';
const VENDOR_LIB = ['./lib/jquery/dist/jquery.js','./lib/angular/angular.js'];

const config = {
    entry: {
        vendor: VENDOR_LIB,
        mainPageEntry: './index.js', //creating separate bundles for separate pages.
        nextPageEntry: './index2.js'//these are two entry points for two different pages.
    },
    context: path.resolve(context),
    devtool: 'source-map', //this only creates source map for JS, turn it off in production
    watch: watch ? true : false,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(context, 'build'),
        publicPath: 'build/'
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
              },
              {
                  test: /\.(jpe?g|png|gif|svg)$/,
                  use : [
                      {
                          loader: 'file-loader'
                      } 
                  ]
              }
        ]
    },
    plugins: [
                 new CleanDistFolder([context+"/build"]),
                 new ExtractTextPlugin("[name].styles.css"),
                //  new UglifyJSPlugin({
                //     // comments: false,
                //     // dropDebugger: true,
                //     // dropConsole: true,
                //     // compressor: {
                //     //   warnings: false,
                //     // }
                //     //  output: {
                //     //      comments: false,
                //     //     }
                //     //turn on for production
                //     sourceMap: true
                // }),
                new webpack.DefinePlugin({
                    'process.env.ASSET_PATH': JSON.stringify(CDN)
                }),
                new webpack.optimize.CommonsChunkPlugin({
                    name: "vendor",
                    minChunks: Infinity, //infinity will not allow any other common chunk to be added in this vendor chunk.
                  }),
                  new htmlWebpackPlugin({
                      title: 'First page',
                      template: 'indexhtmlTemplates/index.html',
                      chunks: ['mainPageEntry','vendor'],
                      filename: '../index.html'
                  }),
                  new htmlWebpackPlugin({
                    title: 'Second page',
                    template: 'indexhtmlTemplates/index1.html',
                    chunks: ['nextPageEntry','vendor'],
                    filename: '../index2.html'
                })
  ]
}
module.exports = config;
