const path = require('path'); //path is node's function to resolve the path
//const builDir = `${__dirname}/src`;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config =  {
    
        entry: './src/index.js',
        output :{
            path: path.resolve(__dirname, 'build'),//__dirname is nodes constant for current working dir
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    use: 'babel-loader', //use babel-loader
                    test: /\.js$/   //only apply to the js files
                },
                // {
                //     use: ['style-loader', 'css-loader'],
                //     test: /\.css$/
                // }
                {
                    use: ExtractTextPlugin.extract({
                      fallback: "style-loader",
                      use: "css-loader"
                    }),
                    test: /\.css$/
                }
            ]
        },     
        plugins: [
            new ExtractTextPlugin("styles.css"),
          ]
    };
    
    module.exports = config;

