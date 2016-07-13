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
