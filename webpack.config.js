const path = require('path');

module.exports = {
    entry: ['./src/index.jsx', './src/scss/index.scss'],
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8000,
        hot: true,
        contentBase: './dist',
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            { 
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            { 
                test: /\.jsx$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            }
        ]
    }
};