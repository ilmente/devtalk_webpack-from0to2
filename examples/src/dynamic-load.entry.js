import { bohemianRhapsody } from './music/queen';

bohemianRhapsody();

import('./music/foo-fighters').then(function(foo) {
    foo.thePretender();
}).catch(function(err) {
    console.error('Failed to load Foo Fighters', err);
});