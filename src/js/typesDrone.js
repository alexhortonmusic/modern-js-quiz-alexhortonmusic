'use strict';

const Drone = require('./robot').Drone;
const randoNumGen = require('./randoNumGen');

const PewPew = function () {
	this.name = 'PewPew';
	this.attack = 'Pew Pew Pew';
	this.minHealth += 0;
	this.maxHealth -= 5;
	this.minDamage += 1;
	this.maxDamage += 2;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

PewPew.prototype = new Drone();

const WhirrrMachine = function () {
	this.name = 'WhirrrMachine';
	this.attack = 'BoneSaw';
	this.minHealth -= 5;
	this.maxHealth -= 3;
	this.minDamage += 4;
	this.maxDamage += 4;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

WhirrrMachine.prototype = new Drone();

module.exports = {PewPew, WhirrrMachine};
