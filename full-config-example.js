const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const settings = require('./settings');

let config = {
    context: settings.paths.rootDir,
    stats: settings.options.isVerbose ? 'normal' : 'errors-only',
    devtool: settings.options.isProduction ? false : 'cheap-module-eval-source-map',
    watch: settings.options.isWatching,

    entry:  {
        app: path.join(settings.paths.sourceDir, 'app.entry.js'),
        vendor: path.join(settings.paths.sourceDir, 'vendor.entry.js'))
    },

    output: {
        path: settings.paths.publicDir,
        filename: './js/[name].js'
    },

    resolve: {
        modules: ['node_modules', settings.paths.sourcePath],
        extensions: ['.js', '.css', '.scss'],
        alias: {
            lib: path.join(settings.paths.sourceDir, 'lib'),
            atoms: path.join(settings.paths.sourceDir, 'app/components/atoms'),
            molecules: path.join(settings.paths.sourceDir, 'app/components/molecules'),
            organisms: path.join(settings.paths.sourceDir, 'app/components/organisms'),
            templates: path.join(settings.paths.sourceDir, 'app/components/templates'),
            pages: path.join(settings.paths.sourceDir, 'app/components/pages')
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|vendor)/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/i,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: !settings.options.isProduction,
                        import: false,
                        url: false
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: !settings.options.isProduction,
                        outputStyle: settings.options.isProduction ? 'compressed' : 'expanded'
                    }
                }]
            })
        }, {
            test: /\.(ttf|woff2?|eot|svg|otf)\??(\d*\w*=?\.?)+$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '/fonts/[name].[ext]',
                    publicPath: settings.paths.publicPath
                }
            }]
        }]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: settings.paths.rootDir,
                postcss: [
                    autoprefixer({
                        browsers: ['last 4 versions']
                    })
                ]
            }
        }),
        new webpack.DefinePlugin({
            DEV: !settings.options.isProduction,
            'process.env': {
                'NODE_ENV': settings.options.isProduction ? '"production"' : ''
            }
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: './js/commons.js'
        }),
        new ExtractTextPlugin({
            filename: 'css/style.css'
        }),
        new CopyPlugin([{
            from: path.join(settings.paths.sourceDir, 'images'),
            to: 'img'
        }, {
            from: path.join(settings.paths.sourceDir, 'fonts'),
            to: 'fonts'
        }])
    ]
};

if (settings.options.isProduction) {
    config.plugins = [
        ...config.plugins,
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
                source_map: null
            },
            sourceMap: true,
            mangle: false,
            compress: {
                warnings: false,
                dead_code: true
            }
        })
    ];
}

module.exports = config;
