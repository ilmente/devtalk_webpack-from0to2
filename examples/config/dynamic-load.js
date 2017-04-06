const webpack = require('webpack');
const merge = require('webpack-merge');
const shared = require('./shared');

module.exports = merge(shared, {
    entry: {
        'dynamic-load-commons': [
            './src/music/queen'
        ],
        'dynamic-load-1': './src/dynamic-load.entry.js',
        'dynamic-load-2': './src/dynamic-load.entry-2.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'dynamic-load-commons',
            minChunks: 3
        }),

        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'dynamic-load-manifest'
        })
    ]
});
