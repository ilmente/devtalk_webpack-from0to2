const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const shared = require('./shared');

module.exports = merge(shared, {
    entry: {
        'code-split-commons': [
            './src/music/queen', 
            './src/music/metallica',
            './src/styles/commons'
        ],
        'code-split-1': './src/code-split.entry.js',
        'code-split-2': './src/code-split.entry-2.js',
        'code-split-3': './src/code-split.entry-3.js'
    },

    output: {
        filename: './[name]-[chunkhash].js'
    },

    module: {
        rules: [{
            test: /\.scss$/i,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        import: false,
                        url: false
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        outputStyle: 'expanded'
                    }
                }]
            })
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'code-split-commons',
            minChunks: 2
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'code-split-metallica',
            minChunks: (module, count) => {
                return module.resource && (/metallica/).test(module.resource);
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'code-split-manifest'
        }),

        new ExtractTextPlugin({
            filename: '[name].css'
        }),
    ]
});
