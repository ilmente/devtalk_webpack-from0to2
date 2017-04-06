const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./tree-shaking');

module.exports = merge(base, {

    output: {
        filename: './[name].prod.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: false
        })
    ]
    
});