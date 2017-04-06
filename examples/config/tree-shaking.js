const merge = require('webpack-merge');
const shared = require('./shared');

module.exports = merge(shared, {
    entry: {
        'tree-shaking': './src/tree-shaking.entry.js'
    }
});
