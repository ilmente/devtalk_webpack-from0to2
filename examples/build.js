const colors = require('colors/safe');
const webpack = require('webpack');
const moment = require('moment');

function build(configuration) {
    if (configuration.watch) {
        console.log('watchers enabled', colors.dim('(press [ctrl+c] to exit)'));
    }

    console.log(colors.magenta('building assets...'));

    try {
        webpack(configuration, (error, multiStats) => {
            if (error) {
                console.error(colors.red('error:'), error.toString());
                console.error(colors.red('details:'), error.details);
                console.error('build aborted');
                return;
            }

            multiStats.stats.forEach(stats => {
                console.log(stats.toString({
                    colors: true
                }));

                let duration = moment(stats.endTime - stats.startTime).format('s.SS');
                let message = colors.green('built in ' + duration + 's');
                let logFn = 'log';

                if (stats.hasErrors()) {
                    message = 'build failed';
                    logFn = 'error';
                }

                if (configuration.watch) {
                    let endTime = moment(stats.endTime).format('HH:mm:ss');
                    message = colors.dim('[' + endTime + '] ') + message + '...';
                }

                console[logFn].apply(console, [message]);
            });
        });
    } catch (error) {
        console.error(colors.red('error:'), error.toString());
        console.error('build aborted');
    }
}

module.exports = build;
