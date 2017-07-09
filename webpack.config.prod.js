const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack/loaders');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = {
    context: __dirname + "/app/",
    entry: {
        app: ["./index.jsx"]
    },
    //OUTPUT
    output: {
        path: path.resolve(__dirname, "./build"),
        publicPath: "/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    //LOADERS
    module: {
        loaders: loaders
    },
    //plugins
    plugins: [
        new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify("production") 
           }
        }),
        new webpack.BannerPlugin("Copyright Melnik"),
        new UglifyJSPlugin()
    ]
};

module.exports = config;