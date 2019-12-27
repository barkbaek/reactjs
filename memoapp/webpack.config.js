/**
 * Created by maway on 2019. 12. 20..
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                })],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    /*resolve: {
        root: path.resolve('./src')
    },*/

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};