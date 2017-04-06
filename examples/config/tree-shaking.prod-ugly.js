const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./tree-shaking');

module.exports = merge(base, {

    output: {
        filename: './[name].prod.ugly.js'
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
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: true,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: true
        })
    ]
    
});