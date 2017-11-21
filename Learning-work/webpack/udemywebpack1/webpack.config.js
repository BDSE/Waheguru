/**
 *  Webpack Configuration file for Rigel
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin  = require('html-webpack-plugin');
const CleanDistFolder = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const watch = (process.env.WATCH)? true:false;
const isDev = process.env.ENV === 'dev';
const isPrd = process.env.ENV === 'prd';
const ASSET_PATH = (process.env.CDN_URL)?process.env.CDN_URL+"/Rigel" : '/Rigel';
const context = __dirname+'/src/resources';

//Add js libraries here.
const VENDOR_LIB = [
    './lib/jquery/dist/jquery.js',
    './lib/angular/angular.js'
];

let config = {
    entry: {
        vendor: VENDOR_LIB,
        mainPageEntry: './index.js', //creating separate bundles for separate pages.
        nextPageEntry: './index2.js'//these are two entry points for two different pages.
    },
    context: path.resolve(context),
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(context, 'build'),
        publicPath: ASSET_PATH+'/resources/build/'
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
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: "sass-loader",
                            options: {
                                outputStyle: (isDev)?"expanded":"compressed",
                                sourceComments: true,
                                sourceMap: false
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
                exclude: /node_modules/,
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
                 new CleanDistFolder([context+"/build",context+"/index.html", context+"/index2.html"]),
                 new ExtractTextPlugin("[name].[chunkhash].css"),
                 new webpack.DefinePlugin({
                        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
                 }),
                new webpack.optimize.CommonsChunkPlugin({
                    //this plugin makes sure that chunks that are common between two entry points are not loaded multiple times
                    //in this case vendor chunk will not be loaded twice even if you import a vendor file, say jquery, in your modules.
                    names: ['vendor','manifest'], //only add the common chunk to this bundle.
                    minChunks: Infinity, //infinity will not allow any other common chunk to be added in this vendor chunk.
                  }),
                  new htmlWebpackPlugin({
                      chunks: ['mainPageEntry','vendor','manifest'],
                      title: 'First page',
                      template: './indexTemplate.html',
                      filename: '../index.html'
                  }),
                  new htmlWebpackPlugin({
                    chunks: ['nextPageEntry','vendor','manifest'],
                    title: 'Second page',
                    template: './indexTemplate2.html',
                    filename: '../index2.html'
                }),
                // new webpack.SourceMapDevToolPlugin({
                //     // plugin makes sourcemaps for js and css by default.
                //     exclude: [/^vendor/,/^manifest/,/\.(scss|css|sass)$/] // will exclude jquery etc from the sourcemaps
                //   })
  ]
}

if(isDev){
    config = merge(config, {
        devServer: {
            contentBase: path.resolve(__dirname,'src/resources')
        },
        devtool: 'cheap-module-eval-source-map', //this only creates source map for JS, turn it off in production, sourcemap plugin can be used alternatively as well.
        watch: watch ? true : false,
    });
}else{
    config = merge(config, {
       devtool : (isPrd)? 'none':'source-map',//adding source maps for staging and poc envs.
        plugins: [
            new UglifyJSPlugin(
                {
                    sourceMap: false,
                    uglifyOptions: {
                      ie8: false,
                      ecma: 8,
                      output: {
                        comments: false,
                        beautify: false
                      }
                    }
                  }
             )
        ]
    });
}

const WebpackConfig = config;
module.exports =  WebpackConfig;
