const colors = require('colors/safe');
const yargs = require('yargs').argv;
const build = require('./build'); 

const map = {
    cs: [
        require('./config/code-split')
    ],

    dl: [
        require('./config/dynamic-load')
    ],

    ts: [
        require('./config/tree-shaking'),
        require('./config/tree-shaking.prod'),
        require('./config/tree-shaking.prod-ugly')
    ]
};

const config = map[yargs.app];
build(config);