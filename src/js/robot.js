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
