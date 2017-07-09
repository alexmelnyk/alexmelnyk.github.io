/**
 * Created by nikita on 3/17/17.
 */
let loaders = [
    {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
    },
    {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    }
];

module.exports = loaders;