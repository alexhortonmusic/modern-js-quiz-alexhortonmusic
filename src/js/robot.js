'use strict';

const randoNumGen = require('./randoNumGen');

function Robot () { //idea to pass these values from Dan
	this.minHealth = 80;
	this.maxHealth = 90;
	this.minDamage = 6;
	this.maxDamage = 10;
}
function Drone (minHealth, maxHealth, minDamage, maxDamage) {
	this.botType = 'Drone';
}

Drone.prototype = new Robot();

function Bipedal (minHealth, maxHealth, minDamage, maxDamage) {
	this.botType = 'Bipedal';
}

Bipedal.prototype = new Robot();

function ATV (minHealth, maxHealth, minDamage, maxDamage) {
	this.botType = 'ATV';
}

ATV.prototype = new Robot();

module.exports = {Robot, Drone, Bipedal, ATV};
