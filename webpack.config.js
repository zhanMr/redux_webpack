'use strict';
const webpack = require('webpack');


module.exports = {
    //devtool: '#eval-source-map',
    entry: {
        app: './Resource-modern/entry.js',
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'jquery', 'lodash', 'angular', 'angular-route']
    },
    output: {
        path: __dirname,
        filename: "./Resource/[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('libs'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader?modules" }
        ]
    }
};
