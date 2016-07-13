'use strict';

const Robot = require('./robot').Robot;
const Drone = require('./robot').Drone;
const Bipedal = require('./robot').Bipedal;
const ATV = require('./robot').ATV;

const specificBotsArr = require('./specificBots').specificBotsArr;
// specific bots in array//
let MegaATV = specificBotsArr[0];
let SharpATV = specificBotsArr[1];
let LaserDrone = specificBotsArr[2];
let PowerDrone = specificBotsArr[3];
let MutatedBipedal = specificBotsArr[4];
let RockHandsBipedal = specificBotsArr[5];

console.log("MegaATV", MegaATV.name);




