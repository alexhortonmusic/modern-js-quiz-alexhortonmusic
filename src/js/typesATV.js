'use strict';

const ATV = require('./robot').ATV;
const randoNumGen = require('./randoNumGen');

const Megachine = function () {
	this.name = 'Megachine';
	this.attack = 'RollOver';
	this.minHealth += 5;
	this.maxHealth += 5;
	this.minDamage += 0;
	this.maxDamage -= 1;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

Megachine.prototype = new ATV();

const Bladey = function () {
	this.name = 'Bladey';
	this.attack = 'Swirly Cutz';
	this.minHealth += 2;
	this.maxHealth += 2;
	this.minDamage += 4;
	this.maxDamage += 2;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

Bladey.prototype = new ATV();

module.exports = {Megachine, Bladey};
