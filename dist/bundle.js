(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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





},{"./robot":3,"./specificBots":4}],2:[function(require,module,exports){
"use strict";

function randoRange (min, max) {
	let damageRange = Math.floor(Math.random() * (max - min) + min);
}

module.exports = {randoRange};
},{}],3:[function(require,module,exports){
'use strict';

const randoNumGen = require('./randoNumGen');

const Robot = function () {
	this.name = null;
};

const Drone = function (minHealth, maxHealth, minDamage, maxDamage) { //idea to pass these values from Dan
	this.name = 'Drone';
	this.minHealth = minHealth;
	this.maxHealth = maxHealth;
	this.minDamage = minDamage;
	this.maxDamage = maxDamage;
	this.health = randoNumGen.randoRange(minHealth, maxHealth);
};

Drone.prototype = new Robot();

const Bipedal = function (minHealth, maxHealth, minDamage, maxDamage) {
	this.name = 'Bipedal';
	this.minHealth = minHealth;
	this.maxHealth = maxHealth;
	this.minDamage = minDamage;
	this.maxDamage = maxDamage;
	this.health = randoNumGen.randoRange(minHealth, maxHealth);
};

Bipedal.prototype = new Robot();

const ATV = function (minHealth, maxHealth, minDamage, maxDamage) {
	this.name = 'ATV';
	this.minHealth = minHealth;
	this.maxHealth = maxHealth;
	this.minDamage = minDamage;
	this.maxDamage = maxDamage;
	this.health = randoNumGen.randoRange(minHealth, maxHealth);
};

ATV.prototype = new Robot();

module.exports = {Robot, Drone, Bipedal, ATV};

},{"./randoNumGen":2}],4:[function(require,module,exports){
'use strict';

const MegaATV = require('./typesATV').MegaATV;
const SharpATV = require('./typesATV').SharpATV;
const LaserDrone = require('./typesDrone').LaserDrone;
const PowerDrone = require('./typesDrone').PowerDrone;
const MutatedBipedal = require('./typesBipedal').MutatedBipedal;
const RockHandsBipedal = require('./typesBipedal').RockHandsBipedal;

const specificBotsArr = [MegaATV, SharpATV, LaserDrone, PowerDrone, MutatedBipedal, RockHandsBipedal];
module.exports = {specificBotsArr};
},{"./typesATV":5,"./typesBipedal":6,"./typesDrone":7}],5:[function(require,module,exports){
'use strict';

const ATV = require('./robot').ATV;

const MegaATV = function () {
	this.name = 'Megachine';
	this.attack = 'RollOver';
};

MegaATV.prototype = new ATV();

const SharpATV = function () {
	this.name = 'Bladey Spinz';
	this.attack = 'Swirly Cutz';
};

SharpATV.prototype = new ATV();

module.exports = {MegaATV, SharpATV};
},{"./robot":3}],6:[function(require,module,exports){
'use strict';

const Bipedal = require('./robot').Bipedal;

const MutatedBipedal = function () {
	this.name = 'Mutant 2-Legs';
	this.attack = 'Scissor Kick';
};

MutatedBipedal.prototype = new Bipedal();

const RockHandsBipedal = function () {
	this.name = 'Stone Hands';
	this.attack = 'Ground Pound';
};

RockHandsBipedal.prototype = new Bipedal();

module.exports = {MutatedBipedal, RockHandsBipedal};
},{"./robot":3}],7:[function(require,module,exports){
'use strict';

const Drone = require('./robot').Drone;

const LaserDrone = function () {
	this.name = 'Pew Pew';
	this.attack = 'Pew Pew Pew';
};

LaserDrone.prototype = new Drone(70, 80, 5, 8);

const PowerDrone = function () {
	this.name = 'Whirrr Machine';
	this.attack = 'BoneSaw';
};

PowerDrone.prototype = new Drone(60, 90, 3, 4);

module.exports = {LaserDrone, PowerDrone};
},{"./robot":3}]},{},[1])


//# sourceMappingURL=bundle.js.map
