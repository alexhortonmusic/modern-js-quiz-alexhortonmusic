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