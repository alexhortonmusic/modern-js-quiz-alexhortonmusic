(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const Combat = function () {
	// user chooses each player
	this.player1 = null;
	this.player2 = null;

	//fucntion to determine when fight is over
	function fatality (player1Health, player2Health) {
		if (player1Health <= 0) {
			player1Health = 0;
			return 'player1';
		}
		else if (player2Health <= 0) {
			player2Health = 0;
			return 'player2';
		}
		else {
			return 'none';
		}
	}
};

module.exports = {Combat};
},{}],2:[function(require,module,exports){
'use strict';

const Combat = require('./combat')

// bot types
const megaATV = require('./typesATV').megaATV;
const sharpATV = require('./typesATV').sharpATV;
const laserDrone = require('./typesDrone').laserDrone;
const powerDrone = require('./typesDrone').powerDrone;
const mutatedBipedal = require('./typesBipedal').mutatedBipedal;
const rockHandsBipedal = require('./typesBipedal').rockHandsBipedal;

let botArr = [];
botArr.push(megaATV);
botArr.push(sharpATV);
botArr.push(laserDrone);
botArr.push(powerDrone);
botArr.push(mutatedBipedal);
botArr.push(rockHandsBipedal);

let botNameArr = [
	'Megachine',
	'Bladey Spinz',
	'Pew Pew',
	'Whirrr Machine',
	'Mutant 2-Legs',
	'Stone Hands'
]

//populate bot chooser
function populateBotSelect () {
	for (let i = 0, j = botNameArr.length; i < j; i++) {
		$('.selectBox').append(`
			<option>${botNameArr[i]}</option>
		`);
		console.log("botNameArr", botNameArr[i]);
	}
}; 
populateBotSelect();





},{"./combat":1,"./typesATV":5,"./typesBipedal":6,"./typesDrone":7}],3:[function(require,module,exports){
"use strict";

function randoRange (min, max) {
	let range = Math.floor(Math.random() * (max - min) + min);
	return range;
}

module.exports = {randoRange};
},{}],4:[function(require,module,exports){
'use strict';

const randoNumGen = require('./randoNumGen');

function Robot () {
	this.name = null;
}

function Drone (minHealth, maxHealth, minDamage, maxDamage) { //idea to pass these values from Dan
	this.name = null;
	this.minHealth = minHealth;
	this.maxHealth = maxHealth;
	this.minDamage = minDamage;
	this.maxDamage = maxDamage;
	this.health = randoNumGen.randoRange(minHealth, maxHealth);
	this.attackDamage = randoNumGen.randoRange(minDamage, maxDamage);
}

Drone.prototype = new Robot();

function Bipedal (minHealth, maxHealth, minDamage, maxDamage) {
	this.name = null;
	this.minHealth = minHealth;
	this.maxHealth = maxHealth;
	this.minDamage = minDamage;
	this.maxDamage = maxDamage;
	this.health = randoNumGen.randoRange(minHealth, maxHealth);
	this.attackDamage = randoNumGen.randoRange(minDamage, maxDamage);
}

Bipedal.prototype = new Robot();

function ATV (minHealth, maxHealth, minDamage, maxDamage) {
	this.name = null;
	this.minHealth = minHealth;
	this.maxHealth = maxHealth;
	this.minDamage = minDamage;
	this.maxDamage = maxDamage;
	this.health = randoNumGen.randoRange(minHealth, maxHealth);
	this.attackDamage = randoNumGen.randoRange(minDamage, maxDamage);
}

ATV.prototype = new Robot();

module.exports = {Robot, Drone, Bipedal, ATV};

},{"./randoNumGen":3}],5:[function(require,module,exports){
'use strict';

const ATV = require('./robot').ATV;

const MegaATV = function () {
	this.name = 'Megachine';
	this.attack = 'RollOver';
};

MegaATV.prototype = new ATV(85, 95, 6, 9);

const SharpATV = function () {
	this.name = 'Bladey Spinz';
	this.attack = 'Swirly Cutz';
};

SharpATV.prototype = new ATV(85, 100, 4, 11);

let sharpATV = new SharpATV();
let megaATV = new MegaATV();

module.exports = {megaATV, sharpATV};
},{"./robot":4}],6:[function(require,module,exports){
'use strict';

const Bipedal = require('./robot').Bipedal;

const MutatedBipedal = function () {
	this.name = 'Mutant 2-Legs';
	this.attack = 'Scissor Kick';
};

MutatedBipedal.prototype = new Bipedal(80, 90, 6, 10);

const RockHandsBipedal = function () {
	this.name = 'Stone Hands';
	this.attack = 'Ground Pound';
};

RockHandsBipedal.prototype = new Bipedal(100, 105, 10, 12);

let mutatedBipedal = new MutatedBipedal();
let rockHandsBipedal = new RockHandsBipedal();

module.exports = {mutatedBipedal, rockHandsBipedal};
},{"./robot":4}],7:[function(require,module,exports){
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

let laserDrone = new LaserDrone();
let powerDrone = new PowerDrone();

module.exports = {laserDrone, powerDrone};
},{"./robot":4}]},{},[2])


//# sourceMappingURL=bundle.js.map
