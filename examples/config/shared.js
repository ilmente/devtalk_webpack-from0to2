const path = require('path');
const cwd = process.cwd();

let config = {
    context: cwd,
    devtool: false,
    bail: true,
    watch: false,

    output: {
        path: path.resolve('./dist'),
        filename: './[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}

module.exports = config
