/**
 *  Webpack Configuration file for Rigel
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin  = require('html-webpack-plugin');
const CleanDistFolder = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const watch = process.env.NODE_ENV === "dev_watch";
const CDN = (process.env.CDN_URL)?process.env.CDN_URL+"/Rigel" : '/Rigel';
const context = __dirname+'/src/resources';
const VENDOR_LIB = [
    './lib/jquery/dist/jquery.js',
    './lib/angular/angular.js'
];

const config = {
    entry: {
        vendor: VENDOR_LIB,
        mainPageEntry: './index.js', //creating separate bundles for separate pages.
        nextPageEntry: './index2.js'//these are two entry points for two different pages.
    },
    context: path.resolve(context),
    //devtool: 'source-map', //this only creates source map for JS, turn it off in production, sourcemap plugin can be used alternatively as well.
    watch: watch ? true : false,
    output: {
        filename: '[name].js',
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
                            loader: "postcss-loader", // perform tasks like autoprepixing, minification etc
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
                exclude: [/lib/, /node_modules/],
                use: 'babel-loader'
            },
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: [/lib/, /node_modules/], //exclude file from node_modules folder
                use: [
                    {
                        loader: "jshint-loader", //options can be modified according to the preferences.
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
                 new CleanDistFolder([context+"/build",context+"/index.html",context+"/index2.html"]),
                 new ExtractTextPlugin("[name].css"),
                 new UglifyJSPlugin(
                    {
                        sourceMap: true,
                        uglifyOptions: {
                          ie8: false,
                          ecma: 8,
                          output: {
                            comments: false,
                            beautify: false
                          }
                        }
                      }
                 ),
                new webpack.DefinePlugin({
                    'process.env.ASSET_PATH': JSON.stringify(CDN)
                }),
                new webpack.optimize.CommonsChunkPlugin({
                    name: "vendor",
                    minChunks: Infinity, //infinity will not allow any other common chunk to be added in this vendor chunk.
                  }),
                  new htmlWebpackPlugin({
                      chunks: ['mainPageEntry'],
                      title: 'First page',
                      inject:false,
                      template: 'indexhtmlTemplates/index.html',
                      filename: '../index.html'
                  }),
                  new htmlWebpackPlugin({
                    chunks: ['nextPageEntry'],
                    title: 'Second page',
                    inject: false,
                    template: 'indexhtmlTemplates/index1.html',
                    filename: '../index2.html'
                }),
                new webpack.SourceMapDevToolPlugin({
                    // plugin makes sourcemaps for js and css by default.
                    exclude: ['vendor.js'] // will exclude jquery etc from the sourcemaps
                  })
  ]
}
module.exports = config;
