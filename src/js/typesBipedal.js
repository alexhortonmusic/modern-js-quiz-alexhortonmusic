'use strict';

const Bipedal = require('./robot').Bipedal;
const randoNumGen = require('./randoNumGen');

const ThreeLegs = function () {
	this.name = 'ThreeLegs';
	this.attack = 'Scissor Kick';
	this.minHealth += 3;
	this.maxHealth += 4;
	this.minDamage -= 2;
	this.maxDamage += 1;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

ThreeLegs.prototype = new Bipedal();

const StoneHands = function () {
	this.name = 'StoneHands';
	this.attack = 'Ground Pound';
	this.minHealth += 5;
	this.maxHealth += 5;
	this.minDamage += 3;
	this.maxDamage += 2;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

StoneHands.prototype = new Bipedal();

module.exports = {ThreeLegs, StoneHands};
