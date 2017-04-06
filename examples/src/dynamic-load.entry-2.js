import { bohemianRhapsody } from './music/queen';

bohemianRhapsody();

require.ensure(['./music/sinatra'], function(require){
    const sinatra = require('./music/sinatra');
    sinatra.myWay();
}, 'swing-chunk');

require.ensure([], function(require){
    const ironMaiden = require('./music/iron-maiden');
    const bnw = new ironMaiden.BraveNewWorld();
    bnw.bloodBrothers();
}, 'metal-chunk');

require.ensure(['./music/metallica'], function(require){
    const metallica = require('./music/metallica');
    const mop = new metallica.MasterOfPuppets();
    mop.welcomeHome();
}, 'metal-chunk');