'use strict';
const webpack = require('webpack');


module.exports = {
    entry: {
        app: './Resource-modern/entry.js',
        vendor: ['react', 'react-dom', 'redux', 'react-redux']
    },
    output: {
        path: __dirname,
        filename: "./Resource/[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('libs')
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};