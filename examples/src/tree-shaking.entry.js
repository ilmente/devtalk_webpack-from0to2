import * as sinatra from './music/sinatra';
import { bohemianRhapsody } from './music/queen';
import { MasterOfPuppets } from './music/metallica';
import { BraveNewWorld } from './music/iron-maiden';
import { NothingLeftToLose, thePretender } from './music/foo-fighters';

sinatra.myWay();

bohemianRhapsody();

const mop = new MasterOfPuppets();
mop.welcomeHome();

const bnw = new BraveNewWorld();
bnw.bloodBrothers();

const nltl = new NothingLeftToLose();
nltl.learnToFly();

thePretender();