const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack/loaders');


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
    }
};

module.exports = config;